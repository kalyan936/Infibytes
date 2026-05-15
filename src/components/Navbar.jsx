import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
          {/* Using a text logo with icon as fallback if image fails, but pointing to the requested path */}
          <img src="/src/assets/logo.jpeg" alt="INFIBYTE TECH Logo" onError={(e) => { e.target.style.display = 'none'; }} />
          <span>INFIBYTE TECH</span>
        </Link>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>

        <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <li><NavLink to="/" className="nav-link" onClick={closeMobileMenu}>Home</NavLink></li>
          <li><NavLink to="/about" className="nav-link" onClick={closeMobileMenu}>About</NavLink></li>
          <li><NavLink to="/services" className="nav-link" onClick={closeMobileMenu}>Services</NavLink></li>
          <li><NavLink to="/industries" className="nav-link" onClick={closeMobileMenu}>Industries</NavLink></li>
          <li><NavLink to="/careers" className="nav-link" onClick={closeMobileMenu}>Careers</NavLink></li>
          <li><NavLink to="/contact" className="nav-link" onClick={closeMobileMenu}>Contact</NavLink></li>
          <li>
            <Link to="/contact" className="btn btn-primary" onClick={closeMobileMenu}>
              Let's Talk
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
