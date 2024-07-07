"use client";

import React from "react";
import { IconDefinition, IconSvg } from "../utils/icon/IconSvg";
import { colorPalette, iconSizes } from "~/styles/variables.css";

export type StyleProps = {
  color?: (typeof colorPalette)[keyof typeof colorPalette];
  height?: keyof typeof iconSizes;
};

type Props = StyleProps & {
  icon: IconDefinition;
};

const Icon = ({ icon, color, height = "md" }: Props) => {
  const SvgIcon = IconSvg[icon];

  return <SvgIcon color={color} height={height} />;
};

export default Icon;
