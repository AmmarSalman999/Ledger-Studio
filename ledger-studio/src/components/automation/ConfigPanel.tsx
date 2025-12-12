"use client";

import { X, Save, AlertCircle } from "lucide-react";
import { Node } from "reactflow";
import { useEffect, useState } from "react";

interface ConfigPanelProps {
    selectedNode: Node | null;
    setNodes: (updater: (nodes: Node[]) => Node[]) => void;
    onClose: () => void;
}

export default function ConfigPanel({ selectedNode, setNodes, onClose }: ConfigPanelProps) {
    const [label, setLabel] = useState("");
    const [description, setDescription] = useState("");

    // Node-specific fields
    const [config, setConfig] = useState<Record<string, string>>({});

    // Sync local state when selectedNode changes
    useEffect(() => {
        if (selectedNode) {
            setLabel(selectedNode.data.label || "");
            setDescription(selectedNode.data.description || "");
            setConfig(selectedNode.data.config || {});
        }
    }, [selectedNode]);

    // Update node data when fields change
    const updateNode = (key: string, value: any) => {
        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === selectedNode?.id) {
                    return {
                        ...node,
                        data: {
                            ...node.data,
                            [key]: value,
                        },
                    };
                }
                return node;
            })
        );
    };

    const handleConfigChange = (key: string, value: string) => {
        const newConfig = { ...config, [key]: value };
        setConfig(newConfig);
        updateNode('config', newConfig);
    };

    if (!selectedNode) {
        return (
            <div className="w-80 bg-white border-l border-slate-200 h-full flex items-center justify-center text-slate-400 text-sm italic p-8 text-center bg-slate-50/50">
                Select a node to configure
            </div>
        );
    }

    return (
        <div className="w-80 bg-white border-l border-slate-200 h-full flex flex-col shadow-xl z-30">
            {/* Header */}
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Configuration
                </span>
                <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
                    <X size={16} />
                </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">

                {/* Basic Info */}
                <div className="space-y-4">
                    <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">Node Name</label>
                        <input
                            type="text"
                            value={label}
                            onChange={(e) => { setLabel(e.target.value); updateNode('label', e.target.value); }}
                            className="w-full text-sm px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => { setDescription(e.target.value); updateNode('description', e.target.value); }}
                            className="w-full text-sm px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition-all h-20 resize-none"
                        />
                    </div>
                </div>

                <div className="h-px bg-slate-100" />

                {/* Dynamic Fields based on Type */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-brand-blue font-bold text-sm">
                        <AlertCircle size={16} />
                        <span>Parameters</span>
                    </div>

                    {selectedNode.data.icon === 'email' && (
                        <>
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1.5">To Email</label>
                                <input
                                    type="email"
                                    placeholder="client@example.com"
                                    value={config.to || ''}
                                    onChange={(e) => handleConfigChange('to', e.target.value)}
                                    className="w-full text-sm px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1.5">Subject</label>
                                <input
                                    type="text"
                                    placeholder="Invoice #1234"
                                    value={config.subject || ''}
                                    onChange={(e) => handleConfigChange('subject', e.target.value)}
                                    className="w-full text-sm px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none"
                                />
                            </div>
                        </>
                    )}

                    {selectedNode.data.icon === 'webhook' && (
                        <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5">Webhook URL</label>
                            <input
                                type="text"
                                placeholder="https://api.example.com/hook"
                                value={config.url || ''}
                                onChange={(e) => handleConfigChange('url', e.target.value)}
                                className="w-full text-sm px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none"
                            />
                        </div>
                    )}

                    {selectedNode.data.icon === 'trigger' && (
                        <div className="p-3 bg-blue-50 text-blue-800 text-xs rounded-lg border border-blue-100">
                            This trigger listens for new lead events in Supabase.
                        </div>
                    )}

                    {/* Fallback for generic nodes */}
                    {!['email', 'webhook', 'trigger'].includes(selectedNode.data.icon) && (
                        <div className="p-3 bg-slate-50 text-slate-500 text-xs rounded-lg border border-slate-200 italic">
                            No specific configuration available for this node type yet.
                        </div>
                    )}

                </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-slate-100 bg-slate-50">
                <button
                    onClick={onClose}
                    className="w-full flex items-center justify-center gap-2 py-2 bg-brand-blue text-white rounded-lg font-bold text-sm hover:bg-blue-600 transition-all shadow-sm"
                >
                    <Save size={16} /> Save Changes
                </button>
            </div>
        </div>
    );
}
