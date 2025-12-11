import { NextResponse } from 'next/server';
import { saveLead, mockLeadDb } from '@/lib/lead-engine';

export async function GET() {
    return NextResponse.json({ leads: mockLeadDb });
}

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // 1. Validate (Basic)
        if (!data.email || !data.company) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // 2. Process via Lead Engine
        const lead = await saveLead(data);

        // 3. Trigger Automation (Mock - e.g., Send Slack notification)
        console.log(`[AUTOMATION] New Lead Alert: ${lead.companyName} (Score: ${lead.score.total})`);

        return NextResponse.json({ success: true, lead: lead });

    } catch (error) {
        return NextResponse.json({ error: 'Internal System Error' }, { status: 500 });
    }
}
