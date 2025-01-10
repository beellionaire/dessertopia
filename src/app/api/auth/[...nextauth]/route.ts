// import { login, loginWithGoogle } from "@/lib/firebase/services";
// import { compare } from "bcrypt";
// import { NextAuthOptions } from "next-auth";
// import NextAuth from "next-auth/next";

// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";

// const authOptions: NextAuthOptions = {
//   session: {
//     strategy: "jwt",
//   },
//   secret: process.env.NEXTAUTH_SECRET,
//   providers: [
//     CredentialsProvider({
//       type: "credentials",
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         const { email, password } = credentials as {
//           email: string;
//           password: string;
//         };
//         const user: any = await login({ email });
//         if (user) {
//           // compare => module dari bcrypt untuk membandingkan
//           const passwordConfirm = await compare(password, user.password);
//           if (passwordConfirm) {
//             return user;
//           }
//           return null;
//         } else {
//           return null;
//         }
//       },
//     }),
//     GoogleProvider({
//       clientId: process.env.AUTH_GOOGLE_ID || "",
//       clientSecret: process.env.AUTH_GOOGLE_SECRET || "",
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, account, profile, user }: any) {
//       if (account?.provider === "credentials") {
//         token.email = user.email;
//         token.fullname = user.fullname;
//         token.role = user.role;
//       }
//       if (account?.provider === "google") {
//         const data = {
//           fullname: user.name,
//           email: user.email,
//           type: "google",
//         };

//         await loginWithGoogle(
//           data,
//           (result: { status: boolean; data: any }) => {
//             if (result.status) {
//               token.email = result.data.email;
//               token.fullname = result.data.fullname;
//               token.role = result.data.role;
//             }
//           }
//         );
//       }
//       return token;
//     },
//     async session({ session, token }: any) {
//       if ("email" in token) {
//         session.user.email = token.email;
//       }
//       if ("fullname" in token) {
//         session.user.fullname = token.fullname;
//       }
//       if ("role" in token) {
//         session.user.role = token.role;
//       }
//       return session;
//     },
//   },
//   pages: {
//     signIn: "/login",
//   },
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };

import { handlers } from "@/auth"; // Referring to the auth.ts we just created
export const { GET, POST } = handlers;
