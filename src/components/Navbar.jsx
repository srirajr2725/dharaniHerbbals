import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Leaf, ChevronDown, Search, User, ShoppingBag, Zap, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Navbar.css';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleCart, cartCount } = useCart();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar-clean">
      
      {/* Mobile Menu Toggle Button */}
      <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle Menu">
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Left: Logo */}
      <div className="nav-brand-container">
        <Link to="/" className="nav-brand" onClick={closeMobileMenu}>
          <img src="/logo.png" alt="Dharani Herbbals" className="nav-logo-img" />
        </Link>
      </div>

      {/* Center: Navigation Links */}
      <div className="nav-links-center">
        <NavLink to="/" className="nav-link" end>Home</NavLink>
        <NavLink to="/shop" className="nav-link">Hair</NavLink>
        <NavLink to="/shop" className="nav-link">Skin</NavLink>
        <NavLink to="/shop" className="nav-link">Baby</NavLink>
        <NavLink to="/shop" className="nav-link">Health & Wellness</NavLink>
        <NavLink to="/shop" className="nav-link">Shop All</NavLink>
        <NavLink to="/about" className="nav-link">About Us</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
      </div>

      {/* Right: Action Icons */}
      <div className="nav-icons-right">
        <button className="nav-icon-btn" aria-label="Search">
          <Search size={22} strokeWidth={1.5} />
        </button>
        
        {/* User icon with a little spark/zap indicating rewards/profile */}
        <Link to="/login" className="nav-icon-btn" style={{ position: 'relative' }} aria-label="Account" onClick={closeMobileMenu}>
          <User size={22} strokeWidth={1.5} />
          <Zap 
            size={10} 
            color="#f59e0b" 
            fill="#f59e0b" 
            style={{ position: 'absolute', bottom: 2, right: 0 }} 
          />
        </Link>

        <button className="nav-icon-btn" aria-label="Shopping Bag" onClick={toggleCart} style={{ position: 'relative' }}>
          <ShoppingBag size={22} strokeWidth={1.5} />
          {cartCount > 0 && (
            <span className="cart-badge-count">{cartCount}</span>
          )}
        </button>
      </div>
      
      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-links">
          <NavLink to="/" className="mobile-nav-link" onClick={closeMobileMenu} end>Home</NavLink>
          <NavLink to="/shop" className="mobile-nav-link" onClick={closeMobileMenu}>Hair</NavLink>
          <NavLink to="/shop" className="mobile-nav-link" onClick={closeMobileMenu}>Skin</NavLink>
          <NavLink to="/shop" className="mobile-nav-link" onClick={closeMobileMenu}>Baby</NavLink>
          <NavLink to="/shop" className="mobile-nav-link" onClick={closeMobileMenu}>Health & Wellness</NavLink>
          <NavLink to="/shop" className="mobile-nav-link" onClick={closeMobileMenu}>Shop All</NavLink>
          <NavLink to="/about" className="mobile-nav-link" onClick={closeMobileMenu}>About Us</NavLink>
          <NavLink to="/contact" className="mobile-nav-link" onClick={closeMobileMenu}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}
