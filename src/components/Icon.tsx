"use client";

import React from "react";
import { IconDefinition, IconSvg } from "../utils/icon/IconSvg";
import { iconSizes } from "~/styles/variables.css";

type Props = {
  icon: IconDefinition;
  color?: string;
  height?: keyof typeof iconSizes;
};

const Icon = ({ icon, color, height = "md" }: Props) => {
  const SvgIcon = IconSvg[icon];

  return <SvgIcon color={color} height={height} />;
};

export default Icon;
