import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import { ShoppingCart } from 'lucide-react';
import './App.css';
import './pages/Shop.css'; // Reuse shop styles for grid

import CategoryStrip from './components/CategoryStrip';
import ShoppableVideos from './components/ShoppableVideos';
import GoogleReviews from './components/GoogleReviews';
import HandpickedDeals from './components/HandpickedDeals';
import FeaturedBanners from './components/FeaturedBanners';
import OurJourney from './components/OurJourney';
import TrustBadges from './components/TrustBadges';
import Footer from './components/Footer';

// Ads for Home
import ad1 from './assets/ad1.png';
import ad2 from './assets/ad2.png';
import ad3 from './assets/ad3.png';
import ad4 from './assets/ad4.png';

// Featured Products
import p1 from './assets/1.png';
import p2 from './assets/2.png';
import p3 from './assets/3.png';
import p4 from './assets/4.png';
import p5 from './assets/5.png';
import p6 from './assets/6.png';
import p7 from './assets/7.png';

const featuredProducts = [
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

function Home() {
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
    <div style={{ width: '100%' }}>
      {/* Full-width Image Slider */}
      <ImageSlider />

      <div className="page-container" style={{ paddingTop: '60px' }}>
        
        {/* Featured Products Section (Ultra UI Bestsellers) */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2 className="section-title" style={{ color: '#8b7355', fontSize: '2.5rem' }}>Bestsellers</h2>
        </div>

        <div className="product-grid reveal">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card vilvah">
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
          ))}
        </div>

        <div className="reveal" style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link to="/shop" className="btn-view-more">
            View All Products &gt;
          </Link>
        </div>

        {/* Bento Grid Ads Section */}
        <div className="reveal" style={{ marginTop: '80px' }}>
          <h2 className="section-title">Special Promotions</h2>
          <p className="section-subtitle">Discover our latest deals and exclusive herbal wellness packages.</p>
        </div>
        
        <div className="bento-grid reveal">
          <div className="bento-item bento-large">
            <img src={ad1} alt="Ad 1" className="bento-img" />
            <div className="bento-overlay">
              <h3>Skin Brightening</h3>
              <button className="bento-btn">Shop Collection ➔</button>
            </div>
          </div>
          <div className="bento-item bento-square">
            <img src={ad2} alt="Ad 2" className="bento-img" />
            <div className="bento-overlay">
              <h3>Herbal Hair Care</h3>
              <button className="bento-btn">Shop Collection ➔</button>
            </div>
          </div>
          <div className="bento-item bento-square">
            <img src={ad3} alt="Ad 3" className="bento-img" />
            <div className="bento-overlay">
              <h3>Natural Bath</h3>
              <button className="bento-btn">Shop Collection ➔</button>
            </div>
          </div>
          <div className="bento-item bento-wide">
            <img src={ad4} alt="Ad 4" className="bento-img" />
            <div className="bento-overlay">
              <h3>Wellness & Vitality</h3>
              <button className="bento-btn">Shop Collection ➔</button>
            </div>
          </div>
        </div>

        {/* Google Reviews Marquee Section */}
        <div className="reveal">
          <GoogleReviews />
        </div>

        {/* Shoppable Videos Section */}
        <div className="reveal">
          <ShoppableVideos />
        </div>

        {/* Handpicked Deals Section */}
        <div className="reveal">
          <HandpickedDeals />
        </div>

        {/* Featured Banners Section */}
        <div className="reveal">
          <FeaturedBanners />
        </div>

        {/* Our Journey Section */}
        <div className="reveal">
          <OurJourney />
        </div>

        {/* Trust Badges Section */}
        <div className="reveal">
          <TrustBadges />
        </div>

      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <CategoryStrip />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
