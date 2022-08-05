import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../server/db/client";

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    session({ session, user, token }) {
      if (session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  // Configure one or more authentication providers
  // adapter: PrismaAdapter(prisma),
  providers: [
    // ...add more providers here
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email",
        },
      },
      async authorize(credentials, _req) {
        if (!credentials) {
          throw new Error("No credentials provided");
        }
        try {
          const user = await prisma.user.create({
            data: {
              name: credentials.email,
              email: credentials.email,
            },
          });

          if (!user) {
            throw new Error("User already exists");
          }

          return {
            id: user.id,
            name: user.name,
            email: user.email,
          };
        } catch (err) {
          console.error(err);
          throw new Error("Unable to create user");
        }
      },
    }),
  ],
};

export default NextAuth(authOptions);
