import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import './Footer.css';
import logo from '../assets/hero.png'; // Need the actual logo asset if possible, or just text

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      
      {/* WhatsApp Newsletter Banner */}
      <div className="whatsapp-banner">
        <div className="whatsapp-banner-content">
          <h2>🌿 STAY CONNECTED WITH NATURAL WELLNESS</h2>
          <p>Receive Herbal Tips, Product Updates, and Exclusive Offers Directly on WhatsApp</p>
          
          <div className="whatsapp-form-wrapper">
            <div className="whatsapp-input-group">
              <input type="text" placeholder="Enter your WhatsApp number" className="whatsapp-input" />
              <button className="whatsapp-btn">
                <MessageCircle size={18} /> JOIN NOW ON WHATSAPP
              </button>
            </div>
            
            <label className="whatsapp-checkbox">
              <input type="checkbox" defaultChecked />
              <span className="checkmark"></span>
              I Agree to Receive WhatsApp Updates
            </label>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-top">
        <div className="footer-grid">
          
          {/* Column 1: Company Info */}
          <div className="footer-col footer-col-info">
            <div className="footer-logo-container">
              {/* Replace src with actual logo if needed */}
              <div className="footer-logo-icon">
                <LeafIcon />
              </div>
              <h2 className="footer-logo-text">
                Dharani<br/>Herbbals
              </h2>
            </div>

            <ul className="footer-contact-list">
              <li>
                <Phone size={18} className="contact-icon" />
                <span>+91 97881 22001</span>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <div className="contact-emails">
                  <a href="mailto:info@dharaniherbbals.in">info@dharaniherbbals.in</a>
                  <a href="mailto:salesdharani@gmail.com">salesdharani@gmail.com</a>
                </div>
              </li>
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>
                  7/470-1, Chemparuthi Street,<br/>
                  West Nehru Nagar, Punjai Puliampatti,<br/>
                  Sathyamangalam (Taluk),<br/>
                  Erode - 638 459,<br/>
                  Tamil Nadu, India.
                </span>
              </li>
              <li>
                <Clock size={18} className="contact-icon" />
                <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
              </li>
            </ul>

            <div className="footer-socials">
              <a href="#" className="social-icon-btn"><FbIcon /></a>
              <a href="#" className="social-icon-btn"><InstaIcon /></a>
              <a href="#" className="social-icon-btn"><YtIcon /></a>
              <a href="#" className="social-icon-btn"><TwIcon /></a>
            </div>
          </div>

          {/* Column 2: Shop */}
          <div className="footer-col">
            <h3 className="footer-col-title">Shop</h3>
            <ul className="footer-links">
              <li><a href="#">Browse All Products</a></li>
              <li><a href="#">Handpicked Deals for You</a></li>
              <li><a href="#">Trending Products</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Our Brands */}
          <div className="footer-col">
            <h3 className="footer-col-title">Our Brands</h3>
            <ul className="footer-links uppercase-links">
              <li><a href="#">MAKIL</a></li>
              <li><a href="#">RAMCARE</a></li>
              <li><a href="#">DIVYAM</a></li>
              <li><a href="#">VANA ARASI</a></li>
              <li><a href="#">VEDAN AMUTHU</a></li>
              <li><a href="#">VEDAN</a></li>
            </ul>
          </div>

          {/* Column 4: Support & Policies */}
          <div className="footer-col">
            <h3 className="footer-col-title">Support</h3>
            <ul className="footer-links">
              <li><a href="#">My Account</a></li>
              <li><a href="#">Order Tracking</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>

            <h3 className="footer-col-title mt-6">Policies</h3>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Shipping Policy</a></li>
            </ul>

            <button className="play-store-btn mt-6">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" />
            </button>
          </div>

        </div>
      </div>

      {/* Sub Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>&copy; 2026 Dharani Herbbals. All rights reserved.</p>
          <p>Dharani Herbbals managed by ARUMUGAM POONKODI</p>
          <p>Developed by <span className="highlight-text">ThinkAside</span></p>
        </div>
      </div>

    </footer>
  );
}

// Simple internal SVG for the leaf logo if the image isn't available
function LeafIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
  );
}

function FbIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );
}

function InstaIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function YtIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
    </svg>
  );
}

function TwIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
    </svg>
  );
}
