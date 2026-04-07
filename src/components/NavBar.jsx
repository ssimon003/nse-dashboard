import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="bg-surface sticky top-0 z-50 flex justify-between items-center w-full px-8 py-4 shadow-editorial">
      <div className="flex items-center gap-12">
        <span className="text-xl font-extrabold text-primary font-headline">NSE Inzichten</span>
        <div className="flex gap-8">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `font-headline font-bold text-base tracking-tight transition-colors pb-1 ${
                isActive
                  ? 'text-primary-container border-b-2 border-primary-container'
                  : 'text-on-surface-variant hover:text-primary'
              }`
            }
          >
            Overzicht
          </NavLink>
          <NavLink
            to="/vergelijken"
            className={({ isActive }) =>
              `font-headline font-bold text-base tracking-tight transition-colors pb-1 ${
                isActive
                  ? 'text-primary-container border-b-2 border-primary-container'
                  : 'text-on-surface-variant hover:text-primary'
              }`
            }
          >
            Vergelijken
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
