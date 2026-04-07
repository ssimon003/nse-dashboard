// Mock NSE theme data

export const YEARS = ['22/23', '23/24', '24/25', '25/26']

export const FILTER_OPTIONS = {
  jaar: ['2022/2023', '2023/2024', '2024/2025', '2025/2026'],
  locatie: ['Alle locaties', 'Eindhoven', 'Tilburg', 'Den Bosch', 'Venlo'],
  opleiding: [
    'Software Engineering',
    'Cyber Security',
    'Artificial Intelligence',
    'ICT & Business',
    'HBO-ICT',
  ],
  studievorm: ['Alle', 'Voltijd', 'Deeltijd', 'Duaal'],
  cohort: ['Alle', '2022', '2023', '2024', '2025'],
}

// Base theme definitions (shared across all profiles)
const BASE_THEMES = [
  {
    id: 'begeleiding',
    name: 'Begeleiding',
    icon: 'psychology',
    size: 'large',
    subtag: 'Hoogste stijger in sentiment',
    subthemes: ['Persoonlijke feedback', 'Bereikbaarheid', 'Coaching'],
    quotes: [
      '"De persoonlijke benadering van mijn coach heeft me echt geholpen tijdens mijn stageperiode. Altijd snelle reacties op vragen."',
      '"Goede begeleiding bij de projecten, docenten denken echt met je mee over de technische oplossingen."',
    ],
    aiSummary:
      'Studenten waarderen de toegankelijkheid van docenten. Er is een sterke correlatie tussen persoonlijke feedback en studieplezier.',
  },
  {
    id: 'faciliteiten',
    name: 'Faciliteiten',
    icon: 'apartment',
    size: 'medium',
    subtag: null,
    subthemes: ['Computerlabs', 'Werkplekken', 'Parkeren'],
    quotes: [
      '"De computerlabs zijn goed uitgerust, maar stille studeerzalen zijn schaars tijdens tentamenperiodes."',
      '"Fijne kantine maar de Wi-Fi op de derde verdieping werkt niet goed."',
    ],
    aiSummary:
      'Studenten zijn wisselend over de beschikbare faciliteiten. Computerlabs worden positief beoordeeld, maar parkeerruimte en stille werkplekken zijn een terugkerend aandachtspunt.',
  },
  {
    id: 'groepsprojecten',
    name: 'Groepsprojecten',
    icon: 'groups',
    size: 'small',
    subtag: null,
    subthemes: ['Samenwerking', 'Beoordeling', 'Taakverdeling'],
    quotes: [
      '"Groepsprojecten leren je samenwerken, maar het is frustrerend als niet iedereen evenveel bijdraagt."',
      '"De feedbacksessies na projecten zijn waardevol, maar komen soms te laat."',
    ],
    aiSummary:
      'Meningen over groepsprojecten zijn verdeeld. Samenwerking wordt gewaardeerd, maar de beoordeling van individuele bijdragen is een veelgenoemd pijnpunt.',
  },
  {
    id: 'roosters',
    name: 'Roosters',
    icon: 'calendar_month',
    size: 'small',
    subtag: 'Aandachtspunt',
    subthemes: ['Roosterwijzigingen', 'Tentamenplanning', 'Reistijd'],
    quotes: [
      '"Roosterwijzigingen komen soms een dag van tevoren — dat is moeilijk te plannen met werk of stage."',
      '"Soms zitten er grote gaten in het rooster waardoor je lang op de campus moet wachten."',
    ],
    aiSummary:
      'Roosterplanning is een hardnekkig knelpunt. Late roosterwijzigingen en onduidelijke communicatie zorgen voor stress bij studenten.',
  },
  {
    id: 'leeromgeving',
    name: 'Leeromgeving',
    icon: 'menu_book',
    size: 'medium',
    subtag: null,
    subthemes: ['Canvas', 'Studiemateriaal', 'Online lessen'],
    quotes: [
      '"Het studiemateriaal is goed georganiseerd in Canvas, altijd snel te vinden."',
      '"Fijn dat er ook opnames zijn van hoorcolleges, handig bij ziekte of revisie."',
    ],
    aiSummary:
      'De digitale leeromgeving wordt goed gewaardeerd. Canvas wordt als overzichtelijk ervaren en studenten waarderen de beschikbaarheid van studiemateriaal.',
  },
  {
    id: 'examencommissie',
    name: 'Examencommissie',
    icon: 'gavel',
    size: 'small',
    subtag: null,
    subthemes: ['Doorlooptijden', 'Communicatie', 'Procedures'],
    quotes: [
      '"De examencommissie reageert traag op verzoeken, waardoor ik mijn studie moeilijk kon plannen."',
      '"Uiteindelijk goed geholpen, maar de weg erheen was onduidelijk."',
    ],
    aiSummary:
      'Contacten met de examencommissie verlopen over het algemeen formeel. Studenten missen soms duidelijkheid over procedures en doorlooptijden.',
  },
  {
    id: 'stagebegeleiding',
    name: 'Stagebegeleiding',
    icon: 'work',
    size: 'small',
    subtag: null,
    subthemes: ['Contactmomenten', 'Inhoudelijke steun', 'Bedrijfskeuze'],
    quotes: [
      '"Mijn stagebegeleider was altijd bereikbaar en dacht actief mee over mijn leerdoelen."',
      '"Fijn dat de school ook meekijkt met het stageverloop, voelde niet alleen."',
    ],
    aiSummary:
      'Stagebegeleiding wordt gewaardeerd om de frequentie van contactmomenten. Studenten vinden de begeleiders goed bereikbaar en inhoudelijk sterk.',
  },
]

