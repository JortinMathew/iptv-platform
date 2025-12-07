import { Button } from "@/components/ui/button"
import { Check, Tv, Zap, Shield, Smartphone, Globe } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-purple-500 selection:text-white">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            StreamX
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <Link href="#features" className="hover:text-white transition-colors">Features</Link>
            <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="#support" className="hover:text-white transition-colors">Support</Link>
          </div>
          <div className="flex gap-4">
            <Link href="/login">
              <button className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">Login</button>
            </Link>
            <Link href="#pricing">
              <button className="px-5 py-2 text-sm font-medium bg-white text-slate-950 rounded-full hover:bg-slate-200 transition-colors">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-slate-950 to-slate-950" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-purple-300 mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Live TV & On-Demand
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-br from-white via-white to-slate-400 bg-clip-text text-transparent">
            The Future of <br className="hidden md:block" /> TV is Here.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Experience 15,000+ channels, 4K streaming, and seamless playback on all your devices. No freezing, no buffering, just pure entertainment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="#pricing">
              <button className="h-12 px-8 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-all shadow-lg shadow-purple-500/25">
                Start Free Trial
              </button>
            </Link>
            <Link href="/channels">
              <button className="h-12 px-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium backdrop-blur-sm transition-all">
                View Channels
              </button>
            </Link>
          </div>

          <div className="mt-20 relative mx-auto max-w-5xl rounded-xl border border-white/10 bg-slate-900/50 shadow-2xl overflow-hidden aspect-video">
            <div className="absolute inset-0 flex items-center justify-center text-slate-500">
              <Tv className="w-16 h-16 opacity-20" />
              <span className="ml-4 text-lg font-medium opacity-40">Interactive Player Preview</span>
            </div>
            {/* Placeholder for a hero image or video */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Unmatched Performance</h2>
            <p className="text-slate-400">Built for speed, reliability, and quality.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="w-6 h-6 text-yellow-400" />}
              title="Instant Setup"
              description="Get your credentials instantly after payment. No waiting times."
            />
            <FeatureCard
              icon={<Globe className="w-6 h-6 text-blue-400" />}
              title="Global Content"
              description="Access channels from over 50 countries in their native language."
            />
            <FeatureCard
              icon={<Smartphone className="w-6 h-6 text-green-400" />}
              title="Multi-Device"
              description="Watch on your TV, Phone, Tablet, or Computer with one account."
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6 text-purple-400" />}
              title="Secure & Private"
              description="Your viewing habits are private. We don't log your activity."
            />
            <FeatureCard
              icon={<Tv className="w-6 h-6 text-red-400" />}
              title="4K UHD Quality"
              description="Crystal clear picture quality for supported channels and VOD."
            />
            <FeatureCard
              icon={<Check className="w-6 h-6 text-indigo-400" />}
              title="99.9% Uptime"
              description="Redundant servers ensure you never miss a moment of action."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-slate-400">Choose the plan that fits your viewing habits.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="Monthly"
              price="$12"
              features={["1 Connection", "Full Access", "HD/4K Quality", "No Contract"]}
            />
            <PricingCard
              title="Quarterly"
              price="$30"
              features={["2 Connections", "Full Access", "HD/4K Quality", "Priority Support"]}
              highlight
              subPrice="Save $6"
            />
            <PricingCard
              title="Yearly"
              price="$90"
              features={["4 Connections", "Full Access", "HD/4K Quality", "Dedicated Line"]}
              subPrice="Best Value"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-slate-950">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© 2024 StreamX. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">Terms</Link>
            <Link href="#" className="hover:text-white">Privacy</Link>
            <Link href="#" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
      <div className="mb-4 p-3 rounded-xl bg-slate-900 w-fit">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{description}</p>
    </div>
  )
}

function PricingCard({ title, price, features, highlight = false, subPrice }: { title: string, price: string, features: string[], highlight?: boolean, subPrice?: string }) {
  const planName = title.toLowerCase();
  return (
    <div className={`p-8 rounded-3xl border ${highlight ? 'bg-gradient-to-b from-purple-900/20 to-slate-900 border-purple-500/50 relative overflow-hidden' : 'bg-slate-900/50 border-white/10'}`}>
      {highlight && (
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      )}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-slate-400">{title}</h3>
        <div className="flex items-baseline gap-1 mt-2">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-slate-500">/period</span>
        </div>
        {subPrice && <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">{subPrice}</span>}
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feat, i) => (
          <li key={i} className="flex items-center gap-3 text-slate-300">
            <Check className="w-5 h-5 text-purple-500 shrink-0" />
            {feat}
          </li>
        ))}
      </ul>
      <Link href={`/register?plan=${planName}`}>
        <button className={`w-full py-3 rounded-xl font-semibold transition-all ${highlight ? 'bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-500/25' : 'bg-white text-slate-900 hover:bg-slate-100'}`}>
          Choose Plan
        </button>
      </Link>
    </div>
  )
}
