import NextAuth, { type DefaultSession } from "next-auth";

type Role = "user" | "member";

declare module "next-auth" {
  type User = {
    role: Role;
  } & DefaultSession["user"];

  interface AdapterUser {
    role: Role;
  }

  interface Session {
    user: User;
  }
}
