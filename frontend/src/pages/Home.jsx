import { Link } from 'react-router-dom'
import heroChair from '../assets/hero-chair.webp'
import product3 from '../assets/product-3.webp'
import product5 from '../assets/product-5.webp'
import productF2 from '../assets/product-f-2.webp'
import productM5 from '../assets/product-m-5.webp'
import product8 from '../assets/product-8.webp'
import product12 from '../assets/product-12.webp'
import productDemo3 from '../assets/product-demo-3.webp'
import './Home.css'

function Home() {
  return (
    <div>
      {/* Hero Section - exact copy from NiceShop demo */}
      <section id="hero" className="hero section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="content-wrapper">
              <h1 className="hero-title">Discover Amazing Products</h1>
              <p className="hero-description">Explore our curated collection of premium items designed to enhance your lifestyle. From fashion to tech, find everything you need with exclusive deals and fast shipping.</p>
              <div className="hero-actions">
                <Link to="/category" className="btn-primary">Shop Now</Link>
                <Link to="/category" className="btn-secondary">Browse Categories</Link>
              </div>
              <div className="features-list">
                <div className="feature-item">
                  <i className="bi bi-truck"></i>
                  <span>Free Shipping</span>
                </div>
                <div className="feature-item">
                  <i className="bi bi-award"></i>
                  <span>Quality Guarantee</span>
                </div>
                <div className="feature-item">
                  <i className="bi bi-headset"></i>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-visuals">
            <div className="product-showcase">
              <div className="product-card featured">
                <img src={heroChair} alt="Featured Product" className="img-fluid" />
                <div className="product-badge">Best Seller</div>
                <div className="product-info">
                  <h4>Premium Wireless Headphones</h4>
                  <div className="price">
                    <span className="sale-price">$299</span>
                    <span className="original-price">$399</span>
                  </div>
                </div>
              </div>

              <div className="product-grid">
                <div className="product-mini">
                  <img src={product3} alt="Product" className="img-fluid" />
                  <span className="mini-price">$89</span>
                </div>
                <div className="product-mini">
                  <img src={product5} alt="Product" className="img-fluid" />
                  <span className="mini-price">$149</span>
                </div>
              </div>
            </div>

            <div className="floating-elements">
              <div className="floating-icon cart">
                <i className="bi bi-cart3"></i>
                <span className="notification-dot">3</span>
              </div>
              <div className="floating-icon wishlist">
                <i className="bi bi-heart"></i>
              </div>
              <div className="floating-icon search">
                <i className="bi bi-search"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Cards Section - exact copy from NiceShop demo */}
      <section id="promo-cards" className="promo-cards section">
        <div className="promo-cards-container">
          <div className="promo-featured-col">
            <div className="category-featured">
              <div className="category-image">
                <img src={productF2} alt="Women's Collection" className="img-fluid" />
              </div>
              <div className="category-content">
                <span className="category-tag">Trending Now</span>
                <h2>New Summer Collection</h2>
                <p>Discover our latest arrivals designed for the modern lifestyle. Elegant, comfortable, and sustainable fashion for every occasion.</p>
                <Link to="/category" className="btn-shop">
                  Explore Collection <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="promo-side-col">
            <div className="promo-side-grid">
              <div className="category-card cat-men">
                <div className="category-image">
                  <img src={productM5} alt="Men's Fashion" className="img-fluid" />
                </div>
                <div className="category-content">
                  <h4>Men&apos;s Wear</h4>
                  <p>242 products</p>
                  <Link to="/category" className="card-link">
                    Shop Now <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>

              <div className="category-card cat-kids">
                <div className="category-image">
                  <img src={product8} alt="Kid's Fashion" className="img-fluid" />
                </div>
                <div className="category-content">
                  <h4>Kid&apos;s Fashion</h4>
                  <p>185 products</p>
                  <Link to="/category" className="card-link">
                    Shop Now <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>

              <div className="category-card cat-cosmetics">
                <div className="category-image">
                  <img src={productDemo3} alt="Cosmetics" className="img-fluid" />
                </div>
                <div className="category-content">
                  <h4>Beauty Products</h4>
                  <p>127 products</p>
                  <Link to="/category" className="card-link">
                    Shop Now <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>

              <div className="category-card cat-accessories">
                <div className="category-image">
                  <img src={product12} alt="Accessories" className="img-fluid" />
                </div>
                <div className="category-content">
                  <h4>Accessories</h4>
                  <p>308 products</p>
                  <Link to="/category" className="card-link">
                    Shop Now <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
