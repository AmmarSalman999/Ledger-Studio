import ClientSidebar from "@/components/layout/ClientSidebar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-slate-50">
            <ClientSidebar />
            <div className="pl-64">
                <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8">
                    <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                        Ledger StudioClient Access
                    </h2>
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center font-bold text-xs border border-blue-200">
                            JD
                        </div>
                        <span className="text-sm font-medium text-slate-700">John Doe (TechStart Inc.)</span>
                    </div>
                </header>
                <main className="p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
