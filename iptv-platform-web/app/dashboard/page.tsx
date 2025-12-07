import { Button } from "@/components/ui/button"
import { LogOut, Monitor, Settings, CreditCard, User } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 text-white fixed h-full hidden md:flex flex-col">
                <div className="p-6">
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">StreamX</h1>
                </div>
                <nav className="flex-1 px-4 space-y-2">
                    <NavItem icon={<Monitor />} label="Overview" active />
                    <NavItem icon={<CreditCard />} label="Subscription" />
                    <NavItem icon={<User />} label="Profile" />
                    <NavItem icon={<Settings />} label="Settings" />
                </nav>
                <div className="p-4 border-t border-white/10">
                    <button className="flex items-center gap-3 px-4 py-2 text-slate-400 hover:text-white transition-colors w-full">
                        <LogOut className="w-5 h-5" />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 md:ml-64 p-8">
                <header className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold text-slate-800">My Subscription</h2>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold border border-purple-200">
                            JD
                        </div>
                    </div>
                </header>

                <div className="grid lg:grid-cols-3 gap-6 mb-8">
                    {/* Plan Status */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <h3 className="text-sm font-medium text-slate-500 mb-1">Current Plan</h3>
                        <div className="flex items-end justify-between">
                            <span className="text-2xl font-bold text-slate-900">Premium Yearly</span>
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Active</span>
                        </div>
                        <p className="text-sm text-slate-400 mt-2">Expires Dec 2025</p>
                    </div>

                    {/* Connetions */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <h3 className="text-sm font-medium text-slate-500 mb-1">Active Connections</h3>
                        <div className="text-2xl font-bold text-slate-900">1 / 4</div>
                        <div className="w-full h-1.5 bg-slate-100 rounded-full mt-3 overflow-hidden">
                            <div className="h-full bg-purple-500 w-1/4 rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Credentials Box */}
                <section className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                        <h3 className="font-semibold text-lg text-slate-800">IPTV Credentials</h3>
                        <Button variant="outline" size="sm">Reset Password</Button>
                    </div>
                    <div className="p-6 space-y-6">
                        <CredentialRow label="M3U Playlist URL" value="http://line.streamx.tv/get.php?username=jdoe&password=xyz" copyable />
                        <div className="grid md:grid-cols-2 gap-6">
                            <CredentialRow label="Username" value="jdoe_8829" copyable />
                            <CredentialRow label="Password" value="••••••••" hiddenValue="x7K9m2Pq" copyable />
                        </div>
                    </div>
                </section>

            </main>
        </div>
    )
}

function NavItem({ icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
    return (
        <button className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${active ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
            {icon}
            {label}
        </button>
    )
}

function CredentialRow({ label, value, hiddenValue, copyable }: { label: string, value: string, hiddenValue?: string, copyable?: boolean }) {
    return (
        <div>
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5 block">{label}</label>
            <div className="flex gap-2">
                <div className="flex-1 bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-lg text-slate-700 font-mono text-sm break-all">
                    {value}
                </div>
                {copyable && (
                    <Button variant="outline" className="shrink-0 border-slate-200 text-slate-600 hover:text-purple-600">Copy</Button>
                )}
            </div>
        </div>
    )
}
