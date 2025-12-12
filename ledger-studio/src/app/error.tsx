"use client";

import { useEffect } from "react";
import { AlertCircle, RefreshCcw } from "lucide-react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl max-w-md w-full text-center">
                <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <AlertCircle size={32} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Something went wrong!</h2>
                <p className="text-slate-500 mb-8">
                    Don't worry, even the best systems hit a snag. We've notified our team.
                </p>
                <button
                    onClick={reset}
                    className="w-full bg-slate-900 text-white font-bold py-3 rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                >
                    <RefreshCcw size={18} /> Try Again
                </button>
            </div>
        </div>
    );
}
