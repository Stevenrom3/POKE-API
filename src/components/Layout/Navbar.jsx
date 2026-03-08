import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-glow" />
      <div className="navbar-inner">

        <a className="navbar-brand" href="#">
          <span className="brand-icon">⚗</span>
          <span className="brand-text">Explora<em>App</em></span>
        </a>

        <div className="nav-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
          >
            <span className="nav-icon">🎮</span>
            <span className="nav-label">PokéFinder</span>
            <span className="nav-underline" />
          </NavLink>

          <NavLink
            to="/brewery"
            className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
          >
            <span className="nav-icon">🍺</span>
            <span className="nav-label">Brewery</span>
            <span className="nav-underline" />
          </NavLink>
        </div>

      </div>
      <div className="navbar-border" />
    </nav>
  )
}
