import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { hash } from "bcryptjs"

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { email, password, plan } = body

        if (!email || !password) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 })
        }

        const hashedPassword = await hash(password, 12)

        // Generate mocked IPTV credentials
        const iptvUser = email.split('@')[0] + "_" + Math.floor(Math.random() * 1000)
        const iptvPass = Math.random().toString(36).slice(-8)

        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name: email.split('@')[0],
                subscription: {
                    create: {
                        plan: plan || 'monthly',
                        status: 'active',
                        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
                        iptvUser,
                        iptvPass
                    }
                }
            },
            include: { subscription: true }
        })

        return NextResponse.json({
            success: true,
            user: { id: user.id, email: user.email },
            subscription: user.subscription
        })

    } catch (error) {
        console.error(error)
        return NextResponse.json({ error: "Registration failed" }, { status: 500 })
    }
}
