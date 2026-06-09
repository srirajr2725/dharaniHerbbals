import { useEffect } from 'react';
import { Leaf, Shield, Sparkles, Target, Eye, Heart, Award, Users, CheckCircle } from 'lucide-react';
import OurJourney from '../components/OurJourney';
import Footer from '../components/Footer';
import './About.css';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-bg"></div>
        <div className="about-hero-content">
          <div className="about-badge">
            <Leaf size={16} /> 100% Natural Wellness
          </div>
          <h1 className="about-title">About Dharani Herbals</h1>
          <p className="about-subtitle">
            Your trusted partner in natural wellness and herbal healthcare solutions
          </p>
        </div>
      </div>

      {/* Mission & History Cards Section */}
      <div className="about-cards-section">
        <div className="about-cards-grid">
          
          <div className="about-info-card">
            <div className="info-icon-circle green">
              <Target size={30} color="white" strokeWidth={2.5} />
            </div>
            <h2>Our Mission</h2>
            <p>
              To promote natural healing for all through herbal medicines that are safe,
              effective, and free from side effects — blending ancient wisdom with
              modern care to deliver truly natural wellness.
            </p>
          </div>

          <div className="about-info-card">
            <div className="info-icon-circle purple">
              <Eye size={30} color="white" strokeWidth={2.5} />
            </div>
            <h2>Our History</h2>
            <p>
              Founded in 2004 through Siddha and Ayurveda research, formally
              incorporated in 2007. Over 15+ years we have grown to serve 6 lakh+
              customers across India with 350+ herbal products, becoming a trusted
              name in natural wellness.
            </p>
          </div>

        </div>
      </div>

      {/* Core Values Section */}
      <div className="core-values-section">
        <div className="core-values-header">
          <h2>Our Core Values</h2>
          <p>These values guide everything we do and shape our commitment to natural wellness</p>
        </div>
        
        <div className="core-values-grid">
          
          <div className="value-card">
            <div className="value-icon-circle red-light">
              <Heart size={24} color="#ef4444" strokeWidth={2} />
            </div>
            <h3>Quality First</h3>
            <p>We prioritize quality in every product we create, ensuring the highest standards of herbal wellness.</p>
          </div>

          <div className="value-card">
            <div className="value-icon-circle green-light">
              <Shield size={24} color="#22c55e" strokeWidth={2} />
            </div>
            <h3>Natural & Safe</h3>
            <p>All our products are made from natural ingredients, tested for safety and efficacy.</p>
          </div>

          <div className="value-card">
            <div className="value-icon-circle blue-light">
              <Award size={24} color="#3b82f6" strokeWidth={2} />
            </div>
            <h3>Certified Excellence</h3>
            <p>Our products meet international quality standards and certifications.</p>
          </div>

          <div className="value-card">
            <div className="value-icon-circle purple-light">
              <Users size={24} color="#a855f7" strokeWidth={2} />
            </div>
            <h3>Customer Focused</h3>
            <p>We listen to our customers and continuously improve our products based on feedback.</p>
          </div>

        </div>
      </div>

      {/* Reusing the beautiful Our Journey component */}
      <div className="about-journey-wrapper">
        <OurJourney />
      </div>

      {/* Stats Bar */}
      <div className="about-stats-bar">
        <div className="stat-item">
          <div className="stat-number">15+</div>
          <div className="stat-label">Legacy of Trust</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">6L+</div>
          <div className="stat-label">Customers Served</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">350+</div>
          <div className="stat-label">Products Crafted</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">24+</div>
          <div className="stat-label">Team Advisors</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">7,500+</div>
          <div className="stat-label">Resellers</div>
        </div>
      </div>

      {/* What Makes Us Different */}
      <div className="different-section">
        <div className="different-header">
          <h2>What Makes Us Different</h2>
          <p>Our commitment to excellence sets us apart in the herbal wellness industry</p>
        </div>

        <div className="different-grid">
          
          <div className="different-card">
            <div className="different-icon-wrapper green-light">
              <Leaf size={22} color="#22c55e" strokeWidth={2} />
            </div>
            <div className="different-text">
              <h3>100% Natural Ingredients</h3>
              <p>We source only the finest natural herbs and ingredients, ensuring purity and potency in every product.</p>
            </div>
          </div>

          <div className="different-card">
            <div className="different-icon-wrapper blue-light">
              <Shield size={22} color="#3b82f6" strokeWidth={2} />
            </div>
            <div className="different-text">
              <h3>Quality Assurance</h3>
              <p>Every product undergoes rigorous testing and quality checks to meet the highest safety standards.</p>
            </div>
          </div>

          <div className="different-card">
            <div className="different-icon-wrapper purple-light">
              <Award size={22} color="#a855f7" strokeWidth={2} />
            </div>
            <div className="different-text">
              <h3>Traditional Wisdom</h3>
              <p>Our formulations are based on ancient Ayurvedic principles, refined through generations of knowledge.</p>
            </div>
          </div>

        </div>
      </div>

      {/* Our Commitment to You */}
      <div className="commitment-section">
        <div className="commitment-container">
          <h2 className="commitment-title">Our Commitment to You</h2>
          
          <div className="commitment-grid">
            
            <div className="commitment-item">
              <CheckCircle className="commitment-icon" size={24} color="#22c55e" strokeWidth={2} />
              <div className="commitment-text">
                <h3>Authentic Products</h3>
                <p>Every product is crafted with authentic ingredients and traditional methods.</p>
              </div>
            </div>

            <div className="commitment-item">
              <CheckCircle className="commitment-icon" size={24} color="#22c55e" strokeWidth={2} />
              <div className="commitment-text">
                <h3>Expert Guidance</h3>
                <p>Our team of experts is always available to guide you on your wellness journey.</p>
              </div>
            </div>

            <div className="commitment-item">
              <CheckCircle className="commitment-icon" size={24} color="#22c55e" strokeWidth={2} />
              <div className="commitment-text">
                <h3>Customer Satisfaction</h3>
                <p>Your health and satisfaction are our top priorities.</p>
              </div>
            </div>

            <div className="commitment-item">
              <CheckCircle className="commitment-icon" size={24} color="#22c55e" strokeWidth={2} />
              <div className="commitment-text">
                <h3>Continuous Innovation</h3>
                <p>We continuously research and develop new products to meet evolving health needs.</p>
              </div>
            </div>

            <div className="commitment-item">
              <CheckCircle className="commitment-icon" size={24} color="#22c55e" strokeWidth={2} />
              <div className="commitment-text">
                <h3>Sustainable Practices</h3>
                <p>We are committed to environmentally responsible sourcing and production.</p>
              </div>
            </div>

            <div className="commitment-item">
              <CheckCircle className="commitment-icon" size={24} color="#22c55e" strokeWidth={2} />
              <div className="commitment-text">
                <h3>Transparent Communication</h3>
                <p>We believe in honest, transparent communication about our products and processes.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Join Our Wellness Journey CTA */}
      <div className="about-cta-section">
        <div className="about-cta-box">
          <h2>Join Our Wellness Journey</h2>
          <p>
            Experience the power of natural wellness with Dharani Herbals. Let us be your 
            partner in achieving optimal health through the wisdom of nature and the science 
            of modern herbal medicine.
          </p>
          <div className="about-cta-buttons">
            <button className="about-cta-btn-solid">Explore Our Products</button>
            <button className="about-cta-btn-outline">Get In Touch</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
