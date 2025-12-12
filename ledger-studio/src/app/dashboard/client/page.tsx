import { CheckCircle, Clock, FileText, TrendingUp } from "lucide-react";

export default function ClientDashboard() {
    return (
        <div>
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Welcome back, John</h1>
            <p className="text-slate-500 mb-8">Here is the status of your financial operations.</p>

            {/* Status Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start justify-between">
                    <div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Service</span>
                        <h3 className="text-xl font-bold text-slate-900 mt-1">Virtual CFO</h3>
                        <span className="inline-flex mt-2 items-center gap-1 text-xs font-bold text-green-600 bg-green-50 border border-green-100 px-2 py-1 rounded-full">
                            <CheckCircle size={12} /> Active
                        </span>
                    </div>
                    <div className="w-10 h-10 bg-blue-50 text-brand-blue rounded-lg flex items-center justify-center">
                        <TrendingUp size={20} />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start justify-between">
                    <div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Next Deliverable</span>
                        <h3 className="text-xl font-bold text-slate-900 mt-1">Q4 Forecast</h3>
                        <span className="inline-flex mt-2 items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 border border-amber-100 px-2 py-1 rounded-full">
                            <Clock size={12} /> Due: Dec 15
                        </span>
                    </div>
                    <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center">
                        <FileText size={20} />
                    </div>
                </div>
            </div>

            {/* Onboarding Progress */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm mb-8">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-lg text-slate-900">Onboarding Progress</h3>
                    <span className="text-sm font-bold text-brand-blue">80% Complete</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3 mb-6">
                    <div className="bg-brand-blue h-3 rounded-full" style={{ width: "80%" }} />
                </div>

                <div className="space-y-4">
                    <div className="flex items-center gap-3 text-slate-900">
                        <CheckCircle size={20} className="text-green-500" />
                        <span className="font-medium line-through text-slate-400">Sign Engagement Letter</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-900">
                        <CheckCircle size={20} className="text-green-500" />
                        <span className="font-medium line-through text-slate-400">Grant Xero/Quickbooks Access</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-900">
                        <div className="w-5 h-5 rounded-full border-2 border-brand-blue flex items-center justify-center">
                            <div className="w-2.5 h-2.5 bg-brand-blue rounded-full" />
                        </div>
                        <span className="font-medium">Upload Last Year's Tax Returns</span>
                        <button className="ml-auto text-xs font-bold bg-brand-blue text-white px-3 py-1.5 rounded-lg hover:bg-blue-600 transition-colors">
                            Upload Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
