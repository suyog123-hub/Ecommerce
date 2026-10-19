import { Link } from 'react-router-dom'

function Placeholder({ title }) {
  return (
    <div className="ns-container" style={{ padding: '48px 16px', textAlign: 'center' }}>
      <h2>{title}</h2>
      <p>Same layout as NiceShop demo — page coming next.</p>
      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default Placeholder
