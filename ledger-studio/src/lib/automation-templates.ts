import { Node, Edge } from 'reactflow';

export interface WorkflowTemplate {
    id: string;
    title: string;
    description: string;
    category: string;
    nodes: Node[];
    edges: Edge[];
}

export const automationTemplates: Record<string, WorkflowTemplate> = {
    "lead-crm-slack": {
        id: "lead-crm-slack",
        title: "New Lead to CRM & Slack",
        description: "Adds new inbound leads to Hubspot and notifies the sales team channel.",
        category: "Sales",
        nodes: [
            { id: '1', type: 'custom', position: { x: 100, y: 100 }, data: { label: 'New Web Lead', category: 'Trigger', icon: 'trigger', description: 'Source: Website Contact Form' } },
            { id: '2', type: 'custom', position: { x: 100, y: 300 }, data: { label: 'Enrich Data (Clearbit)', category: 'Action', icon: 'webhook', description: 'Fetch company size & revenue' } },
            { id: '3', type: 'custom', position: { x: 100, y: 500 }, data: { label: 'Create Hubspot Contact', category: 'Action', icon: 'click', description: 'Add to "New Leads" list' } },
            { id: '4', type: 'custom', position: { x: 400, y: 500 }, data: { label: 'Notify #sales', category: 'Action', icon: 'email', description: 'Send Slack alert' } },
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', animated: true, style: { strokeWidth: 2, stroke: '#64748b' } },
            { id: 'e2-3', source: '2', target: '3', animated: true, style: { strokeWidth: 2, stroke: '#64748b' } },
            { id: 'e2-4', source: '2', target: '4', animated: true, style: { strokeWidth: 2, stroke: '#64748b' } },
        ]
    },
    "invoice-processing": {
        id: "invoice-processing",
        title: "Invoice Processing (Gmail -> Xero)",
        description: "Extracts attachments from emails, uses OCR, and creates draft bills.",
        category: "Finance",
        nodes: [
            { id: '1', type: 'custom', position: { x: 250, y: 50 }, data: { label: 'New Email Attachment', category: 'Trigger', icon: 'email', description: 'Filter: Subject contains "Invoice"' } },
            { id: '2', type: 'custom', position: { x: 250, y: 250 }, data: { label: 'Extract Data (OCR)', category: 'Action', icon: 'webhook', description: 'Parse PDF to JSON' } },
            { id: '3', type: 'custom', position: { x: 50, y: 450 }, data: { label: 'Check Vendor Exists?', category: 'Logic', icon: 'logic', description: 'Lookup in Xero' } },
            { id: '4', type: 'custom', position: { x: 50, y: 650 }, data: { label: 'Create Draft Bill', category: 'Action', icon: 'trigger', description: 'Post to Xero API' } },
            { id: '5', type: 'custom', position: { x: 450, y: 450 }, data: { label: 'Auto-Approval Check', category: 'Logic', icon: 'logic', description: 'If amount < $500' } },
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', animated: true, style: { strokeWidth: 2, stroke: '#64748b' } },
            { id: 'e2-3', source: '2', target: '3', animated: true, style: { strokeWidth: 2, stroke: '#64748b' } },
            { id: 'e2-5', source: '2', target: '5', animated: true, style: { strokeWidth: 2, stroke: '#64748b' } },
            { id: 'e3-4', source: '3', target: '4', animated: true, style: { strokeWidth: 2, stroke: '#64748b' } },
        ]
    },
    "weekly-report": {
        id: "weekly-report",
        title: "Weekly Financial Report",
        description: "Aggregates bank data and sends a PDF summary to management.",
        category: "Reporting",
        nodes: [
            { id: '1', type: 'custom', position: { x: 250, y: 50 }, data: { label: 'Every Friday at 9am', category: 'Trigger', icon: 'schedule', description: 'Cron Schedule' } },
            { id: '2', type: 'custom', position: { x: 250, y: 250 }, data: { label: 'Fetch Bank Balances', category: 'Action', icon: 'webhook', description: 'Plaid API' } },
            { id: '3', type: 'custom', position: { x: 250, y: 450 }, data: { label: 'Generate PDF Summary', category: 'Action', icon: 'form', description: 'Create Report' } },
            { id: '4', type: 'custom', position: { x: 250, y: 650 }, data: { label: 'Email to Management', category: 'Action', icon: 'email', description: 'Send via Gmail' } },
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', animated: true, style: { strokeWidth: 2, stroke: '#64748b' } },
            { id: 'e2-3', source: '2', target: '3', animated: true, style: { strokeWidth: 2, stroke: '#64748b' } },
            { id: 'e3-4', source: '3', target: '4', animated: true, style: { strokeWidth: 2, stroke: '#64748b' } },
        ]
    }
};
