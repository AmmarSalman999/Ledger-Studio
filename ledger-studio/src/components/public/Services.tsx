"use client";

import { Check } from "lucide-react";

const plans = [
    {
        name: "Financial Audit",
        price: "$2,500",
        description: "One-time deep dive into your books and tax setup.",
        features: [
            "Historical Clean-up Review",
            "Tax Leakage Analysis",
            "Software Stack Audit",
            "Roadmap Presentation"
        ],
        buttonText: "Book Audit",
        popular: false
    },
    {
        name: "Growth Retainer",
        price: "$1,200",
        period: "/mo",
        description: "Full-service accounting and monthly insights.",
        features: [
            "Monthly Bookkeeping",
            "Sales Tax Filing",
            "KPI Dashboard",
            "Quarterly Strategy Call"
        ],
        buttonText: "Start Growth",
        popular: true
    },
    {
        name: "Virtual CFO",
        price: "$3,500",
        period: "/mo",
        description: "Strategic partnership for scaling teams.",
        features: [
            "Everything in Growth",
            "3-Way Cash Flow Models",
            "Budgets vs Actuals",
            "Weekly Leadership Calls"
        ],
        buttonText: "Partner Up",
        popular: false
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Productized Financial Clarity</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        Transparent pricing. No hourly billing surprises. Choose the level of insight you need.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            className={`relative bg-white p-8 rounded-2xl border ${plan.popular ? 'border-brand-blue shadow-xl scale-105 z-10' : 'border-slate-200 shadow-sm'} transition-all hover:shadow-lg`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-lg font-bold text-slate-900 mb-2">{plan.name}</h3>
                            <div className="flex items-baseline gap-1 mb-4">
                                <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                                <span className="text-slate-500 font-medium">{plan.period}</span>
                            </div>
                            <p className="text-slate-500 text-sm mb-6 pb-6 border-b border-slate-100 min-h-[80px]">
                                {plan.description}
                            </p>
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feat, j) => (
                                    <li key={j} className="flex items-start gap-3 text-sm text-slate-700">
                                        <Check className="text-brand-green shrink-0" size={18} />
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                            <button className={`w-full py-3 rounded-lg font-bold transition-colors ${plan.popular
                                    ? 'bg-brand-blue text-white hover:bg-blue-600'
                                    : 'bg-slate-50 text-slate-900 hover:bg-slate-100'
                                }`}>
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
