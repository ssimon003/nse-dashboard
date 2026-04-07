import { useState } from 'react'
import { PROGRAMMES, COMPARISON_DATA, COMPARISON_LABELS } from '../data/themes'

const THEME_KEYS = Object.keys(COMPARISON_LABELS)

function MirroredRow({ label, valueA, valueB, maxVal = 5 }) {
  const pctA = (valueA / maxVal) * 100
  const pctB = (valueB / maxVal) * 100
  const diff = Math.abs(valueA - valueB)
  const significant = diff >= 0.4

  return (
    <div className="grid grid-cols-11 items-center gap-1">
      {/* Left bar (A) */}
      <div className="col-span-5 flex justify-end">
        <div className="w-full bg-surface-container-lowest h-9 rounded-l-full overflow-hidden flex justify-end items-center px-4 relative">
          <div
            className="absolute right-0 top-0 bottom-0 transition-all duration-500"
            style={{ width: `${pctA}%`, background: 'rgba(0,47,89,0.18)' }}
          />
          <span className="relative z-10 text-sm font-bold text-primary">{valueA.toFixed(1)}</span>
        </div>
      </div>

      {/* Centre label */}
      <div className="col-span-1 text-center">
        <span
          className={`text-[9px] font-bold uppercase leading-none block ${
            significant ? 'text-primary' : 'text-on-surface-variant/50'
          }`}
        >
          {label}
        </span>
        {significant && (
          <span className="text-[8px] font-bold text-error block mt-0.5">
            Δ{diff.toFixed(1)}
          </span>
        )}
      </div>

      {/* Right bar (B) */}
      <div className="col-span-5">
        <div className="w-full bg-surface-container-lowest h-9 rounded-r-full overflow-hidden flex justify-start items-center px-4 relative">
          <div
            className="absolute left-0 top-0 bottom-0 transition-all duration-500"
            style={{ width: `${pctB}%`, background: 'rgba(0,106,106,0.18)' }}
          />
          <span className="relative z-10 text-sm font-bold text-secondary">{valueB.toFixed(1)}</span>
        </div>
      </div>
    </div>
  )
}

