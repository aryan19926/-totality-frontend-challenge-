import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
 
  providers: [
    GithubProvider({
      clientId:'Ov23liRDXwpSLlXvwtLq',
      clientSecret:'fa1b1b7c33883b6fb53c32531e9b652641fc46ad',
    }),
  ],
}

export default NextAuth(authOptions)