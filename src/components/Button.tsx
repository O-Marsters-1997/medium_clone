"use client";

import React, { ReactNode } from "react";
import { Button } from "react-aria-components";

const MyButton = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Button onPress={() => console.log("hello world")}>Click me</Button>
      {children}
    </div>
  );
};

export default MyButton;
