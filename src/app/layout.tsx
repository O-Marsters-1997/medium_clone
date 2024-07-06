import { Lato } from "next/font/google";
import { LocalizedStringProvider } from "react-aria-components/i18n";
import ThemeProvider from "~/context/ThemeContext";
import Header from "~/components/Header/Header";
import Footer from "~/components/Footer";
import { styles } from "~/styles/globals.css";
import { auth } from "~/auth";
import { ReactNode } from "react";
import AuthProvider from "~/context/AuthContext";

const lato = Lato({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
});

type LayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="en" className={lato.className}>
      <body>
        <LocalizedStringProvider locale="en" />
        <SessionFetcher>
          <ThemeProvider>
            <div id="app" className={styles.app}>
              <div className={styles.main}>
                <Header />
                {children}
                <Footer />
              </div>
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
