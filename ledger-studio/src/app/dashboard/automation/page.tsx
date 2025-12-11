"use client";

import { useCallback } from 'react';
import ReactFlow, {
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    Connection,
    Edge,
    MarkerType
} from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
    {
        id: '1',
        type: 'input',
        data: { label: 'New Lead Request (Web)' },
        position: { x: 250, y: 0 },
        style: { background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '10px', fontWeight: 'bold', width: 200 }
    },
    {
        id: '2',
        data: { label: 'Filter: Revenue > $100k' },
        position: { x: 250, y: 100 },
        style: { background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '10px', width: 200 }
    },
    {
        id: '3',
        data: { label: 'Add to Pipeline' },
        position: { x: 100, y: 200 },
        style: { background: '#10b981', color: '#fff', border: 'none', borderRadius: '8px', padding: '10px', width: 200 }
    },
    {
        id: '4',
        data: { label: 'Send Rejection Email' },
        position: { x: 400, y: 200 },
        style: { background: '#ef4444', color: '#fff', border: 'none', borderRadius: '8px', padding: '10px', width: 200 }
    },
];

const initialEdges = [
    { id: 'e1-2', source: '1', target: '2', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e2-3', source: '2', target: '3', label: 'Yes', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e2-4', source: '2', target: '4', label: 'No', markerEnd: { type: MarkerType.ArrowClosed } },
];

export default function AutomationPage() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
    );

    return (
        <div className="h-[calc(100vh-8rem)]">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Automation Builder</h1>
                    <p className="text-slate-500">Visually design your business logic.</p>
                </div>
                <button className="bg-brand-blue text-white px-4 py-2 rounded-lg font-bold">
                    Save Workflow
                </button>
            </div>

            <div className="h-full bg-slate-100 rounded-xl border border-slate-200 overflow-hidden shadow-inner">
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    fitView
                >
                    <Background color="#94a3b8" gap={16} />
                    <Controls />
                </ReactFlow>
            </div>
        </div>
    );
}
