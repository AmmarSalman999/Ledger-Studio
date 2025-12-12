import PublicNavbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";
import FadeIn from "@/components/animations/FadeIn";
import Link from "next/link"; // Assuming Link is from next/link
import { ArrowRight } from "lucide-react"; // Assuming ArrowRight is from lucide-react

interface PageShellProps {
    title: string;
    subtitle: string;
    children: React.ReactNode;
}

export default function PageShell({ title, subtitle, children }: PageShellProps) {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <PublicNavbar />

            {/* Header */}
            <div className="bg-slate-900 text-white pt-32 pb-20 px-6">
                <FadeIn className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{title}</h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
                </FadeIn>
                <Link href="/" className="inline-flex items-center gap-2 font-bold text-brand-blue hover:text-blue-700 transition-colors">
                    Return Home <ArrowRight size={18} />
                </Link>
            </div>
            {/* Main content area */}
            <main className="flex-grow max-w-7xl mx-auto px-6 py-12">
                {children}
            </main>

            <Footer />
        </div>
    );
}
