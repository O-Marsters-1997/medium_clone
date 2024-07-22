"use client";

import React from "react";
import clsx from "clsx";
import { useTheme } from "~/context/ThemeContext";
import { colorPalette, iconSizes } from "~/styles/variables.css";
import { IconDefinition, IconSvg } from "~/components/icon/index";
import { styles } from "./styles/Icon.css";
import { ValueOf } from "~/types";

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
  onClick?: () => void;
};

const Icon = ({ icon, color, height, width, onClick }: Props) => {
  const { selectedTheme } = useTheme();

  const iconColor = color && iconColorMap[color][selectedTheme];
  const SvgIcon = IconSvg[icon];

  return (
    <SvgIcon
      color={iconColor}
      height={height ?? iconSizes.md}
      width={width ?? iconSizes.md}
      className={clsx(onClick && styles.clickable)}
      onClick={onClick}
    />
  );
};

export default Icon;
