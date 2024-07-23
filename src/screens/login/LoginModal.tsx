import React, { type MouseEvent } from "react";
import Link from "~/components/Link";
import { routes } from "~/utils/routes";
import { styles } from "~/screens/login/LoginModal.css";
import { styles as buttonStyles } from "~/components/styles/Button.css";
import { styles as fontStyles } from "~/styles/theme/typography.css";
import { signIn, providerMap } from "~/auth";
import { AuthError } from "next-auth";
import Button from "~/components/Button";
import Modal from "~/components/Modal";
import Text from "~/components/Text";
import { redirect } from "next/navigation";
import { logger } from "~/utils/logger";

const LoginModal = () => {
  const handleSignIn = (providerId: string) => async () => {
    "use server";
    try {
      await signIn(providerId, { redirectTo: routes.home });
    } catch (error) {
      if (error instanceof AuthError) {
        logger.error(error.message);

        return redirect(`${routes.home}`);
      }
      throw error;
    }
  };

  const { modalActions, modalActionForm } = styles;

  return (
    <Modal title="Welcome back.">
      <div className={modalActions}>
        {Object.values(providerMap).map((provider) => {
          return (
            <form
              action={handleSignIn(provider.id)}
              className={modalActionForm}
            >
              <Button
                variant="outlined"
                icon={provider.id}
                className={buttonStyles.login}
              >
                <span>Sign in with {provider.name}</span>
              </Button>
            </form>
          );
        })}
      </div>
    </Modal>
  );
};

export default LoginModal;
