import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="ns-container" style={{ padding: '32px 16px' }}>
      <h2>About NiceShop Demo</h2>
      <p>
        This mirrors the About page from the NiceShop template: brand story,
        stats and values. Connected to Django DRF backend.
      </p>
      <div style={{ display: 'flex', gap: '16px', margin: '20px 0' }}>
        <div>🏬 10k+ Products</div>
        <div>👥 50k+ Customers</div>
        <div>⭐ 4.8 Rating</div>
      </div>
      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default About