// Per-opleiding data profiles: { themeId: { percentage, sentiment, sentimentScore, trend, comparison } }
export const OPLEIDING_PROFILES = {
  'Software Engineering': {
    begeleiding:    { percentage: 18, sentiment: 'positive', sentimentScore: 72, sentimentBreakdown: { positive: 72, neutral: 18, negative: 10 }, trend: [12, 14, 17, 18], comparison: { voltijd: 78, deeltijd: 62, duaal: 45 } },
    faciliteiten:   { percentage: 14, sentiment: 'neutral',  sentimentScore: 54, sentimentBreakdown: { positive: 54, neutral: 28, negative: 18 }, trend: [16, 15, 13, 14], comparison: { voltijd: 68, deeltijd: 71, duaal: 60 } },
    groepsprojecten:{ percentage:  9, sentiment: 'neutral',  sentimentScore: 48, sentimentBreakdown: { positive: 48, neutral: 32, negative: 20 }, trend: [10,  9,  8,  9], comparison: { voltijd: 55, deeltijd: 48, duaal: 52 } },
    roosters:       { percentage:  8, sentiment: 'critical', sentimentScore: 28, sentimentBreakdown: { positive: 28, neutral: 22, negative: 50 }, trend: [11, 10,  9,  8], comparison: { voltijd: 38, deeltijd: 29, duaal: 35 } },
    leeromgeving:   { percentage: 11, sentiment: 'positive', sentimentScore: 65, sentimentBreakdown: { positive: 65, neutral: 25, negative: 10 }, trend: [ 9, 10, 11, 11], comparison: { voltijd: 72, deeltijd: 68, duaal: 61 } },
    examencommissie:{ percentage:  4, sentiment: 'neutral',  sentimentScore: 44, sentimentBreakdown: { positive: 44, neutral: 36, negative: 20 }, trend: [ 3,  4,  4,  4], comparison: { voltijd: 50, deeltijd: 45, duaal: 40 } },
    stagebegeleiding:{ percentage: 7, sentiment: 'positive', sentimentScore: 61, sentimentBreakdown: { positive: 61, neutral: 27, negative: 12 }, trend: [ 5,  6,  7,  7], comparison: { voltijd: 70, deeltijd: 55, duaal: 65 } },
  },
  'Cyber Security': {
    begeleiding:    { percentage: 15, sentiment: 'neutral',  sentimentScore: 55, sentimentBreakdown: { positive: 55, neutral: 28, negative: 17 }, trend: [10, 12, 14, 15], comparison: { voltijd: 65, deeltijd: 52, duaal: 40 } },
    faciliteiten:   { percentage: 12, sentiment: 'neutral',  sentimentScore: 50, sentimentBreakdown: { positive: 50, neutral: 30, negative: 20 }, trend: [13, 13, 12, 12], comparison: { voltijd: 62, deeltijd: 67, duaal: 55 } },
    groepsprojecten:{ percentage:  7, sentiment: 'neutral',  sentimentScore: 45, sentimentBreakdown: { positive: 45, neutral: 35, negative: 20 }, trend: [ 8,  7,  7,  7], comparison: { voltijd: 50, deeltijd: 44, duaal: 48 } },
    roosters:       { percentage: 11, sentiment: 'critical', sentimentScore: 24, sentimentBreakdown: { positive: 24, neutral: 20, negative: 56 }, trend: [14, 13, 12, 11], comparison: { voltijd: 32, deeltijd: 25, duaal: 30 } },
    leeromgeving:   { percentage: 16, sentiment: 'positive', sentimentScore: 70, sentimentBreakdown: { positive: 70, neutral: 22, negative:  8 }, trend: [12, 13, 15, 16], comparison: { voltijd: 75, deeltijd: 70, duaal: 63 } },
    examencommissie:{ percentage:  6, sentiment: 'critical', sentimentScore: 35, sentimentBreakdown: { positive: 35, neutral: 30, negative: 35 }, trend: [ 5,  5,  6,  6], comparison: { voltijd: 42, deeltijd: 38, duaal: 35 } },
    stagebegeleiding:{ percentage:12, sentiment: 'positive', sentimentScore: 67, sentimentBreakdown: { positive: 67, neutral: 24, negative:  9 }, trend: [ 8,  9, 11, 12], comparison: { voltijd: 73, deeltijd: 58, duaal: 70 } },
  },
  'Artificial Intelligence': {
    begeleiding:    { percentage: 20, sentiment: 'positive', sentimentScore: 78, sentimentBreakdown: { positive: 78, neutral: 15, negative:  7 }, trend: [14, 16, 19, 20], comparison: { voltijd: 82, deeltijd: 66, duaal: 50 } },
    faciliteiten:   { percentage: 10, sentiment: 'critical', sentimentScore: 38, sentimentBreakdown: { positive: 38, neutral: 22, negative: 40 }, trend: [14, 13, 11, 10], comparison: { voltijd: 45, deeltijd: 50, duaal: 42 } },
    groepsprojecten:{ percentage: 11, sentiment: 'positive', sentimentScore: 60, sentimentBreakdown: { positive: 60, neutral: 28, negative: 12 }, trend: [ 8,  9, 10, 11], comparison: { voltijd: 65, deeltijd: 55, duaal: 58 } },
    roosters:       { percentage:  6, sentiment: 'neutral',  sentimentScore: 45, sentimentBreakdown: { positive: 45, neutral: 30, negative: 25 }, trend: [ 9,  8,  7,  6], comparison: { voltijd: 48, deeltijd: 38, duaal: 42 } },
    leeromgeving:   { percentage: 18, sentiment: 'positive', sentimentScore: 74, sentimentBreakdown: { positive: 74, neutral: 20, negative:  6 }, trend: [13, 15, 17, 18], comparison: { voltijd: 78, deeltijd: 72, duaal: 65 } },
    examencommissie:{ percentage:  3, sentiment: 'neutral',  sentimentScore: 50, sentimentBreakdown: { positive: 50, neutral: 35, negative: 15 }, trend: [ 3,  3,  3,  3], comparison: { voltijd: 55, deeltijd: 48, duaal: 44 } },
    stagebegeleiding:{ percentage: 9, sentiment: 'positive', sentimentScore: 64, sentimentBreakdown: { positive: 64, neutral: 26, negative: 10 }, trend: [ 6,  7,  8,  9], comparison: { voltijd: 70, deeltijd: 56, duaal: 66 } },
  },
  'ICT & Business': {
    begeleiding:    { percentage: 16, sentiment: 'neutral',  sentimentScore: 58, sentimentBreakdown: { positive: 58, neutral: 25, negative: 17 }, trend: [11, 13, 15, 16], comparison: { voltijd: 68, deeltijd: 70, duaal: 55 } },
    faciliteiten:   { percentage: 15, sentiment: 'positive', sentimentScore: 62, sentimentBreakdown: { positive: 62, neutral: 26, negative: 12 }, trend: [14, 14, 15, 15], comparison: { voltijd: 66, deeltijd: 74, duaal: 62 } },
    groepsprojecten:{ percentage: 13, sentiment: 'neutral',  sentimentScore: 52, sentimentBreakdown: { positive: 52, neutral: 30, negative: 18 }, trend: [11, 12, 12, 13], comparison: { voltijd: 58, deeltijd: 62, duaal: 55 } },
    roosters:       { percentage:  9, sentiment: 'critical', sentimentScore: 32, sentimentBreakdown: { positive: 32, neutral: 25, negative: 43 }, trend: [12, 11, 10,  9], comparison: { voltijd: 40, deeltijd: 32, duaal: 37 } },
    leeromgeving:   { percentage: 10, sentiment: 'positive', sentimentScore: 60, sentimentBreakdown: { positive: 60, neutral: 28, negative: 12 }, trend: [ 8,  9, 10, 10], comparison: { voltijd: 65, deeltijd: 66, duaal: 58 } },
    examencommissie:{ percentage:  5, sentiment: 'neutral',  sentimentScore: 46, sentimentBreakdown: { positive: 46, neutral: 36, negative: 18 }, trend: [ 4,  4,  5,  5], comparison: { voltijd: 50, deeltijd: 52, duaal: 44 } },
    stagebegeleiding:{ percentage: 8, sentiment: 'positive', sentimentScore: 65, sentimentBreakdown: { positive: 65, neutral: 25, negative: 10 }, trend: [ 6,  7,  7,  8], comparison: { voltijd: 68, deeltijd: 72, duaal: 64 } },
  },
  'HBO-ICT': {
    begeleiding:    { percentage: 17, sentiment: 'neutral',  sentimentScore: 60, sentimentBreakdown: { positive: 60, neutral: 24, negative: 16 }, trend: [11, 13, 16, 17], comparison: { voltijd: 70, deeltijd: 60, duaal: 48 } },
    faciliteiten:   { percentage: 13, sentiment: 'neutral',  sentimentScore: 52, sentimentBreakdown: { positive: 52, neutral: 30, negative: 18 }, trend: [15, 14, 13, 13], comparison: { voltijd: 60, deeltijd: 65, duaal: 57 } },
    groepsprojecten:{ percentage: 10, sentiment: 'neutral',  sentimentScore: 50, sentimentBreakdown: { positive: 50, neutral: 32, negative: 18 }, trend: [ 9,  9, 10, 10], comparison: { voltijd: 52, deeltijd: 46, duaal: 50 } },
    roosters:       { percentage: 14, sentiment: 'critical', sentimentScore: 26, sentimentBreakdown: { positive: 26, neutral: 22, negative: 52 }, trend: [17, 16, 15, 14], comparison: { voltijd: 35, deeltijd: 27, duaal: 32 } },
    leeromgeving:   { percentage: 12, sentiment: 'positive', sentimentScore: 66, sentimentBreakdown: { positive: 66, neutral: 24, negative: 10 }, trend: [10, 11, 12, 12], comparison: { voltijd: 70, deeltijd: 66, duaal: 60 } },
    examencommissie:{ percentage:  5, sentiment: 'neutral',  sentimentScore: 42, sentimentBreakdown: { positive: 42, neutral: 38, negative: 20 }, trend: [ 4,  4,  5,  5], comparison: { voltijd: 46, deeltijd: 42, duaal: 38 } },
    stagebegeleiding:{ percentage: 8, sentiment: 'neutral',  sentimentScore: 56, sentimentBreakdown: { positive: 56, neutral: 30, negative: 14 }, trend: [ 6,  7,  7,  8], comparison: { voltijd: 62, deeltijd: 50, duaal: 60 } },
  },
}

