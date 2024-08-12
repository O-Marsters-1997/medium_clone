import { routes } from "~/utils/routes";

export type AuthVariant = "signin" | "signup";

type ModalVariantCopy = {
  title: string;
  buttonText: string;
  text: {
    primary: string;
    secondary: string;
  };
  href: string;
};

export const getAuthVariantCopy = (variant: AuthVariant): ModalVariantCopy => {
  return variant.includes("signin")
    ? {
        title: "Welcome back.",
        buttonText: "Sign in with",
        text: {
          primary: "No account?",
          secondary: "create one",
        },
        href: routes.signup,
      }
    : {
        title: "Join Medium.",
        buttonText: "Sign up with",
        text: {
          primary: "Already have an accoount?",
          secondary: "Sign in",
        },
        href: routes.signin,
      };
};
