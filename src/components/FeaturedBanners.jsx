import './FeaturedBanners.css';

// Using existing assets for the 3 posters
import banner1 from '../assets/ad7.png';
import banner2 from '../assets/ad8.png';
import banner3 from '../assets/ad9.png';

const banners = [
  { id: 1, image: banner1, alt: 'Goat Milk Soap' },
  { id: 2, image: banner2, alt: 'Multani Mitti' },
  { id: 3, image: banner3, alt: 'Herbal Tea' },
];

export default function FeaturedBanners() {
  return (
    <div className="fb-container">
      <div className="fb-grid">
        {banners.map((banner) => (
          <div key={banner.id} className="fb-card">
            <img src={banner.image} alt={banner.alt} className="fb-img" />
            <div className="fb-overlay">
              <span className="fb-explore-btn">Explore Now</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
