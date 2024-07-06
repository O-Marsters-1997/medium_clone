"use client";

import React, { ReactNode } from "react";
import { Modal } from "react-aria-components";

type Props = {
  children: ReactNode;
};

const MyModal = ({ children }: Props) => {
  return <Modal>{children}</Modal>;
};

export default MyModal;
