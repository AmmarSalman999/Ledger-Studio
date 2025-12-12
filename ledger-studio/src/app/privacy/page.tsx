import PageShell from "@/components/layout/PageShell";

export default function PrivacyPage() {
    return (
        <PageShell title="Privacy Policy" subtitle="Last updated: December 2025">
            <div className="max-w-3xl mx-auto bg-white p-12 rounded-2xl border border-slate-200 prose prose-slate">
                <h3>1. Information We Collect</h3>
                <p>We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, request customer support, or otherwise communicate with us.</p>

                <h3>2. How We Use Information</h3>
                <p>We use the information we collect to provide, maintain, and improve our services, such as to administer your account and to send you technical notices.</p>

                <h3>3. Data Security</h3>
                <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access.</p>
            </div>
        </PageShell>
    );
}