// Studievorm modifiers: shift sentimentScore and sentimentBreakdown
const STUDIEVORM_MODIFIERS = {
  'Alle': {},
  'Voltijd': {
    begeleiding:     { scoreDelta: +4,  positiveDelta: +4,  negativeDelta: -3 },
    roosters:        { scoreDelta: +2,  positiveDelta: +2,  negativeDelta: -4 },
    groepsprojecten: { scoreDelta: +5,  positiveDelta: +5,  negativeDelta: -4 },
    leeromgeving:    { scoreDelta: +3,  positiveDelta: +3,  negativeDelta: -2 },
  },
  'Deeltijd': {
    begeleiding:     { scoreDelta: -8,  positiveDelta: -8,  negativeDelta: +6 },
    roosters:        { scoreDelta: -10, positiveDelta: -8,  negativeDelta: +10 },
    faciliteiten:    { scoreDelta: +5,  positiveDelta: +5,  negativeDelta: -4 },
    stagebegeleiding:{ scoreDelta: -4,  positiveDelta: -4,  negativeDelta: +3 },
  },
  'Duaal': {
    stagebegeleiding:{ scoreDelta: +12, positiveDelta: +12, negativeDelta: -8 },
    begeleiding:     { scoreDelta: +6,  positiveDelta: +6,  negativeDelta: -4 },
    roosters:        { scoreDelta: -6,  positiveDelta: -6,  negativeDelta: +8 },
    groepsprojecten: { scoreDelta: +4,  positiveDelta: +4,  negativeDelta: -3 },
  },
}

