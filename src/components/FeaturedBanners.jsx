import { useNavigate } from 'react-router-dom';
import './FeaturedBanners.css';

import banner1 from '../assets/ad1.png';
import banner2 from '../assets/ad2.png';
import banner3 from '../assets/ad3.png';
import banner4 from '../assets/ad4.png';
import banner5 from '../assets/ad5.png';
import banner6 from '../assets/ad6.png';
import banner7 from '../assets/ad7.png';
import banner8 from '../assets/ad8.png';
import banner9 from '../assets/ad9.png';

const banners = [
  { id: 1, image: banner1, alt: 'Banner 1' },
  { id: 2, image: banner2, alt: 'Banner 2' },
  { id: 3, image: banner3, alt: 'Banner 3' },
  { id: 4, image: banner4, alt: 'Banner 4' },
  { id: 5, image: banner5, alt: 'Banner 5' },
  { id: 6, image: banner6, alt: 'Banner 6' },
  { id: 7, image: banner7, alt: 'Banner 7' },
  { id: 8, image: banner8, alt: 'Banner 8' },
  { id: 9, image: banner9, alt: 'Banner 9' }
];

export default function FeaturedBanners() {
  const navigate = useNavigate();
  return (
    <div className="fb-container">
      <div className="fb-marquee-wrapper">
        <div className="fb-marquee-track">
          {[...banners, ...banners].map((banner, index) => (
            <div key={`${banner.id}-${index}`} className="fb-card" onClick={() => navigate('/shop')}>
              <img src={banner.image} alt={banner.alt} className="fb-img" />
              <div className="fb-overlay">
                <span className="fb-explore-btn">Explore Now</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
