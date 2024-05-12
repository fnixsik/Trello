import GitHubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/mongoClient";
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
    providers:[
      GitHubProvider({
        clientId: process.env.GITHUB_CLIENT_ID as string,
        clientSecret: process.env.GITHUB_CLIENT_SECRET as string
      })
    ],
    //@ts-ignore
    adapter: MongoDBAdapter(clientPromise)
  }