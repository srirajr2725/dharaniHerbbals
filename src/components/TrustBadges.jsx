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
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * endValue));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(endValue);
    };
    
    requestAnimationFrame(animate);
  }, [endValue, duration, startCounting]);

  return count;
}

export default function TrustBadges() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const yearsCount = useCountUp(15, 2000, isVisible);
  const customersCount = useCountUp(6, 2500, isVisible);
  const productsCount = useCountUp(350, 2000, isVisible);
  const purityCount = useCountUp(100, 2000, isVisible);

  return (
    <div className="prof-trust-container" ref={containerRef}>
      
      {/* Top Stats Marquee */}
      <div className={`prof-stats-marquee-container ${isVisible ? 'reveal-active' : ''}`}>
        <div className="prof-stats-marquee-track">
          
          {/* Group 1 */}
          <div className="prof-stat-item">
            <h3 className="prof-stat-number">{yearsCount}+</h3>
            <p className="prof-stat-label">Legacy of Trust</p>
          </div>
          <div className="prof-stat-divider"></div>
          <div className="prof-stat-item">
            <h3 className="prof-stat-number">{customersCount}L+</h3>
            <p className="prof-stat-label">Customers Served</p>
          </div>
          <div className="prof-stat-divider"></div>
          <div className="prof-stat-item">
            <h3 className="prof-stat-number">{productsCount}+</h3>
            <p className="prof-stat-label">Products Crafted</p>
          </div>
          <div className="prof-stat-divider"></div>
          <div className="prof-stat-item">
            <h3 className="prof-stat-number">{purityCount}%</h3>
            <p className="prof-stat-label">Chemical-Free</p>
          </div>
          <div className="prof-stat-divider"></div>

          {/* Group 2 (Duplicate for seamless loop) */}
          <div className="prof-stat-item">
            <h3 className="prof-stat-number">{yearsCount}+</h3>
            <p className="prof-stat-label">Legacy of Trust</p>
          </div>
          <div className="prof-stat-divider"></div>
          <div className="prof-stat-item">
            <h3 className="prof-stat-number">{customersCount}L+</h3>
            <p className="prof-stat-label">Customers Served</p>
          </div>
          <div className="prof-stat-divider"></div>
          <div className="prof-stat-item">
            <h3 className="prof-stat-number">{productsCount}+</h3>
            <p className="prof-stat-label">Products Crafted</p>
          </div>
          <div className="prof-stat-divider"></div>
          <div className="prof-stat-item">
            <h3 className="prof-stat-number">{purityCount}%</h3>
            <p className="prof-stat-label">Chemical-Free</p>
          </div>

        </div>
      </div>

      {/* Feature Cards Row */}
      <div className="prof-features-grid">
        
        {/* Card 1 */}
        <div className={`prof-feature-card ${isVisible ? 'reveal-active slide-delay-1' : ''}`}>
          <div className="prof-icon-wrapper">
            <Leaf size={36} strokeWidth={1.5} color="#166534" />
          </div>
          <div className="prof-feature-content">
            <h4 className="prof-feature-title">100% Natural Ingredients</h4>
            <p className="prof-feature-desc">
              We source only the finest natural herbs and ingredients, ensuring uncompromising purity and potency in every formulation.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className={`prof-feature-card ${isVisible ? 'reveal-active slide-delay-2' : ''}`}>
          <div className="prof-icon-wrapper">
            <ShieldCheck size={36} strokeWidth={1.5} color="#166534" />
          </div>
          <div className="prof-feature-content">
            <h4 className="prof-feature-title">Quality Assurance</h4>
            <p className="prof-feature-desc">
              Every product undergoes rigorous clinical testing and quality checks to meet the highest international safety standards.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className={`prof-feature-card ${isVisible ? 'reveal-active slide-delay-3' : ''}`}>
          <div className="prof-icon-wrapper">
            <Award size={36} strokeWidth={1.5} color="#166534" />
          </div>
          <div className="prof-feature-content">
            <h4 className="prof-feature-title">Traditional Wisdom</h4>
            <p className="prof-feature-desc">
              Our bespoke formulations are firmly rooted in ancient Ayurvedic principles, meticulously refined through generations of knowledge.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
