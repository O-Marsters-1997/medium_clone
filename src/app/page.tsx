import { style } from "@vanilla-extract/css";
import Button from "~/components/Button";
import db from "~/modules/db";

const Home = async () => {
  return (
    <main>
      <h2>Human stories & ideals</h2>
      <h3>A place to read, write, and deepen your understanding</h3>
      <Button variant="primary">Start Reading</Button>
    </main>
  );
};

export default Home;
