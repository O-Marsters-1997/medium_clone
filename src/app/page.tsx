import Button from "~/components/Button";
import Text from "~/components/Text";
import AuthScreen from "~/screens/login/AuthScreen";
import pageStyles from "~/styles/pages/Home.css";
import { getParamsValue } from "~/utils";
import { routes } from "~/utils/routes";
import { AuthVariant } from "~/utils/navigation";
import ProviderAuth from "~/components/Auth/ProviderAuth";

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

const Home = ({ searchParams }: Props) => {
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

export default Home;
