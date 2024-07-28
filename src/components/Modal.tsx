"use client";

import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";
import Text from "~/components/Text";
import { styles } from "~/components/styles/Modal.css";
import { useGetSearchParams } from "~/hooks/navigation";
import { styles as fontStyles } from "~/styles/theme/typography.css";
import clsx from "clsx";
import Icon from "~/components/Icon";
import { routes } from "~/utils/routes";

type Props = {
  title: string;
  params: string;
  children: ReactNode;
};

const Modal = ({ title, children, params }: Props) => {
  const router = useRouter();
  const urlParams = useGetSearchParams(params);
  const { modalContainer, modal, modalContent, modalIcon } = styles;

  return (
    <>
      {urlParams && (
        <div
          className={modalContainer}
          onClick={() => router.replace(routes.home)}
        >
          <div className={modal} onClick={(evt) => evt.stopPropagation()}>
            <Icon
              icon="cross"
              color="primary"
              className={modalIcon}
              size="xs"
              onClick={() => router.replace(routes.home)}
            />
            <Text variant="h2" className={clsx(fontStyles.AuthModalTitle)}>
              {title}
            </Text>
            <div className={modalContent}>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
