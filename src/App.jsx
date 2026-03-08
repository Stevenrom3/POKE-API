import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Layout/Navbar'
import PokemonPage from './pages/PokemonPage'
import BreweryPage from './pages/BreweryPage'
import './styles/navbar.css'

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PokemonPage />} />
        <Route path="/brewery" element={<BreweryPage />} />
      </Routes>
    </Router>
  )
}
