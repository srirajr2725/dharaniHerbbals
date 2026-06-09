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
      <h2 className="section-title">Customer Favorites & Experiences</h2>
      
      {/* Top Summary Card */}
      <div className="gr-summary-card">
        <div className="gr-google-logo">
          <svg viewBox="0 0 24 24" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        </div>
        
        <div className="gr-rating-block">
          <span className="gr-score">4.8</span>
          <div className="gr-stars">{renderStars(4.8)}</div>
        </div>
        
        <p className="gr-based-on">Based on 150+ Google reviews</p>
        
        <a href="https://search.google.com/local/writereview?placeid=ChIJKzS3Y1X3zjoRYhE-B9DqQ0I" target="_blank" rel="noreferrer" className="gr-write-btn">
          <ExternalLink size={16} />
          Write a Review
        </a>
      </div>

      {/* Auto-Scrolling Marquee Track */}
      <div className="gr-marquee-wrapper">
        <div className="gr-marquee-track">
          {/* We duplicate the reviews array to create an infinite seamless loop */}
          {[...reviewsData, ...reviewsData].map((review, index) => (
            <div key={`${review.id}-${index}`} className="gr-review-card">
              
              <div className="gr-review-header">
                <div className="gr-avatar" style={{ backgroundColor: review.bgColor }}>
                  {review.initial}
                </div>
                <div className="gr-author-info">
                  <h4 className="gr-author-name">{review.name}</h4>
                  <div className="gr-author-meta">
                    <div className="gr-review-stars">{renderStars(review.rating)}</div>
                    <span className="gr-review-time">{review.time}</span>
                  </div>
                </div>
              </div>
              
              <p className="gr-review-text">{review.text}</p>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
