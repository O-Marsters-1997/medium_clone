import React, { ReactNode, useEffect, useState } from "react";
import Link from "~/components/Link";
import { styles } from "~/screens/login/AuthScreen.css";
import Modal from "~/components/Modal";
import Text from "~/components/Text";
import { sprinkles } from "~/styles/sprinkles.css";
import { AuthVariant, getAlternativeAuthVariant } from "~/utils/navigation";
import ProviderAuth from "~/components/Auth/ProviderAuth";

import { useParams } from "next/navigation";
import { useGetSearchParams } from "~/hooks/navigation";

type Props = {
  variant: AuthVariant;
};

const AuthScreen = ({ variant }: Props) => {
  const alternativeAuthVariant = getAlternativeAuthVariant(variant);
  const { text, href, title } = alternativeAuthVariant;
  const { modalActions } = styles;

  return (
    <Modal title={title} params="auth">
      <div className={modalActions}>
        <ProviderAuth variant={variant} />
      </div>
      <Text variant="subtitle">
        <span>{text.primary}</span>
        <Link
          href={href}
          className={sprinkles({
            ml: "s1",
            td: "none",
            fw: 600,
            textAlign: "center",
            color: "greenPrimary",
          })}
        >
          {text.secondary}
        </Link>
      </Text>
    </Modal>
  );
};

export default AuthScreen;
