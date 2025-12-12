import { Lead } from "./leads-data";

interface ScoreFactor {
    label: string;
    points: number;
}

interface ScoreResult {
    totalScore: number;
    factors: ScoreFactor[];
    tier: 'Hot' | 'Warm' | 'Cold';
}

/**
 * Calculates a lead score (0-100) based on firmographic and behavioral data.
 */
export function calculateLeadScore(lead: Lead): ScoreResult {
    let score = 0;
    const factors: ScoreFactor[] = [];

    // 1. Email Quality Check
    const freeDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];
    const emailDomain = lead.email.split('@')[1]?.toLowerCase();

    if (emailDomain && !freeDomains.includes(emailDomain)) {
        score += 25;
        factors.push({ label: 'Business Email Domain', points: 25 });
    } else {
        score += 5;
        factors.push({ label: 'Public Email Domain', points: 5 });
    }

    // 2. Source Attribution
    switch (lead.source) {
        case 'Referral':
            score += 30;
            factors.push({ label: 'Source: Referral', points: 30 });
            break;
        case 'Direct':
            score += 20;
            factors.push({ label: 'Source: Direct Traffic', points: 20 });
            break;
        case 'LinkedIn':
            score += 15;
            factors.push({ label: 'Source: LinkedIn', points: 15 });
            break;
        default:
            score += 5;
            factors.push({ label: 'Source: Other', points: 5 });
    }

    // 3. Company Profile
    if (lead.company && lead.company.length > 3) {
        score += 10;
        factors.push({ label: 'Company Name Identified', points: 10 });
    }

    // 4. Value Potential (Mock rule)
    if (lead.value > 10000) {
        score += 20;
        factors.push({ label: 'High Value Opportunity', points: 20 });
    } else if (lead.value > 5000) {
        score += 10;
        factors.push({ label: 'Mid Value Opportunity', points: 10 });
    }

    // 5. Status Progress
    if (['Qualified', 'Proposal', 'Negotiation'].includes(lead.status)) {
        score += 15;
        factors.push({ label: 'Advanced Pipeline Stage', points: 15 });
    }

    // Cap at 100
    const finalScore = Math.min(score, 100);

    // Determine Tier
    let tier: ScoreResult['tier'] = 'Cold';
    if (finalScore >= 80) tier = 'Hot';
    else if (finalScore >= 50) tier = 'Warm';

    return {
        totalScore: finalScore,
        factors,
        tier
    };
}
