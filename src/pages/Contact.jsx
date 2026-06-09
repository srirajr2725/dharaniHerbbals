import { useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Headphones as HeadphonesIcon, MessageCircle, ShieldCheck } from 'lucide-react';
import Footer from '../components/Footer';
import './Contact.css';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="contact-hero-content">
          <h1>Get In Touch</h1>
          <p>
            Have questions about our herbal products? We're here to help you on your wellness journey.
          </p>
        </div>
      </div>

      {/* Info Cards overlapping the hero */}
      <div className="contact-info-container">
        <div className="contact-info-grid">
          
          <div className="contact-card">
            <div className="contact-icon-circle green">
              <Phone size={24} color="#16a34a" />
            </div>
            <h3>Phone</h3>
            <p>+91 97881 22001</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon-circle blue">
              <Mail size={24} color="#2563eb" />
            </div>
            <h3>Email</h3>
            <p>info@dharaniherbbals.in<br/>salesdharani@gmail.com</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon-circle red">
              <MapPin size={24} color="#dc2626" />
            </div>
            <h3>Address</h3>
            <p>
              7/470-1, Chemparuthi Street,<br/>
              West Nehru Nagar, Punjai<br/>
              Puliampatti,<br/>
              Sathyamangalam(TALUK), Erode -<br/>
              638 459, TN, India
            </p>
          </div>

          <div className="contact-card">
            <div className="contact-icon-circle purple">
              <Clock size={24} color="#9333ea" />
            </div>
            <h3>Business Hours</h3>
            <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
          </div>

        </div>
      </div>

      {/* Lower Section: Form + Sidebar */}
      <div className="contact-lower-section">
        <div className="contact-layout-grid">
          
          {/* Left Column: Form */}
          <div className="contact-form-container">
            <div className="contact-form-header">
              <h2><Send size={24} className="header-icon" /> Send us a Message</h2>
            </div>
            
            <div className="contact-form-body">
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" placeholder="Full Name" required />
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input type="tel" placeholder="Phone Number" required />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" placeholder="Email Address" required />
                </div>
                
                <div className="form-group">
                  <label>Subject *</label>
                  <div className="select-wrapper">
                    <select required defaultValue="">
                      <option value="" disabled>Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="order">Order Status</option>
                      <option value="product">Product Information</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Message *</label>
                  <textarea placeholder="Tell us how we can help you..." rows="5" required></textarea>
                </div>
                
                <button type="submit" className="btn-submit-contact">
                  <Send size={18} /> Send us a Message
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <div className="contact-sidebar">
            
            {/* Why Choose Us */}
            <div className="sidebar-card">
              <h3 className="sidebar-title">Why Choose Us?</h3>
              <div className="feature-list">
                <div className="feature-item">
                  <div className="feature-icon"><HeadphonesIcon size={20} /></div>
                  <div className="feature-text">
                    <h4>24/7 Support</h4>
                    <p>Round-the-clock customer support for all your queries</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon"><MessageCircle size={20} /></div>
                  <div className="feature-text">
                    <h4>Quick Response</h4>
                    <p>We respond to all inquiries within 2-4 hours</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon"><ShieldCheck size={20} /></div>
                  <div className="feature-text">
                    <h4>Expert Guidance</h4>
                    <p>Get advice from our herbal wellness experts</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visit Our Store */}
            <div className="sidebar-card">
              <h3 className="sidebar-title">Visit Our Store</h3>
              <div className="map-container">
                <iframe 
                  src="https://maps.google.com/maps?q=11.3580361,77.166633&t=&z=17&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="250" 
                  style={{border:0, borderRadius: '12px'}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>

            {/* Follow Us */}
            <div className="sidebar-card">
              <h3 className="sidebar-title">Follow Us</h3>
              <p className="follow-text">Stay connected with us on social media for the latest updates, health tips, and product launches.</p>
              <div className="social-icons-row">
                <a href="#" className="social-circle"><FbIcon /></a>
                <a href="#" className="social-circle"><InstaIcon /></a>
                <a href="#" className="social-circle"><YtIcon /></a>
                <a href="#" className="social-circle"><TwIcon /></a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function FbIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );
}

function InstaIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function YtIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
    </svg>
  );
}

function TwIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
    </svg>
  );
}
