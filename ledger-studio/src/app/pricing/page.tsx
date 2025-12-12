import PageShell from "@/components/layout/PageShell";
import PricingTable from "@/components/marketing/PricingTable";
import { CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

export default function PricingPage() {
    return (
        <PageShell
            title="Simple, Transparent Pricing"
            subtitle="Choose the partnership model that fits your growth stage. No hidden fees."
        >
            <div className="mb-20">
                <PricingTable />
            </div>

            {/* FAQ / Trust Section */}
            <div className="max-w-4xl mx-auto border-t border-slate-200 pt-16">
                <FadeIn>
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Why leading founders trust us</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex gap-4">
                            <CheckCircle2 className="text-brand-blue shrink-0" size={24} />
                            <div>
                                <h3 className="font-bold text-slate-900 mb-2">No Hourly Billing Surprise</h3>
                                <p className="text-slate-600">We operate on a fixed monthly retainer. You'll always know exactly what you're paying.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <CheckCircle2 className="text-brand-blue shrink-0" size={24} />
                            <div>
                                <h3 className="font-bold text-slate-900 mb-2">Month-to-Month Contracts</h3>
                                <p className="text-slate-600">We earn your business every month. No locking you into long-term paperwork unless you want the discount.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <CheckCircle2 className="text-brand-blue shrink-0" size={24} />
                            <div>
                                <h3 className="font-bold text-slate-900 mb-2">Dedicated Finance Team</h3>
                                <p className="text-slate-600">You don't just get software; you get a dedicated accountant and financial manager.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <CheckCircle2 className="text-brand-blue shrink-0" size={24} />
                            <div>
                                <h3 className="font-bold text-slate-900 mb-2">Tech-First Approach</h3>
                                <p className="text-slate-600">We use the latest best-in-class tools (Xero, Fathom, Ramp, n8n) to automate the boring stuff.</p>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </PageShell>
    );
}
