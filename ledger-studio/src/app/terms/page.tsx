import PageShell from "@/components/layout/PageShell";

export default function TermsPage() {
    return (
        <PageShell title="Terms & Conditions" subtitle="Last updated: December 2025">
            <div className="max-w-3xl mx-auto bg-white p-12 rounded-2xl border border-slate-200 prose prose-slate">
                <h3>1. Acceptance of Terms</h3>
                <p>By accessing or using our websites, mobile applications, or other products or services, you agree to be bound by these Terms.</p>

                <h3>2. Professional Advice Disclaimer</h3>
                <p>The content provided on Ledger Studio is for informational purposes only and does not constitute professional financial, accounting, or legal advice. Always consult with a qualified professional.</p>

                <h3>3. Limitation of Liability</h3>
                <p>In no event shall Ledger Studio be liable for any indirect, incidental, special, consequential or punitive damages.</p>
            </div>
        </PageShell>
    );
}
