import { ExternalLink, Star } from 'lucide-react';
import './GoogleReviews.css';

const reviewsData = [
  {
    id: 1,
    name: 'Rajesh K',
    initial: 'R',
    bgColor: '#5a7bf6',
    time: '1 month ago',
    text: 'Great quality products. Fast delivery and good customer service.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Meera R',
    initial: 'M',
    bgColor: '#8a5af6',
    time: '3 weeks ago',
    text: 'Good herbal medicines. Helped with my health issues. Will order again.',
    rating: 4.5,
  },
  {
    id: 3,
    name: 'Suresh M',
    initial: 'S',
    bgColor: '#5a7bf6',
    time: '2 months ago',
    text: 'Authentic Ayurvedic products. Very satisfied with the results.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Lakshmi V',
    initial: 'L',
    bgColor: '#8a5af6',
    time: '1 week ago',
    text: 'Pure and natural products. Excellent for wellness. Thank you!',
    rating: 5,
  },
  {
    id: 5,
    name: 'Amit S',
    initial: 'A',
    bgColor: '#5a7bf6',
    time: '1 month ago',
    text: 'Amazing supplements and great packaging. Highly recommended for daily use.',
    rating: 5,
  },
];

export default function GoogleReviews() {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          size={16}
          fill={i <= rating ? '#fbbf24' : 'transparent'}
          color="#fbbf24"
        />
      );
    }
    return stars;
  };

  return (
    <div className="gr-container">
      {/* Ultra UI Background Orbs */}
      <div className="gr-orb gr-orb-1"></div>
      <div className="gr-orb gr-orb-2"></div>
      
      <h2 className="section-title">Customer Favorites & Experiences</h2>
      <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '40px' }}>
        See real results from our beloved community.
      </p>

      {/* Social Proof Reels Gallery */}
      <div className="reels-gallery-grid">
        
        {/* Reel 1 */}
        <div className="reel-card">
          <div className="reel-video-wrapper">
            <iframe 
              src="https://www.youtube.com/embed/tUsTYO-i0Pk?autoplay=1&mute=1&loop=1&playlist=tUsTYO-i0Pk&controls=0&showinfo=0&rel=0&modestbranding=1" 
              title="Customer Experience 1" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
          <div className="reel-quote-card">
            <div className="gr-stars">{renderStars(5)}</div>
            <p className="gr-review-text">"Absolutely transformative for my skin routine."</p>
            <h4 className="gr-author-name">- Lakshmi V.</h4>
          </div>
        </div>

        {/* Reel 2 */}
        <div className="reel-card">
          <div className="reel-video-wrapper">
            <iframe 
              src="https://www.youtube.com/embed/CP3xRw6y96c?autoplay=1&mute=1&loop=1&playlist=CP3xRw6y96c&controls=0&showinfo=0&rel=0&modestbranding=1" 
              title="Customer Experience 2" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
          <div className="reel-quote-card">
            <div className="gr-stars">{renderStars(5)}</div>
            <p className="gr-review-text">"Authentic, pure, and incredibly effective."</p>
            <h4 className="gr-author-name">- Buvaneshwari K.</h4>
          </div>
        </div>

        {/* Reel 3 */}
        <div className="reel-card">
          <div className="reel-video-wrapper">
            <iframe 
              src="https://www.youtube.com/embed/aU6PrM_jce8?autoplay=1&mute=1&loop=1&playlist=aU6PrM_jce8&controls=0&showinfo=0&rel=0&modestbranding=1" 
              title="Customer Experience 3" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
          <div className="reel-quote-card">
            <div className="gr-stars">{renderStars(5)}</div>
            <p className="gr-review-text">"The best herbal products I have ever used."</p>
            <h4 className="gr-author-name">- Anitha S.</h4>
          </div>
        </div>

      </div>
    </div>
  );
}
