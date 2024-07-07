import fs from "fs";
import * as url from "url";
import path from "path";
import { optimize } from "svgo";
import prettier from "prettier";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const iconsPath = path.join(__dirname, "../assets/icons/");

const iconsGeneratedPath = path.join(__dirname, "../utils/icon/IconSvg.tsx");

async function run() {
  const icons = [];
  const iconFiles = fs.readdirSync(iconsPath).filter((f) => f[0] !== ".");
  let result = { processed: [], errors: [] };

  for (const i in iconFiles) {
    const iconFileName = iconFiles[i];
    try {
      if (!iconFileName.match(/\.svg$/)) {
        throw new Error(`Only *.svg files allowed`);
      }

      const iconFileData = fs.readFileSync(
        path.resolve(iconsPath, iconFileName),
      );

      let svg;

      try {
        svg = optimize(iconFileData, {
          path: iconFileName,
          plugins: [
            {
              name: "preset-default",
              params: {
                overrides: {
                  removeViewBox: false,
                },
              },
            },
            "removeDimensions",
          ],
        });
      } catch (error) {
        throw new Error(`Cannot process SVG content`);
      }
      if (!svg || !svg.data || svg.data.length === 0) {
        throw new Error(`No SVG content`);
      }

      icons.push({
        icon: iconFileName.slice(0, -4),
        filename: iconFileName,
        svg: svg.data
          .replace(/class/g, "className")
          .replace(/clip-path/g, "clipPath")
          .replace(/stroke-linecap/g, "strokeLinecap")
          .replace(/stroke-linejoin/g, "strokeLinejoin")
          .replace(/stroke-width/g, "strokeWidth")
          .replace(/clip-rule/g, "clipRule")
          .replace(/fill-rule/g, "fillRule")
          .replace(/fill-opacity/g, "fillOpacity")
          .replace(/stroke-opacity/g, "strokeOpacity")
          .replace(/stop-color/g, "stopColor")
          .replace(/stop-opacity/g, "stopOpacity")
          .replace(/stroke-miterlimit/g, "strokeMiterlimit"),
      });
      result.processed.push(iconFileName);
    } catch (error) {
      result.errors.push(`${iconFileName}: ${error.message}`);
    }
  }

  if (result.errors.length > 0) {
    process.exit(1);
  }

  const iconComponent = [
    `// WARNING: auto-generated\n`,
    `//\n`,
    `// Do not make manual changes to this file.\n`,
    `//\n`,
    `\n\n`,
    `/*\n`,
    `A list of all available icons in the icon set.\n`,
    `*/\n`,
    `\n\n`,
    `import React from "react";\n`,
    `import { sprinkles } from "~/styles/sprinkles.css";\n`,
    `import { StyleProps as IconProps } from "~/components/Icon";\n\n`,
    "export type IconDefinition = ",
    icons.map((i) => `'${i.icon}'`).join(" | "),
    `;\n\n`,
    `export const availableIcons: IconDefinition[] = [`,
    icons.map((i) => `'${i.icon}'`).join(", "),
    `];\n\n`,
    `export const IconSvg: Record<IconDefinition, ({ color, height }: IconProps) => React.ReactNode> = {\n`,
    icons
      .map((i) => {
        const svgWithVariableFillAndStroke = i.svg
          .replace(
            /(<path[^>]*?)fill="([^"]*)"(.*?>)/g,
            '$1fill={color ?? "$2"}$3',
          )
          .replace(
            /(<path[^>]*?)stroke="([^"]*)"(.*?>)/g,
            '$1stroke={color ?? "$2"}$3',
          )
          .replace(
            /(<svg[^>]*?)(>)/g,
            "$1 className={sprinkles({ h: height })}$2",
          );
        return `'${i.icon}': ({color, height}:IconProps)=>${svgWithVariableFillAndStroke},\n`;
      })
      .join(""),
    `};\n`,
  ];

  try {
    fs.writeFileSync(
      iconsGeneratedPath,
      await prettier.format(iconComponent.join(""), { parser: "typescript" }),
      "utf-8",
    );
  } catch (error) {
    console.error(error);
  }
}

run();
