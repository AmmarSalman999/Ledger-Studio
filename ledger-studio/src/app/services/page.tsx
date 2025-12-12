import PageShell from "@/components/layout/PageShell";
import { Calculator, BarChart3, TrendingUp, Workflow, Settings } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

export default function ServicesPage() {
    const services = [
        {
            title: "Accounting & Bookkeeping",
            desc: "Your books — accurate, timely, and audit-ready. We manage everything: reconciliations, payroll, payables, receivables, financial closing, and reporting.",
            icon: Calculator
        },
        {
            title: "Advanced Excel & Dashboarding",
            desc: "From complex formulas to enterprise-grade dashboards — we build systems that transform raw data into actionable insights.",
            icon: BarChart3
        },
        {
            title: "Financial Modeling",
            desc: "Investor-ready models, forecasting simulations, valuation models, scenario planning & KPI frameworks.",
            icon: TrendingUp
        },
        {
            title: "Automation & Workflow Engineering",
            desc: "We design smart, scalable automations using Make.com, n8n, Zapier, Google Workspace, and custom logic flows.",
            icon: Workflow
        },
        {
            title: "Systems Setup & Integrations",
            desc: "QuickBooks, Xero, Zoho, Odoo, Netsuite, Sage — we set up, customize, and automate everything to sync your operations.",
            icon: Settings
        }
    ];

    return (
        <PageShell
            title="Powerful Services"
            subtitle="Engineered for Modern Companies."
        >
            <StaggerContainer className="grid md:grid-cols-2 gap-8">
                {services.map((s, i) => (
                    <StaggerItem key={i} className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all group">
                        <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <s.icon size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{s.desc}</p>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </PageShell>
    );
}
