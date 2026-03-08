import { useState, useEffect } from 'react'

export function useBreweries() {
  const [breweries, setBreweries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    try {
      setLoading(true)
      setError(null)
      const res = await fetch('https://api.openbrewerydb.org/v1/breweries?per_page=30')
      if (!res.ok) throw new Error('Error al obtener datos de la API')
      const data = await res.json()
      setBreweries(data)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchData() }, [])

  return { breweries, loading, error, refetch: fetchData }
}
