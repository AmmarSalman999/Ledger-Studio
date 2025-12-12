export interface Lead {
    id: string;
    name: string;
    email: string;
    company: string;
    status: 'New' | 'Contacted' | 'Qualified' | 'Proposal' | 'Negotiation' | 'Closed' | 'Lost';
    score: number;
    value: number;
    source: string;
    lastActivity: string;
    assignee: string;
}

export const mockLeads: Lead[] = [
    {
        id: "L-001",
        name: "Sarah Miller",
        email: "sarah.m@techflow.io",
        company: "TechFlow Systems",
        status: "New",
        score: 85,
        value: 12500,
        source: "Website Form",
        lastActivity: "2 mins ago",
        assignee: "Unassigned"
    },
    {
        id: "L-002",
        name: "David Chen",
        email: "dchen@apex-logistics.com",
        company: "Apex Logistics",
        status: "Contacted",
        score: 62,
        value: 45000,
        source: "LinkedIn",
        lastActivity: "4 hours ago",
        assignee: "Alex R."
    },
    {
        id: "L-003",
        name: "Jessica Pearson",
        email: "jessica@pearson-legal.com",
        company: "Pearson Legal",
        status: "Proposal",
        score: 94,
        value: 8500,
        source: "Referral",
        lastActivity: "1 day ago",
        assignee: "Mike Ross"
    },
    {
        id: "L-004",
        name: "Marcus Johnson",
        email: "marcus@greenenergy.co",
        company: "Green Energy Corp",
        status: "Qualified",
        score: 78,
        value: 28000,
        source: "Cold Outreach",
        lastActivity: "2 days ago",
        assignee: "Alex R."
    },
    {
        id: "L-005",
        name: "Emily Blunt",
        email: "emily@runway.fashion",
        company: "Runway Fashion",
        status: "Negotiation",
        score: 88,
        value: 120000,
        source: "Event",
        lastActivity: "5 hours ago",
        assignee: "Miranda P."
    },
    {
        id: "L-006",
        name: "Tom Holland",
        email: "tom@spidey.web",
        company: "Web Slingers Inc",
        status: "New",
        score: 45,
        value: 3000,
        source: "Website Form",
        lastActivity: "10 mins ago",
        assignee: "Unassigned"
    },
    {
        id: "L-007",
        name: "Bruce Wayne",
        email: "bruce@wayne-enterprises.com",
        company: "Wayne Enterprises",
        status: "Closed",
        score: 99,
        value: 500000,
        source: "Direct",
        lastActivity: "1 week ago",
        assignee: "Lucius F."
    }
];
