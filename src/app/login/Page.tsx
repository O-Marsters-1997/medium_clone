import React from "react";
import { getParamsValue } from "~/utils";
import pageStyles from "~/styles/pages/Login.css";
import Text from "~/components/Text";
import { AuthVariant } from "~/utils/navigation";
import { routes } from "~/utils/routes";
import Button from "~/components/Button";
import AuthScreen from "~/screens/login/AuthScreen";

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

const Page = ({ searchParams }: Props) => {
  const authModalVariant = getParamsValue(
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
      {authModalVariant && <AuthScreen variant={authModalVariant} />}
    </main>
  );
};

export default Page;
