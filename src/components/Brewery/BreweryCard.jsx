import { TYPE_COLORS, TYPE_LABELS } from './breweryConstants'

export default function BreweryCard({ brewery, index }) {
  const type = brewery.brewery_type
  const badgeColor = TYPE_COLORS[type] || '#4a2c0a'
  const badgeLabel = TYPE_LABELS[type] || type

  const address = [brewery.street, brewery.city, brewery.state, brewery.postal_code, brewery.country]
    .filter(Boolean).join(', ')

  return (
    <div className="card">
      <div className="card-top-bar" style={{ background: badgeColor }} />
      <div className="card-head">
        <h2 className="card-name">{brewery.name}</h2>
        {type && (
          <span className="card-badge" style={{ background: badgeColor }}>{badgeLabel}</span>
        )}
      </div>

      <div className="card-info">
        {address && (
          <div className="info-row">
            <span className="info-icon">📍</span>
            <span>{address}</span>
          </div>
        )}
        {brewery.phone && (
          <div className="info-row">
            <span className="info-icon">📞</span>
            <a href={`tel:${brewery.phone}`} className="info-link">{brewery.phone}</a>
          </div>
        )}
        {brewery.website_url && (
          <div className="info-row">
            <span className="info-icon">🌐</span>
            <a href={brewery.website_url} target="_blank" rel="noopener noreferrer" className="info-link">
              {brewery.website_url.replace(/^https?:\/\//, '')}
            </a>
          </div>
        )}
        {brewery.latitude && brewery.longitude && (
          <div className="info-row">
            <span className="info-icon">🗺</span>
            <span>{parseFloat(brewery.latitude).toFixed(4)}, {parseFloat(brewery.longitude).toFixed(4)}</span>
          </div>
        )}
      </div>

      <div className="card-num">#{String(index + 1).padStart(2, '0')}</div>
    </div>
  )
}
