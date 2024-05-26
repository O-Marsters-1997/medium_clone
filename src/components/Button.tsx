"use client";

import React, { type ReactNode } from "react";
import { Button } from "react-aria-components";
import { logger } from "~/utils/logger";

const MyButton = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Button
        onPress={() => {
          logger.log("hello world");
        }}
      >
        Click me
      </Button>
      {children}
    </div>
  );
};

export default MyButton;
