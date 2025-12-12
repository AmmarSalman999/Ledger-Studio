import PageShell from "@/components/layout/PageShell";
import { Download, FileSpreadsheet, Lock } from "lucide-react";

export default function ResourcesPage() {
    return (
        <PageShell
            title="Resources & Downloads"
            subtitle="Professional templates and toolkits to jumpstart your financial efficienty."
        >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Free Resource */}
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
                    <div className="w-12 h-12 bg-green-50 text-brand-green rounded-xl flex items-center justify-center mb-6">
                        <FileSpreadsheet size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">SaaS Financial Model Template</h3>
                    <p className="text-slate-600 text-sm mb-6 flex-1">
                        A basic 3-statement model template for early-stage SaaS startups.
                    </p>
                    <button className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border-2 border-slate-900 text-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-all">
                        <Download size={18} /> Download
                    </button>
                </div>

                {/* Locked Resource */}
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 flex flex-col relative overflow-hidden">
                    <div className="absolute top-4 right-4 text-slate-300">
                        <Lock size={20} />
                    </div>
                    <div className="w-12 h-12 bg-slate-200 text-slate-400 rounded-xl flex items-center justify-center mb-6">
                        <FileSpreadsheet size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-500 mb-2">Advanced Cash Flow Forecaster</h3>
                    <p className="text-slate-400 text-sm mb-6 flex-1">
                        Weekly cash flow management tool with scenario planning.
                    </p>
                    <button className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-slate-200 text-slate-400 font-bold cursor-not-allowed">
                        Client Access Only
                    </button>
                </div>
            </div>
        </PageShell>
    );
}
