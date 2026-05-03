import React, { useState } from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import {
    LayoutDashboard,
    Users,
    FileText,
    DollarSign,
    Menu,
    X,
    LogOut,
    User as UserIcon,
    Bell,
} from "lucide-react";

export default function DashboardLayout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { auth } = usePage().props;

    const navigation = [
        { name: "Dashboard", href: route("dashboard"), icon: LayoutDashboard },
        { name: "Data Warga", href: "#", icon: Users }, // Route placeholder
        { name: "Surat Pengantar", href: "#", icon: FileText },
        { name: "Keuangan", href: "#", icon: DollarSign },
    ];

    const handleLogout = () => {
        // Logic logout akan ditangani controller, ini hanya trigger POST
        if (confirm("Apakah Anda yakin ingin keluar?")) {
            // Nanti diganti dengan inertia.post(route('logout')) saat route siap
            console.log("Logout triggered");
        }
    };

    return (
        <>
            <Head title="Dashboard" />
            <div className="min-h-screen bg-gray-50 flex">
                {/* Mobile Sidebar Overlay */}
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 bg-gray-900/50 z-40 lg:hidden backdrop-blur-sm transition-opacity"
                        onClick={() => setSidebarOpen(false)}
                    />
                )}

                {/* Sidebar */}
                <aside
                    className={`
          fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
                >
                    <div className="h-full flex flex-col">
                        {/* Logo Area */}
                        <div className="h-16 flex items-center px-6 border-b border-gray-100">
                            <div className="flex items-center gap-2 font-bold text-xl text-blue-600 tracking-tight">
                                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                                    S
                                </div>
                                S.I.W.A.R.G.A
                            </div>
                            <button
                                onClick={() => setSidebarOpen(false)}
                                className="ml-auto lg:hidden text-gray-500 hover:text-gray-700"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Navigation */}
                        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`
                    group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors
                    ${
                        window.location.pathname === item.href
                            ? "bg-blue-50 text-blue-700"
                            : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    }
                  `}
                                >
                                    <item.icon
                                        className={`mr-3 h-5 w-5 shrink-0 ${
                                            window.location.pathname ===
                                            item.href
                                                ? "text-blue-600"
                                                : "text-gray-400 group-hover:text-gray-500"
                                        }`}
                                    />
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        {/* User Profile Snippet in Sidebar Bottom */}
                        <div className="p-4 border-t border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm">
                                    {auth.user.name.charAt(0).toUpperCase()}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate">
                                        {auth.user.name}
                                    </p>
                                    <p className="text-xs text-gray-500 truncate capitalize">
                                        {auth.user.role.replace("_", " ")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content Column */}
                <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                    {/* Top Header */}
                    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 lg:px-8">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="lg:hidden p-2 -ml-2 mr-2 text-gray-500 hover:text-gray-700"
                        >
                            <Menu size={20} />
                        </button>

                        <div className="flex-1 flex justify-end items-center gap-4">
                            <button className="p-2 text-gray-400 hover:text-gray-500 relative">
                                <Bell size={20} />
                                <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
                            </button>

                            <form
                                onSubmit={handleLogout}
                                className="hidden sm:block"
                            >
                                <button
                                    type="button"
                                    className="flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700"
                                >
                                    <LogOut size={18} />
                                    <span>Keluar</span>
                                </button>
                            </form>
                        </div>
                    </header>

                    {/* Page Content */}
                    <main className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-6 lg:p-8">
                        <div className="max-w-7xl mx-auto">{children}</div>
                    </main>
                </div>
            </div>
        </>
    );
}
