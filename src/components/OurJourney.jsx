import './OurJourney.css';
import teamPhoto from '../assets/grp.png';

export default function OurJourney() {
  return (
    <div className="journey-editorial-container">
      <div className="journey-editorial-content">
        
        <p className="journey-ed-sub reveal" style={{animationDelay: '0.1s'}}>
          Our Journey
        </p>

        <p className="journey-ed-intro reveal" style={{animationDelay: '0.2s'}}>
          It didn't start with a product.<br/>It started with a question.
        </p>

        <h2 className="journey-ed-quote reveal" style={{animationDelay: '0.3s'}}>
          "What if healing could be simple again?"
        </h2>

        <div className="journey-ed-narrative">
          <p className="reveal" style={{animationDelay: '0.4s'}}>
            Our journey began in 2004 with dedicated research into Siddha and Ayurveda, exploring the depth of natural healing and time-tested traditions.
          </p>
          
          <p className="reveal" style={{animationDelay: '0.5s'}}>
            In a world overwhelmed by artificial solutions and quick fixes, we chose a different path — one that returns to purity, to tradition, and to the quiet power of nature.
          </p>
          
          <p className="reveal" style={{animationDelay: '0.6s'}}>
            Every product we create reflects this commitment, blending ancient wisdom with modern care to deliver safe, effective, and truly natural healing.
          </p>
        </div>

        <div className="journey-ed-image-wrapper reveal" style={{animationDelay: '0.7s'}}>
          <img src={teamPhoto} alt="Our Journey" className="journey-ed-image" />
        </div>

        <p className="journey-ed-closing reveal" style={{animationDelay: '0.8s'}}>
          Back to roots. Forward to better living.
        </p>

      </div>
    </div>
  );
}
