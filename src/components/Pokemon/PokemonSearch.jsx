export default function PokemonSearch({ pokemon, setPokemon, onSearch, loading, suggestions, onSelectSuggestion }) {
  return (
    <>
      <div className="search-box">
        <input
          type="text"
          value={pokemon}
          onChange={e => setPokemon(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && onSearch()}
          placeholder="Busca un Pokémon..."
        />
        <button onClick={onSearch} disabled={loading}>Buscar</button>
      </div>

      {suggestions.length > 0 && (
        <div className="suggestions">
          {suggestions.map(p => (
            <div
              key={p.name}
              className="suggestion-item"
              onClick={() => onSelectSuggestion(p.name)}
            >
              {p.name}
            </div>
          ))}
        </div>
      )}
    </>
  )
}
