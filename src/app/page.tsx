import { style } from "@vanilla-extract/css";
import Button from "~/components/Button";
import db from "~/modules/db";
import pageStyles from "~/styles/pages/Home.css";

const Home = async () => {
  const { heroContainer, heroWrapper } = pageStyles;

  return (
    <main className={heroContainer}>
      <div>
        <h2>Human stories & ideals</h2>
        <h3>A place to read, write, and deepen your understanding</h3>
        <Button variant="primary">Start Reading</Button>
      </div>
    </main>
  );
};

export default Home;
