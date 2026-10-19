import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 100)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <footer id="footer" className="footer dark-background">
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="footer-widget footer-about">
                <Link to="/" className="logo">
                  <span className="sitename">NiceShop</span>
                </Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in nibh vehicula, facilisis magna ut, consectetur lorem. Proin eget tortor risus.</p>

                <div className="social-links">
                  <h5>Connect With Us</h5>
                  <div className="social-icons">
                    <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                    <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                    <a href="#" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
                    <a href="#" aria-label="TikTok"><i className="bi bi-tiktok"></i></a>
                    <a href="#" aria-label="Pinterest"><i className="bi bi-pinterest"></i></a>
                    <a href="#" aria-label="YouTube"><i className="bi bi-youtube"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-col">
              <div className="footer-widget">
                <h4>Shop</h4>
                <ul className="footer-links">
                  <li><Link to="/category">New Arrivals</Link></li>
                  <li><Link to="/category">Bestsellers</Link></li>
                  <li><Link to="/category">Women&apos;s Clothing</Link></li>
                  <li><Link to="/category">Men&apos;s Clothing</Link></li>
                  <li><Link to="/category">Accessories</Link></li>
                  <li><Link to="/category">Sale</Link></li>
                </ul>
              </div>
            </div>

            <div className="footer-col">
              <div className="footer-widget">
                <h4>Support</h4>
                <ul className="footer-links">
                  <li><Link to="/about">Help Center</Link></li>
                  <li><Link to="/about">Order Status</Link></li>
                  <li><Link to="/about">Shipping Info</Link></li>
                  <li><Link to="/about">Returns &amp; Exchanges</Link></li>
                  <li><Link to="/about">Size Guide</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                </ul>
              </div>
            </div>

            <div className="footer-col">
              <div className="footer-widget">
                <h4>Contact Information</h4>
                <div className="footer-contact">
                  <div className="contact-item">
                    <i className="bi bi-geo-alt"></i>
                    <span>123 Fashion Street, New York, NY 10001</span>
                  </div>
                  <div className="contact-item">
                    <i className="bi bi-telephone"></i>
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="contact-item">
                    <i className="bi bi-envelope"></i>
                    <span>hello@example.com</span>
                  </div>
                  <div className="contact-item">
                    <i className="bi bi-clock"></i>
                    <span>Monday-Friday: 9am-6pm<br />Saturday: 10am-4pm<br />Sunday: Closed</span>
                  </div>
                </div>

                <div className="app-buttons">
                  <a href="#" className="app-btn">
                    <i className="bi bi-apple"></i>
                    <span>App Store</span>
                  </a>
                  <a href="#" className="app-btn">
                    <i className="bi bi-google-play"></i>
                    <span>Google Play</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-row">
            <div className="footer-bottom-left">
              <div className="copyright">
                <p>© <span>Copyright</span> <strong className="sitename">NiceShop</strong>. All Rights Reserved.</p>
              </div>
              <div className="credits">
                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
              </div>
            </div>

            <div className="footer-bottom-right">
              <div className="payment-methods">
                <div className="payment-icons">
                  <i className="bi bi-credit-card" aria-label="Credit Card"></i>
                  <i className="bi bi-paypal" aria-label="PayPal"></i>
                  <i className="bi bi-apple" aria-label="Apple Pay"></i>
                  <i className="bi bi-google" aria-label="Google Pay"></i>
                  <i className="bi bi-shop" aria-label="Shop Pay"></i>
                  <i className="bi bi-cash" aria-label="Cash on Delivery"></i>
                </div>
              </div>

              <div className="legal-links">
                <Link to="/about">Terms</Link>
                <Link to="/about">Privacy</Link>
                <Link to="/about">Cookies</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="Scroll to top"
        className={`scroll-top${showTop ? ' active' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <i className="bi bi-arrow-up-short"></i>
      </button>
    </footer>
  )
}

export default Footer
