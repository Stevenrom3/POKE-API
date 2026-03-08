import { TYPE_LABELS } from './breweryConstants'

export default function BreweryFilters({ search, setSearch, typeFilter, setTypeFilter, sortBy, setSortBy, types, total, filtered }) {
  return (
    <div className="filters">
      <div className="filter-search-wrap">
        <input
          className="filter-input"
          type="text"
          placeholder="Buscar por nombre, ciudad o estado..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {search && <button className="clear-btn" onClick={() => setSearch('')}>✕</button>}
      </div>

      <select className="filter-select" value={typeFilter} onChange={e => setTypeFilter(e.target.value)}>
        {types.map(t => (
          <option key={t} value={t}>{t === 'all' ? 'Todos los tipos' : (TYPE_LABELS[t] || t)}</option>
        ))}
      </select>

      <select className="filter-select" value={sortBy} onChange={e => setSortBy(e.target.value)}>
        <option value="name">Ordenar: Nombre</option>
        <option value="city">Ordenar: Ciudad</option>
        <option value="state">Ordenar: Estado</option>
      </select>

      <span className="filter-count">{filtered} de {total}</span>
    </div>
  )
}
