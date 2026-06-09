import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search } from 'lucide-react';
import './Shop.css';

// Product images (1-7)
import p1 from '../assets/1.png';
import p2 from '../assets/2.png';
import p3 from '../assets/3.png';
import p4 from '../assets/4.png';
import p5 from '../assets/5.png';
import p6 from '../assets/6.png';
import p7 from '../assets/7.png';

// Ad images for the shop page
import ad5 from '../assets/ad5.png';
import ad6 from '../assets/ad6.png';
import ad7 from '../assets/ad7.png';
import ad8 from '../assets/ad8.png';
import ad9 from '../assets/ad9.png';

export const products = [
  { 
    id: 1, 
    name: 'Makil Carrot Malt', 
    subtitle: 'Nourishing & Healthy Drink',
    price: '₹249', 
    originalPrice: '₹300',
    discount: '17% OFF',
    rating: 4.9,
    reviews: 2392,
    badge: 'FLAT 20% off',
    badgeColor: 'green',
    image: p1 
  },
  { 
    id: 2, 
    name: 'Makil Beetroot Malt', 
    subtitle: 'Boosts Iron & Blood Health',
    price: '₹249', 
    originalPrice: '',
    discount: '',
    rating: 4.8,
    reviews: 1154,
    badge: 'Limited Time Deal',
    badgeColor: 'red',
    image: p2 
  },
  { 
    id: 3, 
    name: 'Makil Multani Mitti', 
    subtitle: 'Deep Cleanses & Brightens Skin',
    price: '₹120', 
    originalPrice: '₹150',
    discount: '20% OFF',
    rating: 4.5,
    reviews: 279,
    badge: 'CLEAN',
    badgeColor: 'green-circle',
    image: p3 
  },
  { 
    id: 4, 
    name: 'Makil Nalangu Powder', 
    subtitle: 'Traditional Bath Powder for Babies',
    price: '₹180', 
    originalPrice: '₹220',
    discount: '18% OFF',
    rating: 4.8,
    reviews: 1082,
    badge: 'Most Reordered',
    badgeColor: 'blue',
    image: p4 
  },
  { 
    id: 5, 
    name: 'Wild Turmeric Powder', 
    subtitle: 'Natural Glowing Skin',
    price: '₹140', 
    originalPrice: '₹180',
    discount: '22% OFF',
    rating: 4.7,
    reviews: 843,
    badge: 'Popular',
    badgeColor: 'green',
    image: p5 
  },
  { 
    id: 6, 
    name: 'Green Gram Powder', 
    subtitle: 'Gentle Exfoliation & Cleansing',
    price: '₹99', 
    originalPrice: '',
    discount: '',
    rating: 4.6,
    reviews: 512,
    badge: 'CLEAN',
    badgeColor: 'green-circle',
    image: p6 
  },
  { 
    id: 7, 
    name: 'RamCare Pain Reliever Oil', 
    subtitle: 'Fast Herbal Relief from Joint Pain',
    price: '₹299', 
    originalPrice: '₹350',
    discount: '15% OFF',
    rating: 4.9,
    reviews: 1450,
    badge: 'Limited Time Deal',
    badgeColor: 'red',
    image: p7 
  },
];

const ProductCard = ({ product }) => (
  <div className="product-card vilvah">
    <Link to={`/product/${product.id}`} className="product-img-link" style={{ textDecoration: 'none' }}>
      <div className="product-img-wrapper">
        {product.badge && product.badgeColor !== 'green-circle' && (
          <div className={`product-badge badge-${product.badgeColor}`}>{product.badge}</div>
        )}
        <img src={product.image} alt={product.name} className="product-img" />
      </div>
    </Link>
    
    <div className="product-info">
      <div className="product-rating">
        <span className="star-icon">★</span> 
        <span className="rating-score">{product.rating}</span> 
        <span className="rating-count">({product.reviews} Ratings)</span>
      </div>
      
      <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <h3 className="product-name">{product.name}</h3>
      </Link>
      <p className="product-subtitle">{product.subtitle}</p>
      
      <div className="product-price-block">
        <span className="current-price">{product.price}</span>
        {product.originalPrice && <span className="original-price">{product.originalPrice}</span>}
        {product.discount && (
          <span className="discount-pill">
            <span className="discount-dot">•</span> {product.discount}
          </span>
        )}
      </div>
      
      <button className="btn-add-to-cart">
        Add To Cart
      </button>
    </div>
  </div>
);

export default function Shop() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="shop-page-wrapper">
      <div className="page-container">
        <div className="reveal">
          <h1 className="section-title">Our Products</h1>
          <p className="section-subtitle">
            Explore our complete range of 100% natural, authentic herbal remedies crafted carefully for your holistic well-being.
          </p>
        </div>

        <div className="product-grid reveal" style={{ marginTop: '40px' }}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
