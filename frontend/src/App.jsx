import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Placeholder from './pages/Placeholder.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      {/* Why Layout: Header/Footer wrap all pages so you don't repeat them */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/category" element={<Placeholder title="Category" />} />
          <Route path="/product" element={<Placeholder title="Product Details" />} />
          <Route path="/cart" element={<Placeholder title="Cart (3 items)" />} />
          <Route path="/checkout" element={<Placeholder title="Checkout" />} />
          <Route path="/contact" element={<Placeholder title="Contact" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
