import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link to="/" className="nav-logo" style={{ color: 'var(--text-light)' }}>
              <img src="/src/assets/logo.jpeg" alt="INFIBYTE TECH Logo" onError={(e) => { e.target.style.display = 'none'; }} />
              <span>INFIBYTE TECH</span>
            </Link>
            <p className="footer-desc">
              Transforming enterprise operations through advanced AI, Data Science, and comprehensive tech solutions.
            </p>
          </div>
          
          <div className="footer-col">
            <h3>Quick Links</h3>
            <div className="footer-links">
              <Link to="/about">About Us</Link>
              <Link to="/services">Services</Link>
              <Link to="/industries">Industries</Link>
              <Link to="/careers">Careers</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div className="footer-col">
            <h3>Services</h3>
            <div className="footer-links">
              <Link to="/services">HR Consulting</Link>
              <Link to="/services">Generative AI</Link>
              <Link to="/services">AI Agents</Link>
              <Link to="/services">Data Engineering</Link>
              <Link to="/services">DevOps & Cloud</Link>
            </div>
          </div>

          <div className="footer-col">
            <h3>Contact Us</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <span>📍</span>
                <p>#52, 3rd Cross, Aswath Nagar, Marathahalli, Bengaluru, Karnataka-560037</p>
              </div>
              <div className="contact-item">
                <span>✉️</span>
                <div>
                  <p><a href="mailto:hr@infibytetech.com" style={{color: 'inherit'}}>hr@infibytetech.com</a></p>
                  <p><a href="mailto:manjunath@infibytetech.com" style={{color: 'inherit'}}>manjunath@infibytetech.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} INFIBYTE TECH. All rights reserved.</p>
          <div className="footer-social" style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" style={{ color: 'var(--text-light-muted)' }}>LinkedIn</a>
            <a href="#" style={{ color: 'var(--text-light-muted)' }}>Twitter</a>
            <a href="#" style={{ color: 'var(--text-light-muted)' }}>Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
