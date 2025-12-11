export type LeadStatus = 'New' | 'Qualifying' | 'Proposal' | 'Negotiation' | 'Won' | 'Lost';

export interface LeadScore {
    revenue: number;
    urgency: number;
    fit: number;
    total: number;
}

export interface Lead {
    id: string;
    createdAt: string;
    companyName: string;
    contactPerson: string;
    email: string;
    annualRevenue: string; // Range: <$500k, $1M+, etc.
    serviceType: string; // 'Audit', 'Retainer', 'CFO'
    needs: string;
    status: LeadStatus;
    score: LeadScore;
}
