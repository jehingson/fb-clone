
import NextAuth from "next-auth"
import FacebookProvider from 'next-auth/providers/facebook'
export default NextAuth({

    // Configure one or more authentication providers
    providers: [
        FacebookProvider({
            clientId: '443486127437718',
            clientSecret: '8ac10d91c557d1586cab043dda19bae4',
        }),
        // ...add more providers here
    ],
})