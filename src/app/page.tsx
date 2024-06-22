import { style } from "@vanilla-extract/css";
import Button from "~/components/Button";
import Text from "~/components/Text";
import db from "~/modules/db";
import pageStyles from "~/styles/pages/Home.css";

const Home = async () => {
  const { heroContainer, heroWrapper } = pageStyles;

  return (
    <main className={heroContainer}>
      <div className={heroWrapper}>
        <Text variant="h2">Human stories & ideas</Text>
        <Text variant="h3">
          A place to read, write, and deepen your understanding
        </Text>
        <Button variant="secondary">Start Reading</Button>
      </div>
    </main>
  );
};

export default Home;
