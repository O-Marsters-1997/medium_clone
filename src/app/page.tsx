import Button from "~/components/Button";
import Test from "~/components/Test";
import db from "~/modules/db";

const Home = async () => {
  const posts = await db.post.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <main>
      <Button>Click me</Button>=
    </main>
  );
};

export default Home;
