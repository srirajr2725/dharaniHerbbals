import { Tag, Heart, Flame, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './HandpickedDeals.css';

// Using existing assets for soap images
import soap1 from '../assets/8.png';
import soap2 from '../assets/9.png';
import soap3 from '../assets/10.png';
import soap4 from '../assets/11.png';
import soap5 from '../assets/12.png';
import soap6 from '../assets/13.png';

const dealProducts = [
  { id: 1, name: 'MULTHANI METTI SOAP', rating: 5.0, price: '₹50', image: soap1 },
  { id: 2, name: 'COCONUT MILK SOAP', rating: 4.8, price: '₹60', image: soap2 },
  { id: 3, name: 'VETTIVER SOAP', rating: 4.9, price: '₹60', image: soap3 },
  { id: 4, name: 'ROSE PETAL SOAP', rating: 4.7, price: '₹55', image: soap4 },
  { id: 5, name: 'ALOE VERA SOAP', rating: 4.9, price: '₹65', image: soap5 },
  { id: 6, name: 'TURMERIC SOAP', rating: 4.8, price: '₹50', image: soap6 }
];

export default function HandpickedDeals() {
  const { addToCart } = useCart();
  return (
    <div className="deals-container">
      <div className="deals-header reveal">
        <div className="deals-title-wrapper">
          <h2 className="deals-title">Handpicked Deals</h2>
        </div>
        <p className="deals-subtitle">
          Special offers on our most loved herbal soaps - limited time only.
        </p>
      </div>

      <div className="deals-grid reveal">
        {dealProducts.map((product) => (
          <div key={product.id} className="deal-card ultra">
            
            <div className="deal-img-wrapper">
              <div className="deal-badge-left">
                <Flame size={14} color="white" fill="orange" strokeWidth={1} />
                <span>Deal</span>
              </div>
              <button className="deal-badge-right" aria-label="Wishlist">
                <Heart size={18} color="#777" />
              </button>

              <img src={product.image} alt={product.name} className="deal-img" />
            </div>

            <div className="deal-info">
              <h3 className="deal-name">{product.name}</h3>
              <div className="deal-rating">
                <div className="deal-stars">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i} style={{ color: '#fbbf24' }}>{star}</span>
                  ))}
                </div>
                <span className="deal-score">{product.rating.toFixed(1)}</span>
              </div>
              
              <div className="deal-bottom-row">
                <div className="deal-price">{product.price}</div>
                <button className="deal-buy-btn" onClick={() => addToCart(product)} aria-label="Grab Deal">
                  <ShoppingCart size={20} />
                </button>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}
