const path = require("path");

function defaultIndexTemplate(filePaths) {
  const comments = [
    "// WARNING: auto-generated",
    "//",
    "// Do not make manual changes to this file.",
    "//",
    "/*",
    "A list of all available icons in the icon set.",
    "*/",
  ];

  const importEntries = filePaths.map(({ path: filePath }) => {
    const basename = path.basename(filePath, path.extname(filePath));
    const importName = /^\d/.test(basename) ? `Svg${basename}` : basename;
    return `
      import { default as ${importName} } from './${basename}';`;
  });

  const iconDefinitionProps = `\n\nexport type IconDefinition = ${filePaths
    .map(({ path: filePath }, index) => {
      const basename = path.basename(filePath, path.extname(filePath));
      return `"${basename}"${index < filePaths.length - 1 ? " |" : ""}`;
    })
    .join(" ")}\n\n`;

  const componentMap = [
    "\nexport const IconSvg = {\n",
    ...filePaths.map(({ path: filePath }) => {
      const basename = path.basename(filePath, path.extname(filePath));
      const importName = /^\d/.test(basename) ? `Svg${basename}` : basename;
      return `${importName},`;
    }),
    "}",
  ];

  return [
    ...comments,
    ...importEntries,
    iconDefinitionProps,
    ...componentMap,
  ].join("\n");
}

module.exports = defaultIndexTemplate;
