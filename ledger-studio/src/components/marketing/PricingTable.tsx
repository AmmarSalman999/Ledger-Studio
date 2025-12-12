"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import Link from "next/link";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

const pricingTiers = [
    {
        name: "Essential",
        desc: "Perfect for early-stage startups needing clean books and compliance.",
        monthlyPrice: 499,
        annualPrice: 399,
        features: [
            "Monthly Bookkeeping",
            "Xero / QuickBooks Setup",
            "Quarterly Financial Reports",
            "Sales Tax Filing (VAT/GST)",
            "Email Support"
        ],
        notIncluded: ["CFO Advisory", "Cash Flow Forecasting", "Custom Dashboards"]
    },
    {
        name: "Growth",
        desc: "For scaling companies that need financial visibility and strategic insight.",
        monthlyPrice: 999,
        annualPrice: 849,
        popular: true,
        features: [
            "Everything in Essential",
            "Monthly CFO Review Call",
            "Budget vs. Actuals Analysis",
            "Cash Flow Forecasting",
            "Payroll Management (up to 10)",
            "Slack Support Channel"
        ],
        notIncluded: ["Custom dashboards"]
    },
    {
        name: "Virtual CFO",
        desc: "A complete finance department for a fraction of the cost.",
        monthlyPrice: 2499,
        annualPrice: 1999,
        features: [
            "Everything in Growth",
            "Weekly Financial Strategy",
            "Board Meeting Deck Prep",
            "Custom KPI Dashboards",
            "Fundraising Support",
            "Scenario Modeling",
            "Priority Support (24/7)"
        ],
        notIncluded: []
    }
];

export default function PricingTable() {
    const [isAnnual, setIsAnnual] = useState(true);

    return (
        <div className="w-full max-w-7xl mx-auto">
            {/* Toggle Switch */}
            <div className="flex justify-center mb-16">
                <div className="bg-slate-100 p-1 rounded-full flex items-center relative cursor-pointer" onClick={() => setIsAnnual(!isAnnual)}>
                    <motion.div
                        className="absolute w-[50%] h-[calc(100%-8px)] top-1 bg-white rounded-full shadow-sm"
                        animate={{ x: isAnnual ? "100%" : "0%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                    <button
                        className={`relative z-10 px-6 py-2 rounded-full text-sm font-bold transition-colors ${!isAnnual ? 'text-slate-900' : 'text-slate-500'}`}
                        onClick={(e) => { e.stopPropagation(); setIsAnnual(false); }}
                    >
                        Monthly
                    </button>
                    <button
                        className={`relative z-10 px-6 py-2 rounded-full text-sm font-bold transition-colors ${isAnnual ? 'text-slate-900' : 'text-slate-500'}`}
                        onClick={(e) => { e.stopPropagation(); setIsAnnual(true); }}
                    >
                        Yearly <span className="text-brand-green text-[10px] ml-1 uppercase">Save 20%</span>
                    </button>
                </div>
            </div>

            {/* Pricing Cards */}
            <StaggerContainer className="grid md:grid-cols-3 gap-8">
                {pricingTiers.map((tier, i) => (
                    <StaggerItem
                        key={i}
                        className={`relative p-8 rounded-2xl border transition-all hover:shadow-xl hover:-translate-y-2 bg-white ${tier.popular ? 'border-brand-blue shadow-lg ring-1 ring-brand-blue/10 scale-105 z-10' : 'border-slate-200'}`}
                    >
                        {tier.popular && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                Most Popular
                            </div>
                        )}

                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                            <p className="text-slate-500 text-sm h-10">{tier.desc}</p>
                        </div>

                        <div className="mb-8 flex items-baseline gap-1">
                            <span className="text-4xl font-extrabold text-slate-900">
                                ${isAnnual ? tier.annualPrice : tier.monthlyPrice}
                            </span>
                            <span className="text-slate-500 text-sm font-medium">/mo</span>
                        </div>

                        <div className="space-y-4 mb-8">
                            {tier.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                                    <Check size={18} className="text-brand-green shrink-0 mt-0.5" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                            {tier.notIncluded.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-3 text-sm text-slate-400 opacity-60">
                                    <X size={18} className="shrink-0 mt-0.5" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/contact"
                            className={`block w-full text-center py-3 rounded-xl font-bold transition-all ${tier.popular
                                ? 'bg-brand-blue text-white hover:bg-blue-600 shadow-lg hover:shadow-xl'
                                : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                                }`}
                        >
                            {tier.name === "Virtual CFO" ? "Talk to Sales" : "Get Started"}
                        </Link>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </div>
    );
}
