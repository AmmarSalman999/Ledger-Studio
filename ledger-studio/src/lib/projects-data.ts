export interface Task {
    id: string;
    title: string;
    status: 'Todo' | 'In Progress' | 'Done';
    assignee: string;
    dueDate: string;
}

export interface Project {
    id: string;
    title: string;
    client: string;
    status: 'Active' | 'On Hold' | 'Completed';
    progress: number;
    dueDate: string;
    tasksTotal: number;
    tasksCompleted: number;
    members: string[];
    thumbnail: string;
    tasks: Task[];
}

export const mockProjects: Project[] = [
    {
        id: "P-101",
        title: "Wayne Ent. Website Redesign",
        client: "Wayne Enterprises",
        status: "Active",
        progress: 65,
        dueDate: "2024-12-20",
        tasksTotal: 24,
        tasksCompleted: 16,
        members: ["Alice", "Bob"],
        thumbnail: "bg-slate-900",
        tasks: [
            { id: "T-1", title: "Design Homepage Hero Section", status: "Done", assignee: "Alice", dueDate: "2024-11-20" },
            { id: "T-2", title: "Implement Dark Mode Toggle", status: "Done", assignee: "Bob", dueDate: "2024-11-22" },
            { id: "T-3", title: "Client Feedback Round 1", status: "Done", assignee: "Alice", dueDate: "2024-11-25" },
            { id: "T-4", title: "Develop Contact Form", status: "In Progress", assignee: "Bob", dueDate: "2024-12-05" },
            { id: "T-5", title: "SEO Optimization", status: "Todo", assignee: "Alice", dueDate: "2024-12-10" },
        ]
    },
    {
        id: "P-102",
        title: "Stark Ind. Audit 2024",
        client: "Stark Industries",
        status: "Active",
        progress: 30,
        dueDate: "2025-01-15",
        tasksTotal: 45,
        tasksCompleted: 12,
        members: ["Charlie", "Diana"],
        thumbnail: "bg-red-900",
        tasks: [
            { id: "T-1", title: "Gather Q3 Financials", status: "Done", assignee: "Charlie", dueDate: "2024-12-01" },
            { id: "T-2", title: "Preliminary Risk Assessment", status: "In Progress", assignee: "Diana", dueDate: "2024-12-15" },
            { id: "T-3", title: "Draft Audit Report", status: "Todo", assignee: "Charlie", dueDate: "2025-01-05" },
        ]
    },
    {
        id: "P-103",
        title: "Cyberdyne Systems Integration",
        client: "Cyberdyne Systems",
        status: "On Hold",
        progress: 80,
        dueDate: "2024-11-30",
        tasksTotal: 10,
        tasksCompleted: 8,
        members: ["Alice"],
        thumbnail: "bg-slate-600",
        tasks: []
    },
    {
        id: "P-104",
        title: "Massive Dynamic Branding",
        client: "Massive Dynamic",
        status: "Completed",
        progress: 100,
        dueDate: "2024-10-01",
        tasksTotal: 32,
        tasksCompleted: 32,
        members: ["Bob", "Diana"],
        thumbnail: "bg-blue-900",
        tasks: []
    }
];
