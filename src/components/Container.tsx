import React, { ReactNode } from "react";

type Props = {
  onToggle: () => void;
  children: ReactNode;
};

const Container = ({ children, onToggle }: Props) => {
  return <div onClick={onToggle}>{children}</div>;
};

export default Container;
