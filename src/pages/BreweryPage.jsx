import { useState, useEffect } from 'react'
import BreweryCard from '../components/Brewery/BreweryCard'
import BreweryFilters from '../components/Brewery/BreweryFilters'
import BreweryHeader from '../components/Brewery/BreweryHeader'
import { useBreweries } from '../hooks/useBreweries'
import '../styles/brewery.css'

export default function BreweryPage() {
  const { breweries, loading, error, refetch } = useBreweries()
  const [filtered, setFiltered] = useState([])
  const [search, setSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState('all')
  const [sortBy, setSortBy] = useState('name')

  useEffect(() => {
    let result = [...breweries]
    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(b =>
        b.name?.toLowerCase().includes(q) ||
        b.city?.toLowerCase().includes(q) ||
        b.state?.toLowerCase().includes(q)
      )
    }
    if (typeFilter !== 'all') {
      result = result.filter(b => b.brewery_type === typeFilter)
    }
    result.sort((a, b) => {
      if (sortBy === 'name') return (a.name || '').localeCompare(b.name || '')
      if (sortBy === 'city') return (a.city || '').localeCompare(b.city || '')
      if (sortBy === 'state') return (a.state || '').localeCompare(b.state || '')
      return 0
    })
    setFiltered(result)
  }, [search, typeFilter, sortBy, breweries])

  const types = ['all', ...new Set(breweries.map(b => b.brewery_type).filter(Boolean))]

  return (
    <div className="app">
      <BreweryHeader />

      <BreweryFilters
        search={search}
        setSearch={setSearch}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
        types={types}
        total={breweries.length}
        filtered={filtered.length}
      />

      {loading && (
        <div className="loader">
          <p>🍺 Abriendo el barril...</p>
        </div>
      )}

      {error && (
        <div className="error">
          <p>⚠ {error}</p>
          <button className="retry-btn" onClick={refetch}>Reintentar</button>
        </div>
      )}

      {!loading && !error && filtered.length === 0 && (
        <div className="loader">
          <p>Sin resultados para tu búsqueda.</p>
        </div>
      )}

      {!loading && !error && (
        <div className="grid">
          {filtered.map((b, i) => <BreweryCard key={b.id} brewery={b} index={i} />)}
        </div>
      )}

      <footer className="footer">
        <div className="header-rule"><span>⚗</span></div>
        <p>Datos por <a href="https://www.openbrewerydb.org" target="_blank" rel="noopener noreferrer">Open Brewery DB</a> · The Brewery Vault © 1852</p>
      </footer>
    </div>
  )
}
