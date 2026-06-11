import { useRef } from 'react';
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './ShoppableVideos.css';

// Product images
import p1 from '../assets/1.png';
import p2 from '../assets/2.png';
import p3 from '../assets/3.png';
import p4 from '../assets/6.png';
import p5 from '../assets/5.png';

const videoData = [
  { id: 1, videoId: 'XiODT_a0SvI', productImg: p1, title: 'CARROT MALT', price: '₹249' },
  { id: 2, videoId: 'MUy5fItVciU', productImg: p2, title: 'BEETROOT MALT', price: '₹249' },
  { id: 3, videoId: 'aU6PrM_jce8', productImg: p3, title: 'MULTANI MITTI', price: '₹120' },
  { id: 4, videoId: 'v8XHuZw_LIA', productImg: p4, title: 'PAASI PAYIR', price: '₹180' },
  { id: 5, videoId: '8Y3gKyZIDAM', productImg: p5, title: 'WILD TURMERIC', price: '₹140' }
];

export default function ShoppableVideos() {
  const sliderRef = useRef(null);
  const { addToCart } = useCart();

  const scrollLeft = () => sliderRef.current?.scrollBy({ left: -320, behavior: 'smooth' });
  const scrollRight = () => sliderRef.current?.scrollBy({ left: 320, behavior: 'smooth' });

  return (
    <div className="shoppable-videos-container">
      <div className="sv-header reveal">
        <h2 className="section-title">Shop Our Reels</h2>
        <p className="section-subtitle">Discover the magic of our natural products in action</p>
      </div>

      <div className="sv-wrapper reveal">
        <button className="sv-nav-btn left" onClick={scrollLeft} aria-label="Scroll left">
          <ChevronLeft size={24} />
        </button>

        <div className="sv-track" ref={sliderRef}>
          {videoData.map((item) => (
            <div key={item.id} className="sv-card ultra">
              
              <div className="sv-video-bg">
                <iframe 
                  className="sv-iframe"
                  src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${item.videoId}&playsinline=1&modestbranding=1`} 
                  title={item.title}
                  allow="autoplay; encrypted-media" 
                ></iframe>
              </div>
              
              <div className="sv-gradient-overlay"></div>

              <div className="sv-glass-panel">
                <div className="sv-product-img-wrapper">
                  <img src={item.productImg} alt={item.title} className="sv-product-img" />
                </div>
                <div className="sv-product-details">
                  <h4 className="sv-product-title">{item.title}</h4>
                  <div className="sv-product-price">{item.price}</div>
                </div>
                <button 
                  className="sv-buy-btn" 
                  onClick={() => addToCart({ id: item.id, name: item.title, price: item.price, image: item.productImg })}
                >
                  <ShoppingBag size={18} />
                </button>
              </div>

            </div>
          ))}
        </div>

        <button className="sv-nav-btn right" onClick={scrollRight} aria-label="Scroll right">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
