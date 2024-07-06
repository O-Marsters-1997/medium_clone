"use client";

import React, { useEffect } from "react";
import { logger } from "~/utils/logger";

type Props = {
  error: Error;
  reset: () => void;
};

const Error = ({ error, reset }: Props) => {
  useEffect(() => {
    logger.error(error.message);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
};

export default Error;
