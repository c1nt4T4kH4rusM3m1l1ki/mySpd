import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials"; 

const authOptions = {
  session: {
    jwt:true,
    strategy: "jwt",
  },
  secret: "indonesia1234",
  providers: [
    CredentialProvider({
      type: "credentials",
      name: "credentials",
      credentials: {
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        const { password } = credentials;
        if (password === "spenuh2024") {
          return {
            id: "userOne",
            name: "user",
            role: "user",
          };
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile, user }) {
      if (account?.provider === "credentials") {
        let newToken = { ...token };
        newToken.name = user.name;
        newToken.role = user.role;
        return newToken;
      }
      return token;
    },

    async session({ session, token }) {
        if('name' in token){
            let newSession = {...session};
            newSession.user.name = token.name;
            newSession.user.role = token.role;
            return newSession;
        }

        return session;
    },
  },
  page:{
    signIn:'/login'
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
