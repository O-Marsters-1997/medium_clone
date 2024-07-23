"use client";

import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";
import { Modal as BaseModal } from "react-aria-components";
import Text from "~/components/Text";
import { styles } from "~/components/styles/Modal.css";
import { useGetSearchParams } from "~/hooks/navigation";
import { styles as fontStyles } from "~/styles/theme/typography.css";
import { Overlay, useModalOverlay } from "react-aria";

type Props = {
  title: string;
  children: ReactNode;
};

const Modal = ({ title, children }: Props) => {
  const router = useRouter();

  const { modalContainer, modal } = styles;
  return (
    <div className={modalContainer} onClick={() => router.back()}>
      <div className={modal} onClick={(evt) => evt.stopPropagation()}>
        <Text variant="h2" className={fontStyles.loginModalTitle}>
          {title}
        </Text>
        {children}
      </div>
    </div>
  );
};

export default Modal;
