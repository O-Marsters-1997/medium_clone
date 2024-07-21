"use client";

import React from "react";
import { useTheme } from "~/context/ThemeContext";
import { colorPalette, iconSizes } from "~/styles/variables.css";
import { IconSvg } from "~/components/icon/index";
import { ValueOf } from "~/types";

type IconDefinition = "search";

type IconSize = ValueOf<typeof iconSizes>;

const iconColorMap = {
  primary: {
    light: colorPalette.iconPrimary,
    dark: colorPalette.iconPrimaryDark,
  },
};

export type StyleProps = {
  color?: keyof typeof iconColorMap;
  width?: IconSize;
  height?: IconSize;
};

type Props = StyleProps & {
  icon: IconDefinition;
};

const Icon = ({ icon, color, height, width }: Props) => {
  const { selectedTheme } = useTheme();

  const iconColor = color && iconColorMap[color][selectedTheme];
  const SvgIcon = IconSvg[icon];

  return (
    <SvgIcon
      color={iconColor}
      height={height ?? iconSizes.md}
      width={width ?? iconSizes.md}
    />
  );
};

export default Icon;
