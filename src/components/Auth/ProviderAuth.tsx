"use server";

import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { providerMap, signIn } from "~/lib/auth";
import Button from "~/components/Button";
import { styles as buttonStyles } from "~/components/styles/Button.css";
import { logger } from "~/utils/logger";
import { routes } from "~/utils/routes";
import { sprinkles } from "~/styles/sprinkles.css";
import { AuthVariant, getAuthVariantCopy } from "~/utils/navigation";

type Props = {
  variant: AuthVariant;
};

const ProviderAuth = ({ variant }: Props) => {
  const { buttonText } = getAuthVariantCopy(variant);

  return (
    <>
      {Object.values(providerMap).map((provider) => (
        <form
          action={async () => {
            "use server";
            try {
              await signIn(provider.id, { redirectTo: routes.home });
            } catch (error) {
              if (error instanceof AuthError) {
                logger.error(error.message);

                return redirect(`${routes.home}`);
              }
              throw error;
            }
          }}
          className={sprinkles({
            w: "full",
            pos: "relative",
          })}
        >
          <Button
            variant="outlined"
            icon={provider.id}
            className={buttonStyles.login}
          >
            <span>
              {buttonText} {provider.name}
            </span>
          </Button>
        </form>
      ))}
    </>
  );
};

export default ProviderAuth;
