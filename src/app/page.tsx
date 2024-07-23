import { auth } from "~/auth";
import Button from "~/components/Button";
import Text from "~/components/Text";
import LoginModal from "~/screens/login/LoginModal";
import pageStyles from "~/styles/pages/Home.css";
import { getUser } from "~/utils";
import { routes } from "~/utils/routes";

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

const Home = ({ searchParams }: Props) => {
  const showModal = !!searchParams?.modal;
  const { heroContainer, heroWrapper } = pageStyles;

  return (
    <main className={heroContainer}>
      <div className={heroWrapper}>
        <Text variant="h2">Human stories & ideas</Text>
        <Text variant="h3">
          A place to read, write, and deepen your understanding
        </Text>
        <Button href={routes.login} variant="secondary">
          Start Reading
        </Button>
      </div>
      {showModal && <LoginModal />}
    </main>
  );
};

export default Home;
