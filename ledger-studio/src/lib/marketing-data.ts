export interface ContentItem {
    id: string;
    title: string;
    type: 'Video' | 'Blog' | 'Social';
    status: 'Idea' | 'Draft' | 'Scheduled' | 'Published';
    scheduledDate: string;
    platform: 'YouTube' | 'LinkedIn' | 'Twitter' | 'Blog' | 'Instagram';
    assignee: string;
}

export const mockContent: ContentItem[] = [
    {
        id: "C-001",
        title: "How to Automate Invoices with AI",
        type: "Video",
        status: "Published",
        scheduledDate: "2024-12-01",
        platform: "YouTube",
        assignee: "Alice"
    },
    {
        id: "C-002",
        title: "5 Tips for Year-End Audits",
        type: "Blog",
        status: "Published",
        scheduledDate: "2024-12-05",
        platform: "Blog",
        assignee: "Bob"
    },
    {
        id: "C-003",
        title: "Launch Day Announcement",
        type: "Social",
        status: "Scheduled",
        scheduledDate: "2024-12-15",
        platform: "LinkedIn",
        assignee: "Alice"
    },
    {
        id: "C-004",
        title: "Q1 Financial Planning Guide",
        type: "Video",
        status: "Draft",
        scheduledDate: "2024-12-20",
        platform: "YouTube",
        assignee: "Charlie"
    },
    {
        id: "C-005",
        title: "Merry Christmas & Happy New Year",
        type: "Social",
        status: "Scheduled",
        scheduledDate: "2024-12-25",
        platform: "Instagram",
        assignee: "Diana"
    }
];
