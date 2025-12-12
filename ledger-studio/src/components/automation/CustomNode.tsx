"use client";

import { memo } from "react";
import { Handle, Position, NodeProps } from "reactflow";
import { Zap, Send, Settings, MoreHorizontal, Bot, MousePointerClick, MessageSquare, FileText, Split, Repeat } from "lucide-react";

// Icon mapping based on node type/data
const iconMap: Record<string, any> = {
    "trigger": Zap,
    "action": Send,
    "logic": Split,
    "email": MessageSquare,
    "webhook": Bot,
    "form": FileText,
    "schedule": Repeat,
    "click": MousePointerClick
};

const CustomNode = ({ data, selected }: NodeProps) => {
    const Icon = iconMap[data.icon] || Zap;
    const isTrigger = data.type === 'trigger';

    return (
        <div className={`
            relative group min-w-[280px] bg-white rounded-xl border-2 transition-all duration-300
            ${selected ? 'border-brand-blue shadow-lg ring-4 ring-brand-blue/10' : 'border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md'}
        `}>
            {/* Input Handle (Triggers don't need input usually, but we keep it for chaining) */}
            {!isTrigger && (
                <Handle
                    type="target"
                    position={Position.Left}
                    className="!w-3 !h-3 !bg-slate-400 !border-2 !border-white transition-colors group-hover:!bg-brand-blue"
                />
            )}

            {/* Header */}
            <div className={`p-4 rounded-t-lg flex items-center justify-between border-b border-slate-100 ${isTrigger ? 'bg-blue-50/50' : 'bg-white'}`}>
                <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${isTrigger ? 'bg-brand-blue text-white' : 'bg-slate-100 text-slate-600'}`}>
                        <Icon size={16} />
                    </div>
                    <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                            {data.category || "Action"}
                        </div>
                        <div className="font-bold text-slate-900 text-sm">
                            {data.label}
                        </div>
                    </div>
                </div>
                <button className="text-slate-400 hover:text-slate-600">
                    <MoreHorizontal size={16} />
                </button>
            </div>

            {/* Body (Details) */}
            {data.description && (
                <div className="p-4 pt-2 text-xs text-slate-500">
                    {data.description}
                </div>
            )}

            {/* Status Indicator (for Simulation) */}
            {data.status && (
                <div className={`absolute -top-2 -right-2 w-4 h-4 rounded-full border-2 border-white flex items-center justify-center
                    ${data.status === 'success' ? 'bg-green-500' : data.status === 'error' ? 'bg-red-500' : 'bg-yellow-400'}
                `}></div>
            )}

            {/* Output Handle */}
            <Handle
                type="source"
                position={Position.Right}
                className="!w-3 !h-3 !bg-slate-400 !border-2 !border-white transition-colors group-hover:!bg-brand-blue"
            />
        </div>
    );
};

export default memo(CustomNode);
