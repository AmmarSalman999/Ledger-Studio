import { Lead, LeadScore } from "./types";

export const calculateLeadScore = (revenue: string, service: string): LeadScore => {
    let score = { revenue: 0, urgency: 0, fit: 0, total: 0 };

    // 1. Revenue Scoring (The "Ability to Pay" Metric)
    // Higher revenue = higher potential retainer value
    if (revenue === "$1M - $5M") score.revenue = 50;
    else if (revenue === "$500k - $1M") score.revenue = 30;
    else score.revenue = 10; // <$500k

    // 2. Service Scoring (The "Profitability" Metric)
    // CFO services are high ticket; Audits are good entry points
    if (service === "Virtual CFO") score.fit = 40;
    else if (service === "Growth Retainer") score.fit = 30;
    else score.fit = 20; // One-off Audit

    // Total Calculation
    score.total = score.revenue + score.fit;

    return score;
};

// Mock Database (In a real app, this would be Supabase)
export const mockLeadDb: Lead[] = [];

export const saveLead = async (data: any) => {
    const score = calculateLeadScore(data.revenue, data.service);

    const newLead: Lead = {
        id: Math.random().toString(36).substr(2, 9),
        createdAt: new Date().toISOString(),
        companyName: data.company,
        contactPerson: data.name,
        email: data.email,
        annualRevenue: data.revenue,
        serviceType: data.service,
        needs: data.message,
        status: 'New',
        score: score
    };

    // Simulate DB Delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // "Save" to mock DB (in memory for this session)
    mockLeadDb.push(newLead);
    console.log("Lead Saved:", newLead);

    return newLead;
};
