import Dashboard from "~/screens/dashboard/Dashboard";
import AuthScreen from "~/screens/login/AuthScreen";
import pageStyles from "~/styles/pages/Login.css";
import { SearchParams } from "~/types";
import { getUser } from "~/utils";

type Props = {
  searchParams: SearchParams;
};

const Home = async ({ searchParams }: Props) => {
  const user = await getUser();

  return (
    <>
      {user === null ? (
        <AuthScreen searchParams={searchParams} />
      ) : (
        <Dashboard />
      )}
    </>
  );
};

export default Home;
