import { TYPE_COLORS } from './pokemonConstants'

export default function PokemonCard({ data }) {
  const mainType = data.types[0]?.type.name
  const cardColor = mainType ? TYPE_COLORS[mainType] : '#FF6B00'

  return (
    <div className="card" style={{ borderTop: `4px solid ${cardColor}` }}>
      <p className="card-number">#{String(data.id).padStart(3, '0')}</p>
      <h2 className="card-name">{data.name}</h2>
      <img
        src={data.sprites.other?.['official-artwork']?.front_default || data.sprites.front_default}
        alt={data.name}
        className="card-img"
      />
      <div className="types">
        {data.types.map(t => (
          <span key={t.type.name} className="type" style={{ background: TYPE_COLORS[t.type.name] }}>
            {t.type.name}
          </span>
        ))}
      </div>
      <div className="info">
        <div className="info-item">
          <span className="info-label">Peso</span>
          <span className="info-value">{data.weight / 10} kg</span>
        </div>
        <div className="divider" />
        <div className="info-item">
          <span className="info-label">Altura</span>
          <span className="info-value">{data.height / 10} m</span>
        </div>
      </div>
    </div>
  )
}
