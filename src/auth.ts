import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import client from "./lib/db";

const adminEmails = ["nabeelsaby@gmail.com"];

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  adapter: MongoDBAdapter(client),
  callbacks: {
    session: async ({ session }) => {
      if (adminEmails.includes(session.user.email)) {
        session.user.isAdmin = true; // Tambahkan properti isAdmin
      } else {
        session.user.isAdmin = false;
      }
      return session;
    },
  },
  // pages: {
  //   signIn: "/login",
  // },
});
