export interface VideoPost {
    id: string;
    slug: string;
    title: string;
    description: string;
    youtubeId: string;
    uploadDate: string;
    tags: string[];
    transcript?: string;
}

export const videoLibrary: VideoPost[] = [
    {
        id: "v1",
        slug: "financial-modeling-for-startups",
        title: "Financial Modeling for SaaS Startups: A Crash Course",
        description: "Learn how to build a 5-year financial projection that investors will love. We cover ARR, churn, and drag.",
        youtubeId: "dQw4w9WgXcQ", // Placeholder: Rick Roll (change to real ID later)
        uploadDate: "2024-12-10",
        tags: ["Financial Modeling", "SaaS", "Growth"],
        transcript: "Welcome to this deep dive on SaaS metrics..."
    },
    {
        id: "v2",
        slug: "tax-strategy-2025",
        title: "Advanced Tax Strategies for 2025",
        description: "Don't leave money on the table. We explore R&D credits, Section 179, and international transfer pricing basics.",
        youtubeId: "M7lc1UVf-VE", // Placeholder
        uploadDate: "2024-11-20",
        tags: ["Tax", "Compliance"],
        transcript: "Today we are talking about saving money..."
    },
    {
        id: "v3",
        slug: "cash-flow-mastery",
        title: "Cash Flow Mastery: Surviving the Valley of Death",
        description: "Why profit isn't cash. How to manage burn rate and extend your runway without raising more capital.",
        youtubeId: "9bZkp7q19f0", // Placeholder (Gangnam Style - change later)
        uploadDate: "2024-10-15",
        tags: ["Cash Flow", "Survival"],
        transcript: "Cash is king..."
    },
];
