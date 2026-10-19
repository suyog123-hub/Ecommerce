import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../lib/api.js'
import './About.css'

function About() {
  const [about, setAbout] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api
      .get('/about/')
      .then((res) => setAbout(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div>
      {/* Page Title */}
      <div className="page-title light-background">
        <div className="container page-title-inner">
          <h1>About</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li className="current">About</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* About 2 Section */}
      <section id="about-2" className="about-2 section">
        <div className="container">
          <span className="section-badge"><i className="bi bi-info-circle"></i> About Us</span>
          <div className="about-grid">
            <div className="about-grid-left">
              <h2 className="about-title">{about?.name || 'About Our Store'}</h2>
              <p className="about-description">
                {about?.description || 'Loading our story...'}
              </p>
            </div>
            <div className="about-grid-right">
              <p className="about-text">
                We are dedicated to bringing you the finest products with exceptional
                quality and service. Every item in our collection is carefully curated
                to meet the highest standards.
              </p>
              <p className="about-text">
                From fashion to electronics, home essentials to beauty products — our
                mission is to make premium shopping accessible, enjoyable, and
                reliable for everyone.
              </p>
            </div>
          </div>

          {loading && <p className="about-loading">Loading...</p>}
          {error && <p className="about-error">Error: {error}</p>}

          <div className="features-boxes">
            <div className="feature-box">
              <div className="icon-box">
                <i className="bi bi-bullseye"></i>
              </div>
              <h3><a href="#about-2">Our Mission</a></h3>
              <p>Delivering quality products at fair prices with a seamless shopping experience for every customer.</p>
            </div>

            <div className="feature-box">
              <div className="icon-box">
                <i className="bi bi-person-check"></i>
              </div>
              <h3><a href="#about-2">Customer First</a></h3>
              <p>Every decision we make starts with our customers. Your satisfaction is at the heart of everything we do.</p>
            </div>

            <div className="feature-box">
              <div className="icon-box">
                <i className="bi bi-clipboard-data"></i>
              </div>
              <h3><a href="#about-2">Trusted Quality</a></h3>
              <p>Rigorous quality checks ensure that every product meets our high standards before it reaches you.</p>
            </div>
          </div>

          {about?.image && (
            <div className="about-image-row">
              <div className="video-box">
                <img src={about.image} className="img-fluid" alt={about.name || 'About'} />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="stats section light-background">
        <div className="container">
          <div className="stats-grid">
            <div className="stats-item">
              <i className="bi bi-emoji-smile"></i>
              <span className="purecounter">232</span>
              <p><strong>Happy Clients</strong> trusted worldwide</p>
            </div>

            <div className="stats-item">
              <i className="bi bi-journal-richtext"></i>
              <span className="purecounter">521</span>
              <p><strong>Products</strong> carefully curated</p>
            </div>

            <div className="stats-item">
              <i className="bi bi-headset"></i>
              <span className="purecounter">1453</span>
              <p><strong>Hours Of Support</strong> always available</p>
            </div>

            <div className="stats-item">
              <i className="bi bi-people"></i>
              <span className="purecounter">32</span>
              <p><strong>Hard Workers</strong> behind the scenes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials section">
        <div className="container">
          <div className="testimonial-masonry">
            <div className="testimonial-item">
              <div className="testimonial-content">
                <div className="quote-pattern">
                  <i className="bi bi-quote"></i>
                </div>
                <p>Exceptional service delivery and innovative solutions have transformed our business operations, leading to remarkable growth.</p>
                <div className="client-info">
                  <div className="client-details">
                    <h3>Rachel Bennett</h3>
                    <span className="position">Strategy Director</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial-item highlight">
              <div className="testimonial-content">
                <div className="quote-pattern">
                  <i className="bi bi-quote"></i>
                </div>
                <p>Strategic partnership has enabled seamless digital transformation and operational excellence across all touchpoints.</p>
                <div className="client-info">
                  <div className="client-details">
                    <h3>Daniel Morgan</h3>
                    <span className="position">Chief Innovation Officer</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial-item">
              <div className="testimonial-content">
                <div className="quote-pattern">
                  <i className="bi bi-quote"></i>
                </div>
                <p>Professional expertise and dedication have significantly improved our project delivery timelines and quality metrics.</p>
                <div className="client-info">
                  <div className="client-details">
                    <h3>Emma Thompson</h3>
                    <span className="position">Digital Lead</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial-item">
              <div className="testimonial-content">
                <div className="quote-pattern">
                  <i className="bi bi-quote"></i>
                </div>
                <p>Innovative approach to user experience design has significantly enhanced our platform&apos;s engagement and retention rates.</p>
                <div className="client-info">
                  <div className="client-details">
                    <h3>Christopher Lee</h3>
                    <span className="position">Technical Director</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial-item highlight">
              <div className="testimonial-content">
                <div className="quote-pattern">
                  <i className="bi bi-quote"></i>
                </div>
                <p>Collaborative approach and industry expertise have revolutionized our product development cycle, resulting in faster time-to-market.</p>
                <div className="client-info">
                  <div className="client-details">
                    <h3>Olivia Carter</h3>
                    <span className="position">Product Manager</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
