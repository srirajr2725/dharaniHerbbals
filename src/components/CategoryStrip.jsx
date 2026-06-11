import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import './CategoryStrip.css';

// Product images and videos for categories
import hairVideo from '../assets/Hair.mp4';
import malt3dVideo from '../assets/malt3d.mp4';
import mettivdVideo from '../assets/mettivd.mp4';
import payirVideo from '../assets/payirvd.mp4';
import milkVideo from '../assets/milkvd.mp4';
import sirapVideo from '../assets/sirapvd.mp4';
import kasthuriVideo from '../assets/kasthurivd.mp4';
import semparuthiVideo from '../assets/semparuthi.mp4';
import model3d from '../assets/3d.glb?url';
import p2 from '../assets/2.png';
import p3 from '../assets/3.png';
import p4 from '../assets/4.png';
import p5 from '../assets/5.png';
import p6 from '../assets/6.png';
import p7 from '../assets/7.png';

const categories = [
  { id: 1, name: 'Hair', video: semparuthiVideo }, /* Replaced 3D model with semparuthi video */
  { id: 2, name: 'Malt', video: malt3dVideo }, /* Added malt3d video */
  { id: 3, name: 'Body', video: payirVideo }, /* Replaced metti 3D model with payir video */
  { id: 4, name: 'Baby', video: kasthuriVideo }, /* Replaced nalangu video with kasthuri video */
  { id: 5, name: 'Health & wellness', video: sirapVideo }, /* Replaced image with sirap video */
  { id: 6, name: 'Food', video: mettivdVideo }, /* Replaced image with mettivd video */
  { id: 7, name: 'Face', video: milkVideo }, /* Replaced image with milk video */
];

export default function CategoryStrip() {
  const location = useLocation();

  // ONLY show on Home Page and Shop Page
  if (location.pathname !== '/' && location.pathname !== '/shop') {
    return null;
  }

  return (
    <div className="category-strip-container">
      <div className="category-strip-scroll">
        {categories.map((category, index) => (
          <Link 
            key={category.id} 
            to="/shop" 
            className="category-item cat-animate-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="category-blob-wrapper">
              {category.model3d ? (
                <model-viewer
                  src={category.model3d}
                  auto-rotate
                  rotation-per-second="40deg"
                  environment-image="neutral"
                  interaction-prompt="none"
                  style={{ width: '90%', height: '90%', zIndex: 2, pointerEvents: 'none' }}
                ></model-viewer>
              ) : category.video ? (
                <video 
                  autoPlay 
                  loop
                  muted 
                  playsInline
                  preload="metadata"
                  className="category-img"
                  style={{ willChange: 'transform' }}
                >
                  <source src={category.video} type="video/mp4" />
                </video>
              ) : (
                <img src={category.image} alt={category.name} className="category-img" />
              )}
            </div>
            <div className="category-btn">
              <span>{category.name}</span>
              <ChevronRight size={16} strokeWidth={2.5} className="cat-btn-icon" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
