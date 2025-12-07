<div className="min-h-screen bg-slate-50 p-8 font-sans">
    <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-10">
            <div>
                <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
                <p className="text-slate-500">Manage users and subscriptions</p>
            </div>
            <Button>Add Manual User</Button>
        </header>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">
            <StatCard label="Total Users" value={users.length.toString()} color="bg-blue-500" />
            <StatCard label="Active Subscriptions" value={users.filter(u => u.subscription?.status === 'active').length.toString()} color="bg-green-500" />
            <StatCard label="Revenue (Est)" value={"$" + (users.length * 90).toLocaleString()} color="bg-purple-500" />
            <StatCard label="Pending" value="0" color="bg-orange-500" />
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-200 flex justify-between items-center">
                <h2 className="font-semibold text-lg">Recent Users</h2>
                <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input type="text" placeholder="Search users..." className="pl-9 pr-4 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-200" />
                </div>
            </div>
            <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-500 font-medium">
                    <tr>
                        <th className="px-6 py-4">User</th>
                        <th className="px-6 py-4">Plan</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Joined</th>
                        <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {users.map((user) => (
                        <tr key={user.id} className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-6 py-4">
                                <div className="font-medium text-slate-900">{user.name || 'Anonymous'}</div>
                                <div className="text-slate-400 text-xs">{user.email}</div>
                            </td>
                            <td className="px-6 py-4">
                                <span className="capitalize px-2 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">
                                    {user.subscription?.plan || 'None'}
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                {user.subscription?.status === 'active' ? (
                                    <span className="inline-flex items-center gap-1 text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full text-xs">
                                        <Check className="w-3 h-3" /> Active
                                    </span>
                                ) : (
                                    <span className="inline-flex items-center gap-1 text-slate-400 font-medium bg-slate-100 px-2 py-1 rounded-full text-xs">
                                        <X className="w-3 h-3" /> Inactive
                                    </span>
                                )}
                            </td>
                            <td className="px-6 py-4 text-slate-500">{new Date(user.createdAt).toLocaleDateString()}</td>
                            <td className="px-6 py-4 text-right">
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">...</Button>
                            </td>
                        </tr>
                    ))}
                    {users.length === 0 && (
                        <tr>
                            <td colSpan={5} className="px-6 py-12 text-center text-slate-400">
                                No users found. Start selling!
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>
</div>
    )
}

function StatCard({ label, value, color }: { label: string, value: string, color: string }) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden">
            <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-white/0 opacity-50 rotate-45 transform translate-x-10 -translate-y-10 ${color}`}></div>
            <p className="text-slate-500 text-sm font-medium mb-1">{label}</p>
            <h3 className="text-3xl font-bold text-slate-900">{value}</h3>
        </div>
    )
}
