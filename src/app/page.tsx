import Button from "~/components/Button";
import Text from "~/components/Text";
import LoginModal from "~/screens/login/LoginModal";
import pageStyles from "~/styles/pages/Home.css";

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

const Home = async ({ searchParams }: Props) => {
  // This is a test comment
  const showModal = !!searchParams?.modal;
  const { heroContainer, heroWrapper } = pageStyles;

  return (
    <main className={heroContainer}>
      <div className={heroWrapper}>
        <Text variant="h2">Human stories & ideas</Text>
        <Text variant="h3">
          A place to read, write, and deepen your understanding
        </Text>
        <Button href="/?modal=true" variant="secondary">
          Start Reading
        </Button>
        {showModal && <LoginModal />}
      </div>
    </main>
  );
};

export default Home;
