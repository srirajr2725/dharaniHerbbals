import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from './Shop';
import { ShoppingCart, ShieldCheck, Leaf, Truck, ChevronDown, ChevronUp } from 'lucide-react';
import imgLifestyle from '../assets/herbal_lifestyle.png';
import imgIngredients from '../assets/herbal_ingredients.png';
import imgTexture from '../assets/herbal_texture.png';
import { useCart } from '../context/CartContext';
import './ProductDetails.css';

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const { addToCart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="pd-pro-wrapper empty">
        <h2>Product not found!</h2>
        <Link to="/shop" className="btn-pro-primary mt-4" style={{ width: 'auto', textDecoration: 'none', padding: '16px 32px' }}>Return to Shop</Link>
      </div>
    );
  }

  // Combine main product image with newly generated slider images
  const images = [product.image, imgLifestyle, imgIngredients, imgTexture];

  return (
    <div className="pd-pro-wrapper">
      {/* Breadcrumbs */}
      <div className="pd-breadcrumbs">
        <Link to="/">Home</Link>
        <span className="separator">/</span>
        <Link to="/shop">Shop</Link>
        <span className="separator">/</span>
        <span className="current">{product.name}</span>
      </div>

      <div className="pd-pro-container">
        {/* Left Column: Gallery (Professional Layout) */}
        <div className="pd-pro-gallery">
          {/* Vertical Thumbnails */}
          <div className="pd-pro-thumbnails-vertical">
            {images.map((img, idx) => (
              <div 
                key={idx} 
                className={`pd-pro-thumb ${currentImgIndex === idx ? 'active' : ''}`}
                onMouseEnter={() => setCurrentImgIndex(idx)}
                onClick={() => setCurrentImgIndex(idx)}
              >
                <img src={img} alt={`Thumbnail ${idx + 1}`} />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="pd-pro-main-image-container">
            <img 
              key={currentImgIndex}
              src={images[currentImgIndex]} 
              alt={product.name} 
              className="pd-pro-main-image"
            />
            {product.badge && (
              <div className={`pro-badge badge-${product.badgeColor}`}>
                {product.badge}
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Information */}
        <div className="pd-pro-info">
          <h1 className="pd-pro-title">{product.name}</h1>
          <p className="pd-pro-subtitle">{product.subtitle}</p>

          <div className="pd-pro-rating">
            <div className="pro-stars">
              <span className="star">★</span>
              <span className="score">{product.rating}</span>
            </div>
            <span className="reviews-link">{product.reviews} Reviews</span>
          </div>

          <div className="pd-pro-price-block">
            <span className="pro-current-price">{product.price}</span>
            {product.originalPrice && (
              <>
                <span className="pro-original-price">MRP {product.originalPrice}</span>
                <span className="pro-discount-text">({product.discount})</span>
              </>
            )}
            <p className="tax-inclusive">Inclusive of all taxes</p>
          </div>

          <div className="pd-pro-divider"></div>

          {/* Add to Cart Actions */}
          <div className="pd-pro-actions">
            <div className="pro-qty-selector">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <input type="text" value={quantity} readOnly />
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button className="btn-pro-primary" onClick={() => addToCart(product, quantity)}>
              <ShoppingCart size={20} /> Add to Cart
            </button>
          </div>

          {/* Trust Badges */}
          <div className="pd-pro-trust">
            <div className="trust-item">
              <Leaf size={24} className="trust-icon" />
              <span>100% Natural</span>
            </div>
            <div className="trust-item">
              <ShieldCheck size={24} className="trust-icon" />
              <span>Lab Tested</span>
            </div>
            <div className="trust-item">
              <Truck size={24} className="trust-icon" />
              <span>Free Delivery</span>
            </div>
          </div>

          {/* Accordion Tabs */}
          <div className="pd-pro-accordion">
            <div className={`accordion-item ${activeTab === 'description' ? 'open' : ''}`}>
              <button className="accordion-header" onClick={() => setActiveTab(activeTab === 'description' ? '' : 'description')}>
                Description
                {activeTab === 'description' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <div className="accordion-body">
                <p>Experience the incredible benefits of our completely natural, 100% organic herbal formulation. Carefully crafted using traditional methods and sustainably sourced ingredients to ensure the highest quality for your holistic wellness journey. Free from harmful chemicals, parabens, and artificial preservatives.</p>
              </div>
            </div>

            <div className={`accordion-item ${activeTab === 'ingredients' ? 'open' : ''}`}>
              <button className="accordion-header" onClick={() => setActiveTab(activeTab === 'ingredients' ? '' : 'ingredients')}>
                Ingredients
                {activeTab === 'ingredients' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <div className="accordion-body">
                <ul>
                  <li>100% Pure Organic Extract</li>
                  <li>Natural Essential Oils</li>
                  <li>Zero Artificial Colors</li>
                  <li>No Preservatives</li>
                </ul>
              </div>
            </div>

            <div className={`accordion-item ${activeTab === 'howToUse' ? 'open' : ''}`}>
              <button className="accordion-header" onClick={() => setActiveTab(activeTab === 'howToUse' ? '' : 'howToUse')}>
                How to Use
                {activeTab === 'howToUse' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <div className="accordion-body">
                <p>Take a small amount and apply gently. Use daily for best results. Store in a cool, dry place away from direct sunlight.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
