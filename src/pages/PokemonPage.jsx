import { TYPE_COLORS } from '../components/Pokemon/pokemonConstants'
import PokemonCard from '../components/Pokemon/PokemonCard'
import PokemonSearch from '../components/Pokemon/PokemonSearch'
import { usePokemon } from '../hooks/usePokemon'
import '../styles/pokemon.css'

export default function PokemonPage() {
  const { pokemon, setPokemon, data, loading, error, suggestions, buscar, selectSuggestion } = usePokemon()

  const mainType = data?.types[0]?.type.name
  const bgColor = mainType ? TYPE_COLORS[mainType] : '#FF6B00'

  return (
    <div className="app" style={{ background: bgColor }}>
      <div className="container">
        <h1 className="title">PokéFinder</h1>

        <PokemonSearch
          pokemon={pokemon}
          setPokemon={setPokemon}
          onSearch={buscar}
          loading={loading}
          suggestions={suggestions}
          onSelectSuggestion={selectSuggestion}
        />

        {loading && <p className="msg">Cargando...</p>}
        {error && <p className="msg error">⚠️ {error}</p>}
        {data && <PokemonCard data={data} />}
      </div>
    </div>
  )
}
