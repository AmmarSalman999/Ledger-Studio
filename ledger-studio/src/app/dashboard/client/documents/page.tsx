import { Download, File, FileCheck } from "lucide-react";

const mockDocs = [
    { id: 1, name: "Engagement_Letter_v2.pdf", type: "Contract", date: "2024-12-01", status: "Signed" },
    { id: 2, name: "NDA_Signed.pdf", type: "Legal", date: "2024-12-01", status: "Signed" },
    { id: 3, name: "Q3_Financial_Review.pdf", type: "Report", date: "2024-11-15", status: "Available" },
];

export default function ClientDocuments() {
    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Documents</h1>
                    <p className="text-slate-500">Securely access your files and reports.</p>
                </div>
                <button className="bg-slate-900 text-white px-4 py-2 rounded-lg font-bold hover:bg-slate-800 transition-colors">
                    Upload File
                </button>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                            <th className="px-6 py-4 font-bold text-sm text-slate-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-4 font-bold text-sm text-slate-500 uppercase tracking-wider">Type</th>
                            <th className="px-6 py-4 font-bold text-sm text-slate-500 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-4 font-bold text-sm text-slate-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 text-right font-bold text-sm text-slate-500 uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {mockDocs.map(doc => (
                            <tr key={doc.id} className="hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-blue-50 text-brand-blue rounded-lg flex items-center justify-center">
                                            <File size={18} />
                                        </div>
                                        <span className="font-medium text-slate-900">{doc.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded">{doc.type}</span>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-500">{doc.date}</td>
                                <td className="px-6 py-4">
                                    {doc.status === "Signed" ? (
                                        <span className="flex items-center gap-1 text-xs font-bold text-green-600">
                                            <FileCheck size={14} /> Signed
                                        </span>
                                    ) : (
                                        <span className="text-xs font-bold text-slate-500">Ready</span>
                                    )}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-slate-400 hover:text-brand-blue transition-colors">
                                        <Download size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
