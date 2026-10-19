import { Outlet } from 'react-router-dom'
import Footer from './Footer.jsx'
import Header from './Header.jsx'

// Why: shared layout so Header/Footer appear on all pages automatically
function Layout() {
  return (
    <div className="ns-layout">
      <Header />
      <main className="ns-main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