export default function Vergelijken() {
  const [selA, setSelA] = useState('se')
  const [selB, setSelB] = useState('cs')

  const progA = PROGRAMMES.find((p) => p.id === selA)
  const progB = PROGRAMMES.find((p) => p.id === selB)
  const dataA = COMPARISON_DATA[selA]
  const dataB = COMPARISON_DATA[selB]

  // Sort rows by largest difference
  const sortedKeys = [...THEME_KEYS].sort(
    (a, b) => Math.abs(dataB[b] - dataA[b]) - Math.abs(dataB[a] - dataA[a])
  )

  const biggestDiffKey = sortedKeys.reduce((best, k) =>
    Math.abs(dataA[k] - dataB[k]) > Math.abs(dataA[best] - dataB[best]) ? k : best
  )

  return (
    <main className="max-w-[1280px] mx-auto">
      <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar - right on desktop, top on mobile */}
      <aside className="w-full md:w-72 md:fixed md:right-0 md:top-16 md:h-[calc(100vh-4rem)] bg-surface-container-lowest/85 glass-panel shadow-editorial flex flex-col p-5 gap-4 order-first md:order-last overflow-y-auto">
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Filters</h3>
          <p className="text-xs text-on-surface-variant">Verfijn uw inzichten</p>
        </div>
        {[
          { icon: 'calendar_today', label: 'Academisch Jaar' },
          { icon: 'location_on', label: 'Locatie' },
          { icon: 'school', label: 'Opleiding' },
          { icon: 'history_edu', label: 'Studievorm' },
          { icon: 'group', label: 'Cohort' },
        ].map((f, i) => (
          <button
            key={f.label}
            className={`w-full flex items-center gap-3 p-3 text-sm font-medium rounded-xl transition-colors text-left ${
              i === 0
                ? 'bg-surface-container-low text-primary'
                : 'text-on-surface-variant hover:bg-surface-container-low'
            }`}
          >
            <span className="material-symbols-outlined text-lg">{f.icon}</span>
            <span>{f.label}</span>
          </button>
        ))}

        <div className="mt-auto bg-surface-container-low p-4 rounded-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-on-surface-variant uppercase">Data Bron</span>
            <span className="material-symbols-outlined text-sm text-outline">info</span>
          </div>
          <p className="text-[10px] text-on-surface-variant leading-relaxed">
            De resultaten zijn gebaseerd op de Nationale Studenten Enquête (NSE) resultaten van
            Fontys Hogescholen.
          </p>
        </div>
      </aside>

      {/* Main content */}
      <section className="flex-1 p-5 md:p-12 bg-surface md:mr-72">
        {/* Header */}
        <div className="mb-8 md:mb-16">
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-headline text-primary mb-2">
            Vergelijkende Analyse
          </h1>
          <p className="text-on-surface-variant max-w-2xl font-body">
            Directe vergelijking van studenttevredenheid tussen twee opleidingen op basis van de
            belangrijkste NSE thema's.
          </p>
        </div>

        {/* Comparison selector */}
        <div className="grid grid-cols-1 md:grid-cols-11 gap-3 md:gap-4 mb-8 md:mb-12 items-center">
          <div className="md:col-span-5 bg-surface-container-lowest p-5 rounded-xl shadow-editorial">
            <label className="text-[10px] uppercase font-bold text-secondary mb-2 block">
              Selectie A
            </label>
            <select
              value={selA}
              onChange={(e) => setSelA(e.target.value)}
              className="w-full text-lg font-bold text-primary bg-transparent border-none outline-none cursor-pointer font-headline appearance-none"
            >
              {PROGRAMMES.map((p) => (
                <option key={p.id} value={p.id} disabled={p.id === selB}>
                  {p.name}
                </option>
              ))}
            </select>
            <p className="text-sm text-on-surface-variant mt-1">{progA?.year}</p>
          </div>

          <div className="md:col-span-1 flex justify-center">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white"
              style={{ background: 'linear-gradient(135deg, #002F59, #00467F)' }}
            >
              VS
            </div>
          </div>

          <div className="md:col-span-5 md:text-right bg-surface-container-lowest p-5 rounded-xl shadow-editorial">
            <label className="text-[10px] uppercase font-bold text-secondary mb-2 block">
              Selectie B
            </label>
            <select
              value={selB}
              onChange={(e) => setSelB(e.target.value)}
              className="w-full text-lg font-bold text-secondary bg-transparent border-none outline-none cursor-pointer font-headline appearance-none text-right"
            >
              {PROGRAMMES.map((p) => (
                <option key={p.id} value={p.id} disabled={p.id === selA}>
                  {p.name}
                </option>
              ))}
            </select>
            <p className="text-sm text-on-surface-variant mt-1">{progB?.year}</p>
          </div>
        </div>

        {/* Mirrored chart */}
        <div className="bg-surface-container-low rounded-2xl p-4 md:p-10">
          {/* Chart header */}
          <div className="flex justify-between items-center mb-8 border-b border-outline-variant/10 pb-5">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                Tevredenheidsscore (1-5)
              </span>
            </div>
            <span className="text-sm font-headline font-bold text-primary">Top NSE Thema's</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                Tevredenheidsscore (1-5)
              </span>
              <span className="w-3 h-3 rounded-full bg-secondary" />
            </div>
          </div>

          <div className="space-y-4">
            {sortedKeys.map((key) => (
              <MirroredRow
                key={key}
                label={COMPARISON_LABELS[key]}
                valueA={dataA[key]}
                valueB={dataB[key]}
              />
            ))}
          </div>

          {/* Footer */}
          <div className="mt-8 flex justify-between text-[10px] font-medium text-on-surface-variant/50 uppercase tracking-widest border-t border-outline-variant/10 pt-4">
            <span>n={progA?.respondents} respondenten</span>
            <span>Gemeten op 12 mei 2025</span>
            <span>n={progB?.respondents} respondenten</span>
          </div>
        </div>

        {/* Analysis cards */}
        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-editorial">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-tertiary-container">trending_up</span>
              <h3 className="font-headline font-bold text-lg text-primary">Belangrijkste Verschil</h3>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
              Het meest significante verschil is zichtbaar bij{' '}
              <strong>{COMPARISON_LABELS[biggestDiffKey]}</strong>. {progA?.name} scoort{' '}
              <strong>{dataA[biggestDiffKey].toFixed(1)}</strong> versus{' '}
              <strong>{dataB[biggestDiffKey].toFixed(1)}</strong> bij {progB?.name}.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-primary cursor-pointer hover:underline">
              <span>BEKIJK GEDETAILLEERDE RAPPORTAGE</span>
              <span className="material-symbols-outlined text-xs">arrow_forward</span>
            </div>
          </div>

          <div
            className="p-8 rounded-2xl text-white shadow-ambient relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #002F59 0%, #00467F 100%)' }}
          >
            <div className="relative z-10">
              <h3 className="font-headline font-bold text-lg mb-3">Actiepunt</h3>
              <p className="text-sm text-blue-100/80 leading-relaxed mb-5">
                Beide opleidingen scoren relatief laag op{' '}
                <strong>Begeleiding</strong>. Dit biedt een kans voor gecentraliseerde verbetering
                van het mentoraat-programma binnen de Fontys ICT instelling.
              </p>
              <button className="bg-white text-primary px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wide hover:bg-surface-container-low transition-colors">
                Deel Inzicht
              </button>
            </div>
            <span
              className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl text-white/5"
              style={{ fontSize: '9rem' }}
            >
              lightbulb
            </span>
          </div>
        </div>

        <footer className="mt-16 text-center text-xs text-on-surface-variant opacity-40">
          © 2025 Fontys Hogescholen - NSE Inzichten Dashboard. Alle rechten voorbehouden.
        </footer>
      </section>
      </div>
    </main>
  )
}
