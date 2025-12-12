import PublicNavbar from "@/components/public/Navbar";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-white">
            <PublicNavbar />
            <div className="h-[calc(100vh-80px)] flex flex-col items-center justify-center text-center px-6">
                <h1 className="text-9xl font-bold text-slate-100 mb-4">404</h1>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Page Not Found</h2>
                <p className="text-slate-500 max-w-md mb-8">
                    The financial record you are looking for seems to be missing from our ledgers.
                </p>
                <Link
                    href="/"
                    className="flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-full font-bold hover:bg-blue-600 transition-all"
                >
                    <ArrowLeft size={18} />
                    Return to Dashboard
                </Link>
            </div>
        </div>
    );
}
