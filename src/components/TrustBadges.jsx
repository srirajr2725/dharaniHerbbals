import { useState, useEffect, useRef } from 'react';
import { Leaf, ShieldCheck, Award } from 'lucide-react';
import './TrustBadges.css';

// Custom hook for animated counting
function useCountUp(endValue, duration, startCounting) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;
    
    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth deceleration
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeOutQuart * endValue));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };
    
    requestAnimationFrame(animate);
  }, [endValue, duration, startCounting]);

  return count;
}

export default function TrustBadges() {
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef(null);

  // Intersection Observer to trigger animations when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only run once
        }
      },
      { threshold: 0.3 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animated values
  const yearsCount = useCountUp(15, 2000, isVisible);
  const customersCount = useCountUp(6, 2500, isVisible);
  const productsCount = useCountUp(350, 2000, isVisible);
  const purityCount = useCountUp(100, 2000, isVisible);

  return (
    <div className="trust-container" ref={bannerRef}>
      
      {/* Top Green Stats Banner with Shimmer Effect */}
      <div className={`trust-stats-banner ${isVisible ? 'animate-reveal' : 'opacity-0'}`}>
        <div className="banner-shimmer"></div>
        <div className="trust-stat-item">
          <h3 className="trust-stat-number">{yearsCount}+</h3>
          <p className="trust-stat-label">Legacy of Trust</p>
        </div>
        <div className="trust-stat-item">
          <h3 className="trust-stat-number">{customersCount}L+</h3>
          <p className="trust-stat-label">Customers Served</p>
        </div>
        <div className="trust-stat-item">
          <h3 className="trust-stat-number">{productsCount}+</h3>
          <p className="trust-stat-label">Products Crafted</p>
        </div>
        <div className="trust-stat-item">
          <h3 className="trust-stat-number">{purityCount}%</h3>
          <p className="trust-stat-label">Chemical-Free</p>
        </div>
      </div>

      {/* Feature Cards Row */}
      <div className="trust-features-grid">
        
        {/* Card 1: Natural Ingredients */}
        <div className={`trust-feature-card card-green ${isVisible ? 'animate-slide-up-1' : 'opacity-0'}`}>
          <div className="trust-icon-box green">
            <Leaf size={24} color="#22c55e" className="feature-icon" />
          </div>
          <div className="trust-feature-content">
            <h4 className="trust-feature-title">100% Natural Ingredients</h4>
            <p className="trust-feature-desc">
              We source only the finest natural herbs and ingredients, ensuring purity and potency in every product.
            </p>
          </div>
        </div>

        {/* Card 2: Quality Assurance */}
        <div className={`trust-feature-card card-blue ${isVisible ? 'animate-slide-up-2' : 'opacity-0'}`}>
          <div className="trust-icon-box blue">
            <ShieldCheck size={24} color="#3b82f6" className="feature-icon" />
          </div>
          <div className="trust-feature-content">
            <h4 className="trust-feature-title">Quality Assurance</h4>
            <p className="trust-feature-desc">
              Every product undergoes rigorous testing and quality checks to meet the highest safety standards.
            </p>
          </div>
        </div>

        {/* Card 3: Traditional Wisdom */}
        <div className={`trust-feature-card card-purple ${isVisible ? 'animate-slide-up-3' : 'opacity-0'}`}>
          <div className="trust-icon-box purple">
            <Award size={24} color="#a855f7" className="feature-icon" />
          </div>
          <div className="trust-feature-content">
            <h4 className="trust-feature-title">Traditional Wisdom</h4>
            <p className="trust-feature-desc">
              Our formulations are based on ancient Ayurvedic principles, refined through generations of knowledge.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
