import { ReactNode } from "react";
import Button from "~/components/Button";
import Test from "~/components/Test";

const Home = ({}: { children: ReactNode }) => {
  return (
    <main>
      <p>Hello world</p>
      <Button>
        <Test />
      </Button>
    </main>
  );
};

export default Home;
