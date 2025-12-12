import PageShell from "@/components/layout/PageShell";
import FadeIn from "@/components/animations/FadeIn";

export default function AboutPage() {
    return (
        <PageShell
            title="Crafted Excellence in Accounting & Digital Finance"
            subtitle="Ledger Studio is not just another accounting service. It is a modern financial operations partner."
        >
            <div className="prose prose-lg prose-slate max-w-none">
                <FadeIn>
                    <p className="text-xl leading-relaxed text-slate-600 mb-8">
                        Built for founders, CFOs, entrepreneurs, and growing companies who want clarity, control, and automation in their financial world.
                    </p>
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-12 items-center my-12">
                    <FadeIn direction="right">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Founded by a Qualified Chartered Accountant</h3>
                        <p className="text-slate-600 mb-6">Ledger Studio blends:</p>
                        <ul className="space-y-3">
                            {["High-precision bookkeeping", "Advanced financial modeling", "Automated workflows", "Dashboard reporting", "System design thinking"].map(item => (
                                <li key={item} className="flex items-center gap-3 font-medium text-slate-700">
                                    <div className="w-2 h-2 rounded-full bg-brand-blue" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </FadeIn>
                    <FadeIn direction="left" delay={0.2} className="bg-slate-100 rounded-2xl p-8 border border-slate-200">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">The Result</h3>
                        <p className="text-slate-600">
                            A seamless financial ecosystem that saves time, reduces errors, and empowers better decisions.
                        </p>
                    </FadeIn>
                </div>
            </div>
        </PageShell>
    );
}
