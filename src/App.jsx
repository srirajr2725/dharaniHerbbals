import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import { useCart } from './context/CartContext';
import ImageSlider from './components/ImageSlider';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import Admin from './pages/Admin';
import Profile from './pages/Profile';
import { ShoppingCart } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import './App.css';
import './pages/Shop.css'; // Reuse shop styles for grid

import CategoryStrip from './components/CategoryStrip';
import ShoppableVideos from './components/ShoppableVideos';
import GoogleReviews from './components/GoogleReviews';
import HandpickedDeals from './components/HandpickedDeals';
import OurJourney from './components/OurJourney';
import TrustBadges from './components/TrustBadges';
import Footer from './components/Footer';
import FloatingSocials from './components/FloatingSocials';

import s1 from './assets/S1.jpeg';
import s2 from './assets/S2.jpeg';
import s3 from './assets/S3.jpeg';
import s4 from './assets/S4.jpeg';
import s5 from './assets/S5.jpeg';
import s6 from './assets/S6.jpeg';
import s7 from './assets/S7.jpeg';
import s8 from './assets/S8.jpeg';
import s9 from './assets/S9.jpeg';
import s10 from './assets/S10.jpeg';
import s11 from './assets/S11.jpeg';
import s12 from './assets/S12.jpeg';
import s13 from './assets/S13.jpeg';
import s14 from './assets/S14.jpeg';

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
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const promoAds = [
    { img: s1, alt: "Promo 1" },
    { img: s2, alt: "Promo 2" },
    { img: s3, alt: "Promo 3" },
    { img: s4, alt: "Promo 4" },
    { img: s5, alt: "Promo 5" },
    { img: s6, alt: "Promo 6" },
    { img: s7, alt: "Promo 7" },
    { img: s8, alt: "Promo 8" },
    { img: s9, alt: "Promo 9" },
    { img: s10, alt: "Promo 10" },
    { img: s11, alt: "Promo 11" },
    { img: s12, alt: "Promo 12" },
    { img: s13, alt: "Promo 13" },
    { img: s14, alt: "Promo 14" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ width: '100%' }}>
      {/* Full-width Image Slider */}
      <ImageSlider />

      <CategoryStrip />

      <div className="page-container" style={{ paddingTop: '60px' }}>
        
        {/* Featured Products Section (Ultra UI Bestsellers) */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 className="section-title" style={{ color: '#166534', fontSize: '3rem', fontWeight: '800', marginBottom: '10px' }}>
            Our Most Loved Picks
          </h2>
          <p style={{ color: '#4b5563', fontSize: '1.15rem', maxWidth: '750px', margin: '0 auto', lineHeight: '1.6' }}>
            Immerse yourself in our quintessential collection of highly sought-after botanical remedies, meticulously crafted to deliver an uncompromised standard of holistic nourishment and transformative wellness.
          </p>
        </div>

        <div className="product-grid reveal-stagger">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card vilvah">
              <Link to={`/product/${product.id}`} className="product-img-link" style={{ textDecoration: 'none' }}>
                <div className="product-img-wrapper">
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
                
                <div className="product-price-row">
                  <div className="product-price-block">
                    <span className="current-price">{product.price}</span>
                    {product.originalPrice && <span className="original-price">{product.originalPrice}</span>}
                    {product.discount && (
                      <span className="discount-pill">
                        <span className="discount-dot">•</span> {product.discount}
                      </span>
                    )}
                  </div>
                  
                  <button className="btn-add-to-cart-icon" onClick={(e) => { e.preventDefault(); addToCart(product); }} title="Add to Cart">
                    <ShoppingCart size={20} />
                  </button>
                </div>
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
          <h2 className="section-title">The Apothecary Reserve</h2>
          <p className="section-subtitle">Experience the pure potency of our most exclusive, small-batch herbal blends.</p>
        </div>
        
        {/* Auto-Sliding Promo Train */}
        <div className="promo-slider-container reveal-stagger">
          <div className="promo-train-track">
            {[...promoAds, ...promoAds].map((ad, index) => (
              <div key={index} className="promo-slider-item" onClick={() => navigate('/shop')}>
                <img src={ad.img} alt={ad.alt} className="promo-slider-img" />
                <div className="promo-slider-action">
                  <span className="arrow-icon">↗</span>
                </div>
              </div>
            ))}
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

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="app-container">
      {!isAdminRoute && <Navbar />}
      {!isAdminRoute && <CartDrawer />}
      {!isAdminRoute && <FloatingSocials />}
      <main className="main-content" style={isAdminRoute ? { padding: 0 } : {}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
