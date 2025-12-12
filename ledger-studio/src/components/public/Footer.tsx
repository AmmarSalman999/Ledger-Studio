import Link from "next/link";
import { Twitter, Linkedin, Youtube, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-16 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div>
                    <div className="w-10 h-10 bg-brand-green rounded-lg flex items-center justify-center font-bold text-slate-900 mb-6">
                        LS
                    </div>
                    <p className="text-sm leading-relaxed text-slate-400">
                        Ledger Studio is your modern financial operations partner. We blend accounting precision with automation engineering.
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6">Quick Links</h4>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                        <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                        <li><Link href="/case-studies" className="hover:text-white transition-colors">Success Stories</Link></li>
                        <li><Link href="/resources" className="hover:text-white transition-colors">Resources</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6">Services</h4>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="/services/accounting-bookkeeping" className="hover:text-white transition-colors">Bookkeeping</Link></li>
                        <li><Link href="/services/financial-modeling" className="hover:text-white transition-colors">Financial Modeling</Link></li>
                        <li><Link href="/services/automation-engineering" className="hover:text-white transition-colors">Automation</Link></li>
                        <li><Link href="/services/advanced-excel-dashboarding" className="hover:text-white transition-colors">Excel Dashboards</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6">Connect</h4>
                    <div className="flex gap-4 mb-6">
                        <a href="https://linkedin.com/company/ledgerstudio" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all"><Linkedin size={18} /></a>
                        <a href="https://youtube.com/@ledgerstudio" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all"><Youtube size={18} /></a>
                        <a href="https://instagram.com/ledgerstudio" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all"><Instagram size={18} /></a>
                        <a href="https://twitter.com/ledgerstudio" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all"><Twitter size={18} /></a>
                    </div>
                    <Link href="/contact" className="block text-center bg-white text-slate-900 font-bold py-3 rounded-lg hover:bg-slate-100 transition-colors">
                        Book Strategy Call
                    </Link>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500">
                <p>&copy; 2025 Ledger Studio. All rights reserved.</p>
                <div className="flex gap-6">
                    <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
                    <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
                </div>
            </div>
        </footer>
    );
}