// Locatie modifiers
const LOCATIE_MODIFIERS = {
  'Alle locaties': {},
  'Eindhoven': {},
  'Tilburg': {
    faciliteiten:    { scoreDelta: +6,  positiveDelta: +6,  negativeDelta: -5 },
    roosters:        { scoreDelta: -4,  positiveDelta: -4,  negativeDelta: +5 },
  },
  'Den Bosch': {
    begeleiding:     { scoreDelta: -5,  positiveDelta: -5,  negativeDelta: +4 },
    leeromgeving:    { scoreDelta: +7,  positiveDelta: +7,  negativeDelta: -5 },
  },
  'Venlo': {
    stagebegeleiding:{ scoreDelta: +8,  positiveDelta: +8,  negativeDelta: -6 },
    examencommissie: { scoreDelta: -6,  positiveDelta: -6,  negativeDelta: +5 },
  },
}

// Clamp helper
function clamp(v, min = 0, max = 100) { return Math.max(min, Math.min(max, v)) }

// Merge modifiers for a single theme's stats
function applyModifiers(stats, ...modSets) {
  let s = { ...stats }
  let bd = { ...stats.sentimentBreakdown }
  for (const mods of modSets) {
    if (!mods) continue
    if (mods.scoreDelta)    s.sentimentScore = clamp(s.sentimentScore + mods.scoreDelta)
    if (mods.positiveDelta) bd.positive = clamp(bd.positive + mods.positiveDelta)
    if (mods.negativeDelta) bd.negative = clamp(bd.negative + mods.negativeDelta)
  }
  // Recalculate neutral
  bd.neutral = clamp(100 - bd.positive - bd.negative)
  // Re-derive sentiment label & category
  if (s.sentimentScore >= 65)      s.sentiment = 'positive'
  else if (s.sentimentScore <= 38) s.sentiment = 'critical'
  else                             s.sentiment = 'neutral'
  s.sentimentLabel =
    s.sentimentScore >= 75 ? 'Zeer Positief' :
    s.sentimentScore >= 60 ? 'Positief' :
    s.sentimentScore >= 45 ? 'Gemengd' :
    s.sentimentScore >= 30 ? 'Neutraal' : 'Kritisch'
  s.sentimentBreakdown = bd
  return s
}

