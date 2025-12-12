export interface Metric {
    label: string;
    value: string;
    change: string;
    trend: 'up' | 'down' | 'neutral';
}

export interface ChartData {
    label: string;
    value1: number; // Primary (e.g. Revenue)
    value2: number; // Secondary (e.g. Expenses)
}

export const mockKPIs: Metric[] = [
    { label: "Total Revenue (YTD)", value: "$245,000", change: "+12.5%", trend: "up" },
    { label: "Net Profit Margin", value: "32%", change: "+4.2%", trend: "up" },
    { label: "Active Projects", value: "8", change: "0%", trend: "neutral" },
    { label: "Avg. Deal Size", value: "$8,500", change: "-2.1%", trend: "down" },
];

export const mockRevenueHistory: ChartData[] = [
    { label: "Jul", value1: 32000, value2: 12000 },
    { label: "Aug", value1: 36000, value2: 14000 },
    { label: "Sep", value1: 42000, value2: 18000 },
    { label: "Oct", value1: 38000, value2: 15000 },
    { label: "Nov", value1: 45000, value2: 20000 },
    { label: "Dec", value1: 52000, value2: 22000 },
];

export const mockFunnelData = [
    { stage: "Impressions", count: 12500, rate: "100%" },
    { stage: "Visitors", count: 4200, rate: "33%" },
    { stage: "Leads", count: 350, rate: "8%" },
    { stage: "Deals", count: 45, rate: "12%" },
    { stage: "Closed", count: 18, rate: "40%" },
];
