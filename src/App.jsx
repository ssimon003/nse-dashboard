import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Overview from './pages/Overview'
import Vergelijken from './pages/Vergelijken'
import ThemeDetail from './pages/ThemeDetail'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-surface">
        <NavBar />
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/vergelijken" element={<Vergelijken />} />
          <Route path="/thema/:id" element={<ThemeDetail />} />
        </Routes>
      </div>
      {/* Ambient background shapes */}
      <div className="fixed top-0 right-0 -z-10 w-1/3 h-screen bg-gradient-to-l from-primary-container/5 to-transparent pointer-events-none" />
      <div className="fixed bottom-0 left-0 -z-10 w-64 h-64 bg-secondary-container/10 rounded-full blur-3xl pointer-events-none" />
    </BrowserRouter>
  )
}
