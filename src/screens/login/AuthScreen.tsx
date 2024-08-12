import React, { ReactNode, useEffect, useState } from "react";
import Link from "~/components/Link";
import { styles } from "~/screens/login/AuthScreen.css";
import Modal from "~/components/Modal";
import Text from "~/components/Text";
import { sprinkles } from "~/styles/sprinkles.css";
import { AuthVariant, getAuthVariantCopy } from "~/utils/navigation";
import ProviderAuth from "~/components/Auth/ProviderAuth";
import Button from "~/components/Button";
import { routes } from "~/utils/routes";
import pageStyles from "~/styles/pages/Login.css";
import { getParamsValue } from "~/utils";

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

const AuthScreen = ({ searchParams }: Props) => {
  const authVariant = getParamsValue(
    searchParams,
    "auth",
  ) as AuthVariant | null;
  const { heroContainer, heroWrapper } = pageStyles;

  return (
    <main className={heroContainer}>
      <div className={heroWrapper}>
        <Text variant="h2">Human stories & ideas</Text>
        <Text variant="h3">
          A place to read, write, and deepen your understanding
        </Text>
        <Button href={routes.signup} variant="secondary">
          Start Reading
        </Button>
      </div>
      {authVariant && <AuthScreenModal variant={authVariant} />}
    </main>
  );
};

const AuthScreenModal = ({ variant }: { variant: AuthVariant }) => {
  const authVariant = getAuthVariantCopy(variant);

  const { text, href, title } = authVariant;
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
