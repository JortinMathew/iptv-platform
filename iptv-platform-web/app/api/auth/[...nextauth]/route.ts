import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from "@/lib/prisma"
import { compare } from "bcryptjs"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null

                // Ensure email is a string
                const email = credentials.email as string

                const user = await prisma.user.findUnique({
                    where: { email }
                })

                if (!user || !user.password) return null

                const isValid = await compare(credentials.password as string, user.password)

                if (!isValid) return null

                return { id: user.id, email: user.email, name: user.name }
            }
        })
    ],
    session: { strategy: "jwt" },
    callbacks: {
        async session({ session, token }) {
            if (token && session.user) {
                // session.user.id = token.sub
            }
            return session
        }
    },
    pages: {
        signIn: '/login',
    }
})

export { handler as GET, handler as POST }
