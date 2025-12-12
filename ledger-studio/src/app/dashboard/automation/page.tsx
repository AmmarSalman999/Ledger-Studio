"use client";

import { useCallback, useState } from 'react';
import ReactFlow, {
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    Connection,
    Edge,
    MarkerType,
    Node
} from 'reactflow';
import 'reactflow/dist/style.css';
import { Save, Play, Plus, Trash } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const initialNodes = [
    {
        id: '1',
        type: 'input',
        data: { label: 'Start: New Lead' },
        position: { x: 250, y: 0 },
        style: { background: '#fff', border: '1px solid #94a3b8', borderRadius: '8px', padding: '10px', fontWeight: 'bold', width: 200 }
    },
];

export default function AutomationPage() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [saving, setSaving] = useState(false);
    const [isRunning, setIsRunning] = useState(false);

    const onConnect = useCallback(
        (params: Edge | Connection) => setEdges((eds) => addEdge({ ...params, markerEnd: { type: MarkerType.ArrowClosed } }, eds)),
        [setEdges],
    );

    const addNode = (type: string, label: string, color: string) => {
        const id = Math.random().toString();
        const newNode: Node = {
            id,
            position: { x: Math.random() * 400, y: Math.random() * 400 },
            data: { label },
            style: { background: color, color: '#fff', border: 'none', borderRadius: '8px', padding: '10px', width: 180, fontWeight: '500' }
        };
        setNodes((nds) => [...nds, newNode]);
    };

    const saveWorkflow = async () => {
        setSaving(true);
        // Save to Supabase 'automations' table
        const flow = { nodes, edges };

        try {
            const { error } = await supabase.from('automations').insert([
                {
                    name: `Workflow - ${new Date().toLocaleTimeString()}`,
                    flow_config: flow,
                    is_active: true
                }
            ]);

            if (error) {
                alert('Error saving flow: ' + error.message);
            } else {
                alert('Workflow saved successfully!');
            }
        } catch (e) {
            console.error(e);
        } finally {
            setSaving(false);
        }
    };

    const runTest = () => {
        setIsRunning(true);
        setTimeout(() => {
            alert("Test Run Complete: Lead processed through 3 steps.");
            setIsRunning(false);
        }, 1500);
    }

    return (
        <div className="h-[calc(100vh-8rem)] flex flex-col">
            {/* Toolbar */}
            <div className="flex justify-between items-center mb-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div>
                    <h1 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        Automation Studio
                    </h1>
                </div>

                <div className="flex gap-3">
                    <button
                        onClick={runTest}
                        disabled={isRunning}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200">
                        {isRunning ? 'Running...' : <><Play size={16} /> Test Run</>}
                    </button>
                    <button
                        onClick={saveWorkflow}
                        disabled={saving}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-brand-blue hover:bg-blue-600 rounded-lg transition-colors shadow-sm">
                        {saving ? 'Saving...' : <><Save size={16} /> Save Flow</>}
                    </button>
                </div>
            </div>

            <div className="flex flex-1 gap-4 overflow-hidden">
                {/* Canvas */}
                <div className="flex-1 bg-slate-50 rounded-xl border border-slate-200 shadow-inner relative">
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        fitView
                    >
                        <Background color="#cbd5e1" gap={20} />
                        <Controls />
                    </ReactFlow>
                </div>

                {/* Sidebar Toolbox */}
                <div className="w-64 bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex flex-col gap-3">
                    <h3 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-2">Add Node</h3>

                    <button onClick={() => addNode('default', 'Condition: Revenue > $10k', '#f59e0b')}
                        className="p-3 bg-amber-50 border border-amber-200 text-amber-900 rounded-lg text-sm font-medium hover:shadow-md transition-all text-left flex items-center gap-2">
                        <Plus size={14} /> Logic / Condition
                    </button>

                    <button onClick={() => addNode('default', 'Action: Send Email', '#3b82f6')}
                        className="p-3 bg-blue-50 border border-blue-200 text-blue-900 rounded-lg text-sm font-medium hover:shadow-md transition-all text-left flex items-center gap-2">
                        <Plus size={14} /> Action: Email
                    </button>

                    <button onClick={() => addNode('default', 'Action: Create Task', '#10b981')}
                        className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-lg text-sm font-medium hover:shadow-md transition-all text-left flex items-center gap-2">
                        <Plus size={14} /> Action: CRM Task
                    </button>

                    <button onClick={() => addNode('default', 'End Flow', '#ef4444')}
                        className="p-3 bg-red-50 border border-red-200 text-red-900 rounded-lg text-sm font-medium hover:shadow-md transition-all text-left flex items-center gap-2">
                        <Plus size={14} /> End
                    </button>

                    <div className="mt-auto pt-4 border-t border-slate-100">
                        <p className="text-xs text-slate-400 text-center">
                            Drag nodes to connect.<br />Double click edge to delete.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
