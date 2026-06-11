import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Search, User, ShoppingBag, Zap, X, Home, Info, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Navbar.css';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { toggleCart, cartCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className={`navbar-ultra ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Mobile Menu Toggle Button */}
        <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle Menu">
          <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {/* Left: Logo */}
        <div className="nav-brand-container">
          <Link to="/" className="nav-brand">
            <img src="/logo.png" alt="Dharani Herbbals" className="nav-logo-img" />
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <div className="nav-links-center">
          <NavLink to="/" className="nav-link" end>
            <span className="nav-link-text">Home</span>
          </NavLink>
          <NavLink to="/shop" className="nav-link">
            <span className="nav-link-text">Shop All</span>
          </NavLink>
          <NavLink to="/about" className="nav-link">
            <span className="nav-link-text">About Us</span>
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            <span className="nav-link-text">Contact</span>
          </NavLink>
        </div>

        {/* Right: Action Icons */}
        <div className="nav-icons-right">
          <div className="action-capsule">
            <button className="capsule-btn icon-only" aria-label="Search">
              <Search size={20} strokeWidth={2} />
            </button>
            <Link to="/login" className="capsule-btn icon-only user-btn" aria-label="Account">
              <User size={20} strokeWidth={2} />
            </Link>
            <button className="capsule-btn cart-btn" aria-label="Shopping Bag" onClick={toggleCart}>
              <div className="cart-icon-wrapper">
                <ShoppingBag size={20} strokeWidth={2} />
                {cartCount > 0 && <span className="cart-pulse-badge"></span>}
              </div>
              <span className="cart-text">Cart {cartCount > 0 ? `(${cartCount})` : ''}</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}></div>
      
      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <img src="/logo.png" alt="Dharani Herbbals" className="mobile-logo-img" />
          <button className="close-drawer-btn" onClick={toggleMobileMenu}>
            <X size={24} />
          </button>
        </div>
        <div className="mobile-menu-links">
          <NavLink to="/" className="mobile-nav-link" onClick={toggleMobileMenu} end>
            <div className="nav-icon-box"><Home size={22} /></div>
            <span>Home</span>
          </NavLink>
          <NavLink to="/shop" className="mobile-nav-link" onClick={toggleMobileMenu}>
            <div className="nav-icon-box"><ShoppingBag size={22} /></div>
            <span>Shop All</span>
          </NavLink>
          <NavLink to="/about" className="mobile-nav-link" onClick={toggleMobileMenu}>
            <div className="nav-icon-box"><Info size={22} /></div>
            <span>About Us</span>
          </NavLink>
          <NavLink to="/contact" className="mobile-nav-link" onClick={toggleMobileMenu}>
            <div className="nav-icon-box"><Phone size={22} /></div>
            <span>Contact</span>
          </NavLink>
        </div>
        
        <div className="mobile-drawer-footer">
          <div className="mobile-auth-buttons">
            <Link to="/login" className="btn-mobile-login" onClick={toggleMobileMenu}>Log In</Link>
          </div>
          <p className="mobile-copyright">© {new Date().getFullYear()} Dharani Herbbals</p>
        </div>
      </div>
    </nav>
  );
}
