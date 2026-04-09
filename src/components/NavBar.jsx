import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="bg-surface sticky top-0 z-50 flex justify-between items-center w-full px-4 py-3 md:px-8 md:py-4 shadow-editorial">
      <div className="flex items-center gap-4 md:gap-12">
        <span className="text-lg md:text-xl font-extrabold text-primary font-headline whitespace-nowrap">NSE Insights</span>
        <div className="flex gap-4 md:gap-8">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `font-headline font-bold text-sm md:text-base tracking-tight transition-colors pb-1 ${
                isActive
                  ? 'text-primary-container border-b-2 border-primary-container'
                  : 'text-on-surface-variant hover:text-primary'
              }`
            }
          >
            Overview
          </NavLink>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="p-2 rounded-full hover:bg-surface-container-low transition-colors">
          <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
        </button>
        <button className="p-2 rounded-full hover:bg-surface-container-low transition-colors">
          <span className="material-symbols-outlined text-on-surface-variant">account_circle</span>
        </button>
      </div>
    </nav>
  )
}
