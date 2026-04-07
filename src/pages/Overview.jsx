import { useState, useMemo } from 'react'
import { getFilteredThemes, FILTER_OPTIONS } from '../data/themes'
import ThemeCard from '../components/ThemeCard'
import DetailDrawer from '../components/DetailDrawer'
import TrendChart from '../components/TrendChart'
import ComparisonMiniChart from '../components/ComparisonMiniChart'
import FilterDropdown from '../components/FilterDropdown'

const BENTO_LAYOUT = [
  { id: 'begeleiding',     size: 'large'  },
  { id: 'faciliteiten',    size: 'medium' },
  { id: 'groepsprojecten', size: 'small'  },
  { id: 'roosters',        size: 'small'  },
  { id: 'leeromgeving',    size: 'medium' },
  { id: 'examencommissie', size: 'small'  },
  { id: 'stagebegeleiding',size: 'small'  },
]

export default function Overview() {
  const [filters, setFilters] = useState({
    jaar:       '2025/2026',
    locatie:    'Alle locaties',
    opleiding:  'Software Engineering',
    studievorm: 'Alle',
    cohort:     'Alle',
  })

  const themes = useMemo(() => getFilteredThemes(filters), [filters])

  const [activeId, setActiveId] = useState('begeleiding')
  const activeTheme = themes.find((t) => t.id === activeId) ?? null

  function setFilter(key, value) {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  function handleThemeClick(theme) {
    setActiveId((prev) => (prev === theme.id ? null : theme.id))
  }

  return (
    <main className="max-w-[1280px] mx-auto px-4 py-6 md:px-8 md:py-10 flex flex-col gap-6 md:gap-10">
      {/* Page title only — no subtitle */}
      <h1 className="text-3xl md:text-5xl font-extrabold font-headline tracking-tight text-primary">
        Thematisch Landschap
      </h1>

      {/* Dashboard grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
        {/* Left/center */}
        <div className="order-2 md:order-1 col-span-1 md:col-span-8 flex flex-col gap-6 md:gap-10">

          {/* Theme Landscape */}
          <section>
            <div className="flex items-end justify-between mb-5">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-secondary mb-1 block">
                  Visualisatie
                </span>
                <h2 className="text-2xl font-bold font-headline text-primary">
                  Thema Frequentie &amp; Sentiment
                </h2>
              </div>
              <div className="flex gap-3">
                {[
                  { color: '#005119', label: 'Positief' },
                  { color: '#d97706', label: 'Neutraal' },
                  { color: '#ba1a1a', label: 'Kritisch' },
                ].map(({ color, label }) => (
                  <span key={label} className="flex items-center gap-1.5 text-xs font-medium text-on-surface-variant">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: color }} />
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:grid-rows-3 md:h-[460px]">
              {BENTO_LAYOUT.map(({ id, size }) => {
                const theme = themes.find((t) => t.id === id)
                if (!theme) return null
                return (
                  <ThemeCard
                    key={id}
                    theme={theme}
                    size={size}
                    isActive={activeId === id}
                    onClick={() => handleThemeClick(theme)}
                  />
                )
              })}
            </div>

            {activeTheme && (
              <p className="mt-3 text-xs text-on-surface-variant/50 text-center">
                Klik nogmaals op een thema om de selectie te wissen
              </p>
            )}
          </section>

          {/* Charts row */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <TrendChart activeTheme={activeTheme} allThemes={themes} />
            <ComparisonMiniChart theme={activeTheme ?? themes[0]} filters={filters} />
          </section>
        </div>

        {/* Right sidebar */}
        <aside className="order-1 md:order-2 col-span-1 md:col-span-4 flex flex-col gap-5 md:sticky md:top-20">

          {/* Filters */}
          <div className="bg-surface-container-lowest/85 glass-panel shadow-editorial rounded-2xl p-5 flex flex-col gap-3">
            <div>
              <h4 className="font-headline font-bold text-primary text-lg">Filters</h4>
              <p className="text-sm text-on-surface-variant">Verfijn uw inzichten</p>
            </div>
            <FilterDropdown
              icon="calendar_today"
              label="Academisch Jaar"
              value={filters.jaar}
              options={FILTER_OPTIONS.jaar}
              onChange={(v) => setFilter('jaar', v)}
            />
            <FilterDropdown
              icon="location_on"
              label="Locatie"
              value={filters.locatie}
              options={FILTER_OPTIONS.locatie}
              onChange={(v) => setFilter('locatie', v)}
            />
            <FilterDropdown
              icon="school"
              label="Opleiding"
              value={filters.opleiding}
              options={FILTER_OPTIONS.opleiding}
              onChange={(v) => setFilter('opleiding', v)}
            />
            <FilterDropdown
              icon="history_edu"
              label="Studievorm"
              value={filters.studievorm}
              options={FILTER_OPTIONS.studievorm}
              onChange={(v) => setFilter('studievorm', v)}
            />
            <FilterDropdown
              icon="group"
              label="Cohort"
              value={filters.cohort}
              options={FILTER_OPTIONS.cohort}
              onChange={(v) => setFilter('cohort', v)}
            />
          </div>

          {/* Detail drawer */}
          <DetailDrawer theme={activeTheme} />

          {!activeTheme && (
            <div className="bg-surface-container-low rounded-2xl p-8 text-center">
              <span className="material-symbols-outlined text-4xl text-outline mb-3 block">
                touch_app
              </span>
              <p className="text-sm text-on-surface-variant">
                Klik op een thema om de details te bekijken
              </p>
            </div>
          )}
        </aside>
      </div>
    </main>
  )
}