/**
 * Build a full themes array for the given filter combination.
 */
export function getFilteredThemes(filters) {
  const { opleiding, studievorm, locatie } = filters
  const profile = OPLEIDING_PROFILES[opleiding] || OPLEIDING_PROFILES['Software Engineering']
  const svMods = STUDIEVORM_MODIFIERS[studievorm] || {}
  const locMods = LOCATIE_MODIFIERS[locatie] || {}

  return BASE_THEMES.map((base) => {
    const profileData = profile[base.id]
    const merged = applyModifiers(
      profileData,
      svMods[base.id],
      locMods[base.id],
    )
    return { ...base, ...merged }
  })
}

// Default themes (Software Engineering, Alle, Eindhoven)
export const THEMES = getFilteredThemes({
  opleiding: 'Software Engineering',
  studievorm: 'Alle',
  locatie: 'Alle locaties',
})

export const PROGRAMMES = [
  { id: 'se',  name: 'Software Engineering',    year: '2024/2025', respondents: 432 },
  { id: 'cs',  name: 'Cyber Security',           year: '2024/2025', respondents: 287 },
  { id: 'ai',  name: 'Artificial Intelligence',  year: '2024/2025', respondents: 198 },
  { id: 'ict', name: 'ICT & Business',            year: '2024/2025', respondents: 311 },
]

export const COMPARISON_DATA = {
  se:  { inhoud: 4.4, docenten: 3.8, sfeer: 4.6, begeleiding: 3.2, toetsing: 4.0, faciliteiten: 3.7, beroep: 4.5, planning: 3.6, betrokken: 4.2, studielast: 3.9 },
  cs:  { inhoud: 4.1, docenten: 4.3, sfeer: 4.2, begeleiding: 3.5, toetsing: 3.9, faciliteiten: 4.1, beroep: 4.4, planning: 3.3, betrokken: 3.9, studielast: 3.7 },
  ai:  { inhoud: 4.6, docenten: 4.1, sfeer: 4.0, begeleiding: 3.8, toetsing: 3.7, faciliteiten: 3.5, beroep: 4.7, planning: 3.4, betrokken: 4.4, studielast: 4.1 },
  ict: { inhoud: 4.2, docenten: 3.9, sfeer: 4.3, begeleiding: 3.6, toetsing: 3.8, faciliteiten: 4.0, beroep: 4.1, planning: 3.7, betrokken: 4.0, studielast: 3.8 },
}

export const COMPARISON_LABELS = {
  inhoud: 'Inhoud', docenten: 'Docenten', sfeer: 'Sfeer', begeleiding: 'Begeleiding',
  toetsing: 'Toetsing', faciliteiten: 'Faciliteiten', beroep: 'Beroep',
  planning: 'Planning', betrokken: 'Betrokken', studielast: 'Studielast',
}
