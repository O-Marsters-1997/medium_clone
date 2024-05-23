import * as stylex from "@stylexjs/stylex";

const Home = () => {
  return (
    <main {...stylex.props(s.main)}>
      <p>Hello world</p>
    </main>
  );
};

const s = stylex.create({
  main: {
    background: "#333",
    color: "white",
  },
});

export default Home;
