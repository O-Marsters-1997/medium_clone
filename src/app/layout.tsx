import { Lato } from "next/font/google";
import { redirect } from "next/navigation";
import { LocalizedStringProvider } from "react-aria-components/i18n";
import ThemeProvider from "~/context/ThemeContext";
import Header from "~/components/Header/Header";
import Footer from "~/components/Footer";
import { styles } from "~/styles/globals.css";
import { auth } from "~/auth";
import { ReactNode } from "react";
import AuthProvider from "~/context/AuthContext";
import UserSettingsMenu from "~/screens/UserSettingsMenu";
import { getUser } from "~/utils";
import { routes } from "~/utils/routes";
import Link from "next/link";
import AppWrapper from "~/components/AppWrapper";

const lato = Lato({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
});

type LayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const RootLayout = async ({ children }: LayoutProps) => {
  const user = await getUser();

  return (
    <html lang="en" className={lato.className}>
      <body>
        <LocalizedStringProvider locale="en" />
        <SessionFetcher>
          <ThemeProvider>
            <div id="app" className={styles.app}>
              <AppWrapper>
                {user && <UserSettingsMenu user={user} />}
                <Header />
                {children}
                <Footer />
              </AppWrapper>
            </div>
          </ThemeProvider>
        </SessionFetcher>
      </body>
    </html>
  );
};

export const SessionFetcher = async ({ children }: { children: ReactNode }) => {
  const session = await auth();
  return <AuthProvider session={session}>{children}</AuthProvider>;
};

export default RootLayout;
