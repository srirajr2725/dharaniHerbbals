import { Sparkles, ArrowRight } from 'lucide-react';
import './OurJourney.css';

// Using a placeholder asset. Replace with the actual team photo later.
import teamPhoto from '../assets/grp.png'; 

export default function OurJourney() {
  return (
    <div className="journey-container">
      
      {/* Header Area */}
      <div className="journey-header">
        <div className="journey-title-wrapper">
          <div className="journey-icon-box">
            <Sparkles size={28} color="white" fill="white" />
          </div>
          <h2 className="journey-title">Our Journey</h2>
        </div>
        <div className="journey-divider"></div>
      </div>

      {/* Split Content Area */}
      <div className="journey-content-wrapper">
        
        {/* Left Side: Story Text */}
        <div className="journey-text-content">
          <p className="journey-tagline">
            It didn't start with a product. It started with a question.
          </p>
          
          <h3 className="journey-heading">What if healing could be simple again?</h3>
          
          <div className="journey-paragraphs">
            <p>
              Our journey began in 2004 with dedicated research into Siddha and Ayurveda, exploring the depth of natural healing and time-tested traditions.
            </p>
            <p>
              In a world overwhelmed by artificial solutions and quick fixes, we chose a different path — one that returns to purity, to tradition, and to the quiet power of nature.
            </p>
            <p>
              Every product we create reflects this commitment, blending ancient wisdom with modern care to deliver safe, effective, and truly natural healing.
            </p>
          </div>

          <p className="journey-closing">
            Back to roots. Forward to better living.
          </p>

          <div className="journey-actions">
            <button className="btn-explore-solid">
              Explore Our Products <ArrowRight size={18} />
            </button>
            <button className="btn-get-touch-outline">
              Get In Touch
            </button>
          </div>
        </div>

        {/* Right Side: Team Photo */}
        <div className="journey-image-content">
          <div className="journey-image-glow-wrapper">
            <img src={teamPhoto} alt="Dharani Herbbals Team" className="journey-team-photo" />
          </div>
        </div>

      </div>
    </div>
  );
}
