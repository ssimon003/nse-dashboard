import { BASE_THEMES, AI_SUMMARIES, QUOTES } from './themes';

const API_BASE_URL = 'http://localhost:8000/api/v1';

/**
 * Fetches dynamic theme stats from the backend and merges them with static UI data (icons, quotes, summaries).
 */
export async function getThemesFromAPI(filters) {
  // Construct query params
  const params = new URLSearchParams();
  
  if (filters.jaar && filters.jaar !== 'All') {
    // Map academic year to integer year assuming the first year of the academic year string e.g. "2025/2026" -> 2025
    const yearStr = filters.jaar.split('/')[0];
    if (yearStr) params.append('year', yearStr);
  }
  
  if (filters.locatie && filters.locatie !== 'All locations') {
    params.append('location', filters.locatie);
  }
  
  if (filters.opleiding && filters.opleiding !== 'All') {
    params.append('programme', filters.opleiding);
  }
  
  if (filters.studievorm && filters.studievorm !== 'All') {
    params.append('mode', filters.studievorm);
  }
  
  // Cohort is not supported by backend currently, ignoring.

  try {
    const response = await fetch(`${API_BASE_URL}/themes/?${params.toString()}`);
    if (!response.ok) throw new Error(`API returned ${response.status}`);
    
    const backendData = await response.json();
    
    // Create a map from backend data for quick lookup
    const backendMap = new Map();
    backendData.forEach(item => {
      backendMap.set(item.theme, item);
    });

    // Merge backend numbers with frontend static descriptions
    return BASE_THEMES.map((base) => {
      const stats = backendMap.get(base.id);
      
      // If we don't have stats for this theme in the DB, fallback to 0 count and neutral
      const mergedStats = stats || {
        total: 0,
        positive: 0,
        neutral: 0,
        negative: 0,
        sentiment_score: 50,
        percentage: 0
      };

      const sentimentLabel = 
        mergedStats.sentiment_score >= 75 ? 'Very Positive' :
        mergedStats.sentiment_score >= 60 ? 'Positive' :
        mergedStats.sentiment_score >= 45 ? 'Mixed' :
        mergedStats.sentiment_score >= 30 ? 'Neutral' : 'Critical';

      const sentiment = 
        mergedStats.sentiment_score >= 65 ? 'positive' :
        mergedStats.sentiment_score <= 38 ? 'critical' : 'neutral';

      const totalResponses = mergedStats.total || 1; // avoid division by zero

      const finalMerged = {
        ...base,
        percentage: mergedStats.percentage || 1,
        sentiment,
        sentimentScore: mergedStats.sentiment_score,
        sentimentLabel,
        sentimentBreakdown: {
          positive: Math.round((mergedStats.positive / totalResponses) * 100) || 0,
          neutral: Math.round((mergedStats.neutral / totalResponses) * 100) || 0,
          negative: Math.round((mergedStats.negative / totalResponses) * 100) || 0,
        },
        // trend is not yet from the backend — keep a flat line so TrendChart doesn't crash
        trend: base.trend || [0, 0, 0, mergedStats.total || 0],
        aiSummary: AI_SUMMARIES[base.id]?.[filters.opleiding] ?? AI_SUMMARIES[base.id]?.default ?? base.aiSummary,
        quotes: QUOTES[base.id]?.[filters.opleiding] ?? QUOTES[base.id]?.default ?? base.quotes,
      };
      
      return finalMerged;
    });

  } catch (error) {
    console.error("Failed to fetch themes from API, falling back to empty/default:", error);
    // Fallback to avoid crashing the UI if backend is down
    return BASE_THEMES.map(base => ({
      ...base,
      percentage: 10,
      sentiment: 'neutral',
      sentimentScore: 50,
      sentimentLabel: 'Neutral',
      sentimentBreakdown: { positive: 33, neutral: 34, negative: 33 },
      trend: base.trend || [0, 0, 0, 0],
      aiSummary: base.aiSummary,
      quotes: base.quotes
    }));
  }
}
