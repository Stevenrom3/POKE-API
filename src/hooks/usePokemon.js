import { useState, useEffect } from 'react'

export function usePokemon() {
  const [pokemon, setPokemon] = useState('')
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [pokemonList, setPokemonList] = useState([])
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1000')
      .then(r => r.json())
      .then(j => setPokemonList(j.results))
      .catch(() => {})
  }, [])

  useEffect(() => {
    if (pokemon.length < 2) { setSuggestions([]); return }
    setSuggestions(pokemonList.filter(p => p.name.includes(pokemon.toLowerCase())).slice(0, 5))
  }, [pokemon, pokemonList])

  const buscar = async (nombre = pokemon) => {
    if (!nombre) return
    setLoading(true)
    setError(null)
    setData(null)
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`)
      if (!res.ok) throw new Error('Pokémon no encontrado')
      setData(await res.json())
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const t = setTimeout(() => { if (pokemon.length >= 3) buscar() }, 500)
    return () => clearTimeout(t)
  }, [pokemon])

  const selectSuggestion = (nombre) => {
    setPokemon(nombre)
    setSuggestions([])
    buscar(nombre)
  }

  return { pokemon, setPokemon, data, loading, error, suggestions, buscar, selectSuggestion }
}
