import PublicNavbar from "@/components/public/Navbar";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface PageShellProps {
    title: string;
    subtitle: string;
    children?: React.ReactNode;
}

export default function PageShell({ title, subtitle, children }: PageShellProps) {
    return (
        <div className="min-h-screen bg-white">
            <PublicNavbar />
            <div className="pt-32 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">{title}</h1>
                    <p className="text-xl text-slate-500 max-w-2xl">{subtitle}</p>
                </div>

                {children ? children : (
                    <div className="border border-dashed border-slate-300 rounded-2xl p-12 text-center bg-slate-50">
                        <div className="w-16 h-16 bg-blue-100 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
                            <div className="w-8 h-8 md:w-10 md:h-10 animate-pulse bg-current rounded-full opacity-20" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Content Coming Soon</h3>
                        <p className="text-slate-500 mb-8 max-w-md mx-auto">
                            We are currently crafting this section to provide you with the best insights and tools.
                        </p>
                        <Link href="/" className="inline-flex items-center gap-2 font-bold text-brand-blue hover:text-blue-700 transition-colors">
                            Return Home <ArrowRight size={18} />
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
