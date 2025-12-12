"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("ledger_cookie_consent");
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const accept = () => {
        localStorage.setItem("ledger_cookie_consent", "accepted");
        setIsVisible(false);
    };

    const decline = () => {
        localStorage.setItem("ledger_cookie_consent", "declined");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:w-96 z-50">
            <FadeIn>
                <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-2xl border border-slate-700 relative">
                    <button
                        onClick={decline}
                        className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
                    >
                        <X size={16} />
                    </button>
                    <h3 className="font-bold text-lg mb-2">We value your privacy</h3>
                    <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                        We use cookies to enhance your experience and analyze traffic.
                        By clicking "Accept", you agree to our use of cookies.
                    </p>
                    <div className="flex gap-3">
                        <button
                            onClick={accept}
                            className="flex-1 bg-brand-blue hover:bg-blue-600 text-white font-bold py-2.5 rounded-xl transition-all"
                        >
                            Accept
                        </button>
                        <button
                            onClick={decline}
                            className="flex-1 bg-transparent border border-slate-600 hover:bg-slate-800 text-slate-300 font-bold py-2.5 rounded-xl transition-all"
                        >
                            Decline
                        </button>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}
