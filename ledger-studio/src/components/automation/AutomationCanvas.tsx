"use client";

import { useState, useCallback, useRef } from 'react';
import ReactFlow, {
    ReactFlowProvider,
    addEdge,
    useNodesState,
    useEdgesState,
    Controls,
    Background,
    Connection,
    Edge,
    Node,
    ReactFlowInstance,
    BackgroundVariant
} from 'reactflow';
import 'reactflow/dist/style.css';

import CustomNode from './CustomNode';
import Sidebar from './Sidebar';

// ... (previous imports)

const nodeTypes = {
    custom: CustomNode,
};

interface AutomationCanvasProps {
    initialNodes?: Node[];
    initialEdges?: Edge[];
}

let id = 0;
const getId = () => `dndnode_${id++}`;

function AutomationCanvas({ initialNodes = [], initialEdges = [] }: AutomationCanvasProps) {
    const reactFlowWrapper = useRef<HTMLDivElement>(null);
    const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance | null>(null);
    // Use the passed props for initialization
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    // ... (rest of the component)

    const onConnect = useCallback(
        (params: Connection) => setEdges((eds) => addEdge({ ...params, type: 'smoothstep', animated: true, style: { strokeWidth: 2, stroke: '#64748b' } }, eds)),
        [setEdges],
    );

    const onDragOver = useCallback((event: React.DragEvent) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onDrop = useCallback(
        (event: React.DragEvent) => {
            event.preventDefault();

            const type = event.dataTransfer.getData('application/reactflow');
            const payload = event.dataTransfer.getData('application/payload');

            // check if the dropped element is valid
            if (typeof type === 'undefined' || !type || !payload || !reactFlowInstance) {
                return;
            }

            const data = JSON.parse(payload);
            const position = reactFlowInstance.screenToFlowPosition({
                x: event.clientX,
                y: event.clientY,
            });

            const newNode: Node = {
                id: getId(),
                type,
                position,
                data: { ...data },
            };

            setNodes((nds) => nds.concat(newNode));
        },
        [reactFlowInstance, setNodes],
    );

    return (
        <div className="flex h-full w-full">
            <Sidebar />

            <div className="flex-1 h-full relative" ref={reactFlowWrapper}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    onInit={setReactFlowInstance}
                    onDrop={onDrop}
                    onDragOver={onDragOver}
                    nodeTypes={nodeTypes}
                    fitView
                    snapToGrid
                    snapGrid={[20, 20]}
                    defaultEdgeOptions={{
                        type: 'smoothstep',
                        animated: true,
                        style: { strokeWidth: 2, stroke: '#64748b' }
                    }}
                >
                    <Controls className='!bg-white !border-slate-200 !shadow-lg text-slate-600' />
                    <Background variant={BackgroundVariant.Dots} gap={20} size={1} color="#e2e8f0" />
                </ReactFlow>
            </div>
        </div>
    );
}

export default function AutomationCanvasWrapper() {
    return (
        <ReactFlowProvider>
            <AutomationCanvas />
        </ReactFlowProvider>
    );
}
