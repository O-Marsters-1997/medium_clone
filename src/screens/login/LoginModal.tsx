import React from "react";
import Link from "~/components/Link";
import { routes } from "~/utils/routes";
import { styles } from "~/screens/login/LoginModal.css";
import { signIn, providerMap, Provider } from "~/auth";
import { AuthError } from "next-auth";
import Button from "~/components/Button";
import Modal from "~/components/Modal";
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

  return (
    <>
      <div className={styles.modalWrapper}>
        {Object.values(providerMap).map((provider) => (
          <form action={handleSignIn(provider.id)}>
            <Button variant="secondary">
              <span>Sign in with {provider.name}</span>
            </Button>
          </form>
        ))}
      </div>

      <Link href={routes.home}>
        <div className={styles.modal}></div>
      </Link>
    </>
  );
};

export default LoginModal;
