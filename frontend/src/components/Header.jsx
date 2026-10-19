import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [query, setQuery] = useState('')

  function onSearch(e) {
    e.preventDefault()
    console.log('search:', query)
  }

  return (
    <header className="ns-header">
      {/* Top bar */}
      <div className="ns-topbar">
        <div className="ns-container ns-topbar-row">
          <div className="ns-topbar-left">
            <span className="ns-icon">◷</span>
            <span>Need help? Call us: <strong>+1 (234) 567-890</strong></span>
          </div>
          <div className="ns-topbar-center">
            <span className="ns-money">💰</span>
            <strong>30 days money back guarantee.</strong>
          </div>
          <div className="ns-topbar-right">
            <span className="ns-lang"><span className="ns-icon">⿻</span> EN ▾</span>
            <span className="ns-curr"><span className="ns-icon">$</span> USD ▾</span>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="ns-main">
        <div className="ns-container ns-main-row">
          <Link to="/" className="ns-logo">NiceShop</Link>

          <form className="ns-search" onSubmit={onSearch}>
            <input
              type="text"
              placeholder="Search for products"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" aria-label="Search">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
            </button>
          </form>

          <div className="ns-actions">
            <Link to="/about" className="ns-action" title="Account">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" /></svg>
            </Link>
            <Link to="/about" className="ns-action" title="Wishlist">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 21C7 16.5 3 13 3 8.5 3 6 5 4 7.5 4c1.7 0 3.3.9 4.5 2.6C13.2 4.9 14.8 4 16.5 4 19 4 21 6 21 8.5c0 4.5-4 8-9 12.5z" /></svg>
              <span className="ns-badge">0</span>
            </Link>
            <Link to="/cart" className="ns-action" title="Cart">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="9" cy="20" r="1.5" /><circle cx="17" cy="20" r="1.5" /><path d="M3 3h2l2.6 12.5H19L21 7H6" /></svg>
              <span className="ns-badge">3</span>
            </Link>
            <button
              className="ns-mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Dark nav like screenshot */}
      <nav className={`ns-nav ${mobileOpen ? 'open' : ''}`}>
        <div className="ns-container ns-nav-row">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
          <Link to="/category">Category</Link>
          <Link to="/product">Product Details</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/checkout">Checkout</Link>
          <div className="ns-drop">
            <span>Dropdown ▾</span>
            <div className="ns-drop-menu">
              <Link to="/about">Dropdown 1</Link>
              <Link to="/about">Dropdown 2</Link>
              <Link to="/about">Dropdown 3</Link>
            </div>
          </div>
          <div className="ns-drop">
            <span>Megamenu 1 ▾</span>
            <div className="ns-drop-menu">
              <Link to="/category">Featured</Link>
              <Link to="/category">New Arrivals</Link>
              <Link to="/category">Sale</Link>
            </div>
          </div>
          <div className="ns-drop">
            <span>Megamenu 2 ▾</span>
            <div className="ns-drop-menu">
              <Link to="/category">Women</Link>
              <Link to="/category">Men</Link>
              <Link to="/category">Kids</Link>
            </div>
          </div>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
