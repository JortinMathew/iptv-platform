"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export default function RegisterPage() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const plan = searchParams.get('plan') || "monthly"
    const price = plan === "quarterly" ? "$30" : plan === "yearly" ? "$90" : "$12"

    const [loading, setLoading] = useState(false)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setLoading(true)

        const formData = new FormData(e.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')

        try {
            const res = await fetch('/api/register', {
                method: 'POST',
                body: JSON.stringify({ email, password, plan }),
                headers: { 'Content-Type': 'application/json' }
            })

            if (res.ok) {
                router.push('/dashboard')
            } else {
                alert("Registration failed")
            }
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 text-slate-50 font-sans">
            <div className="w-full max-w-5xl grid md:grid-cols-2 gap-12 items-center">

                {/* Left Side: Summary */}
                <div className="hidden md:block">
                    <Link href="/" className="inline-flex items-center text-sm text-slate-400 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                    </Link>
                    <div className="bg-slate-900/50 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                        <h2 className="text-2xl font-bold mb-2">Order Summary</h2>
                        <p className="text-slate-400 mb-6">You're one step away from premium entertainment.</p>

                        <div className="flex justify-between items-center py-4 border-b border-white/5">
                            <span className="capitalize font-medium text-lg">{plan} Plan</span>
                            <span className="font-bold text-xl">{price}</span>
                        </div>

                        <ul className="mt-6 space-y-4">
                            <li className="flex items-center gap-3 text-slate-300">
                                <div className="p-1 rounded-full bg-green-500/20"><CheckCircle className="w-4 h-4 text-green-500" /></div>
                                Instant credential delivery
                            </li>
                            <li className="flex items-center gap-3 text-slate-300">
                                <div className="p-1 rounded-full bg-green-500/20"><CheckCircle className="w-4 h-4 text-green-500" /></div>
                                4K/UHD Streaming supported
                            </li>
                            <li className="flex items-center gap-3 text-slate-300">
                                <div className="p-1 rounded-full bg-green-500/20"><CheckCircle className="w-4 h-4 text-green-500" /></div>
                                24/7 Premium Support
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="bg-white text-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-32 bg-purple-500/10 blur-3xl rounded-full pointer-events-none -mr-16 -mt-16"></div>

                    <h1 className="text-3xl font-bold mb-2 relative z-10">Create Account</h1>
                    <p className="text-slate-500 mb-8 relative z-10">Enter your details to generate your subscription credentials.</p>

                    <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Email Address</label>
                            <input name="email" type="email" required placeholder="you@example.com" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Password</label>
                            <input name="password" type="password" required placeholder="••••••••" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" />
                        </div>

                        <div className="pt-4">
                            <Button disabled={loading} className="w-full h-12 text-lg bg-purple-600 hover:bg-purple-700 text-white shadow-xl shadow-purple-500/20 rounded-xl transition-all">
                                {loading ? 'Processing...' : `Pay ${price} & Subscribe`}
                            </Button>
                        </div>

                        <p className="text-xs text-center text-slate-400 mt-4">
                            By subscribing, you agree to our Terms of Service. <br />
                            Payments are secure and encrypted.
                        </p>
                    </form>
                </div>

            </div>
        </div>
    )
}
