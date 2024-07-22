"use client";

import React from "react";
import clsx from "clsx";
import { useTheme } from "~/context/ThemeContext";
import { colorPalette, iconSizes } from "~/styles/variables.css";
import { IconDefinition, IconSvg } from "~/components/icon/index";
import { styles } from "./styles/Icon.css";

type IconSizeVariant = keyof typeof iconSizes;

type IconSizeVariantMap = { height: IconSizeVariant; width: IconSizeVariant };

type ValidIconSizePropOption = IconSizeVariant | IconSizeVariantMap;

const iconColorMap = {
  primary: {
    light: colorPalette.iconPrimary,
    dark: colorPalette.iconPrimaryDark,
  },
};

export type StyleProps = {
  color?: keyof typeof iconColorMap;
  size?: ValidIconSizePropOption;
};

type Props = StyleProps & {
  icon: IconDefinition;
  onClick?: () => void;
};

const getDimensions = (size?: ValidIconSizePropOption): IconSizeVariantMap => {
  const baseDimensions: IconSizeVariantMap = {
    height: "md",
    width: "md",
  };

  if (!size) return baseDimensions;

  const isIconSize = (
    size: ValidIconSizePropOption,
  ): size is IconSizeVariant => {
    return typeof size === "string";
  };

  if (isIconSize(size)) {
    return {
      height: size,
      width: size,
    };
  }

  return {
    height: size.height ?? baseDimensions.height,
    width: size.width ?? baseDimensions.width,
  };
};

const Icon = ({ icon, color, size, onClick }: Props) => {
  const { selectedTheme } = useTheme();

  const iconColor = color && iconColorMap[color][selectedTheme];
  const SvgIcon = IconSvg[icon];

  const { height, width } = getDimensions(size);

  return (
    <SvgIcon
      color={iconColor}
      height={iconSizes[height]}
      width={iconSizes[width]}
      className={clsx(onClick && styles.clickable)}
      onClick={onClick}
    />
  );
};

export default Icon;
