import { useState, useMemo } from 'react'
import { getFilteredThemes, FILTER_OPTIONS } from '../data/themes'
import ThemeCard from '../components/ThemeCard'
import DetailDrawer from '../components/DetailDrawer'
import TrendChart from '../components/TrendChart'
import ComparisonMiniChart from '../components/ComparisonMiniChart'
import FilterDropdown from '../components/FilterDropdown'
import { LayoutGroup } from 'framer-motion'

export default function Overview() {
  const [filters, setFilters] = useState({
    jaar:       '2025/2026',
    locatie:    'All locations',
    opleiding:  'Software Engineering',
    studievorm: 'All',
    cohort:     'All',
  })

  const themes = useMemo(() => getFilteredThemes(filters), [filters])

  // Sort by percentage and assign sizes dynamically so layout reflects frequency
  const bentoThemes = useMemo(() => {
    const sorted = [...themes].sort((a, b) => b.percentage - a.percentage)
    return sorted.map((t, i) => ({
      ...t,
      size: i === 0 ? 'large' : i <= 2 ? 'medium' : 'small',
    }))
  }, [themes])

  const [activeId, setActiveId] = useState(null)
  const activeTheme = themes.find((t) => t.id === activeId) ?? null

  function setFilter(key, value) {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  function handleThemeClick(theme) {
    setActiveId((prev) => (prev === theme.id ? null : theme.id))
  }

  return (
    <main className="max-w-[1280px] mx-auto px-4 py-6 md:px-8 md:py-8 flex flex-col gap-6">

      {/* ── Filters bar — full width, replaces the old h1 ── */}
      <div className="relative z-20 bg-surface-container-lowest/85 glass-panel shadow-editorial rounded-2xl px-5 py-4">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          {/* Title */}
          {/* Filter dropdowns — horizontal row */}
          <div className="flex flex-wrap md:flex-nowrap gap-3 flex-1">
            <div className="flex-1 min-w-[130px]">
              <FilterDropdown
                icon="calendar_today"
                label="Academic Year"
                value={filters.jaar}
                options={FILTER_OPTIONS.jaar}
                onChange={(v) => setFilter('jaar', v)}
              />
            </div>
            <div className="flex-1 min-w-[130px]">
              <FilterDropdown
                icon="location_on"
                label="Location"
                value={filters.locatie}
                options={FILTER_OPTIONS.locatie}
                onChange={(v) => setFilter('locatie', v)}
              />
            </div>
            <div className="flex-1 min-w-[130px]">
              <FilterDropdown
                icon="school"
                label="Programme"
                value={filters.opleiding}
                options={FILTER_OPTIONS.opleiding}
                onChange={(v) => setFilter('opleiding', v)}
              />
            </div>
            <div className="flex-1 min-w-[130px]">
              <FilterDropdown
                icon="history_edu"
                label="Study Mode"
                value={filters.studievorm}
                options={FILTER_OPTIONS.studievorm}
                onChange={(v) => setFilter('studievorm', v)}
              />
            </div>
            <div className="flex-1 min-w-[130px]">
              <FilterDropdown
                icon="group"
                label="Cohort"
                value={filters.cohort}
                options={FILTER_OPTIONS.cohort}
                onChange={(v) => setFilter('cohort', v)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Dashboard grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">

        {/* Left/center — bento + charts */}
        <div className="order-2 md:order-1 col-span-1 md:col-span-8 flex flex-col gap-6 md:gap-8">

          {/* Theme Landscape */}
          <section>
            <div className="flex items-end justify-between mb-5">
              <div>
                <h2 className="text-2xl font-bold font-headline text-primary">
                  Theme Frequency &amp; Sentiment
                </h2>
              </div>
              <div className="flex gap-3">
                {[
                  { color: '#005119', label: 'Positive' },
                  { color: '#d97706', label: 'Neutral' },
                  { color: '#ba1a1a', label: 'Critical' },
                ].map(({ color, label }) => (
                  <span key={label} className="flex items-center gap-1.5 text-xs font-medium text-on-surface-variant">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: color }} />
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <LayoutGroup>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:grid-rows-3 md:h-[460px]">
                {bentoThemes.map((theme) => (
                  <ThemeCard
                    key={theme.id}
                    theme={theme}
                    size={theme.size}
                    isActive={activeId === theme.id}
                    onClick={() => handleThemeClick(theme)}
                  />
                ))}
              </div>
            </LayoutGroup>

            {activeTheme && (
              <p className="mt-3 text-xs text-on-surface-variant/50 text-center">
                Click again on a theme to clear the selection
              </p>
            )}
          </section>

          {/* Charts row */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <TrendChart activeTheme={activeTheme} allThemes={themes} />
            <ComparisonMiniChart theme={activeTheme ?? themes[0]} filters={filters} />
          </section>
        </div>

        {/* Right sidebar — detail drawer only */}
        <aside className="order-1 md:order-2 col-span-1 md:col-span-4 flex flex-col gap-5 md:sticky md:top-20">
          <DetailDrawer theme={activeTheme} />

          {!activeTheme && (
            <div className="bg-surface-container-low rounded-2xl p-8 text-center">
              <span className="material-symbols-outlined text-4xl text-outline mb-3 block">
                touch_app
              </span>
              <p className="text-sm text-on-surface-variant">
                Click on a theme to view the details
              </p>
            </div>
          )}
        </aside>
      </div>
    </main>
  )
}
