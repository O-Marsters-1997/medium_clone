"use client";

import React, { type ReactNode } from "react";
import { Button } from "react-aria-components";
import { logger } from "~/utils/logger";

type Props = {
  children: ReactNode;
};

const MyButton = ({ children }: Props) => {
  return (
    <div>
      <Button
        onPress={() => {
          logger.log("hello world");
        }}
      >
        {children}
      </Button>
    </div>
  );
};

export default MyButton;
