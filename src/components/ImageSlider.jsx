import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './ImageSlider.css';

// Product images
import p1 from '../assets/1.png';
import p2 from '../assets/2.png';
import p4 from '../assets/4.png';

// Before/After images
import ba1 from '../assets/ba_carrot.png';
import ba2 from '../assets/ba_beetroot.png';
import ba3 from '../assets/ba_powder.png';

const slides = [
  {
    id: 1,
    productName: 'Makil Carrot Malt',
    mainTitle: "The Viral Nourishing Drink \n Everyone's Talking About!",
    offer: 'FLAT 20% OFF',
    originalPrice: '₹300',
    discountPrice: '₹249',
    productImg: p1,
    baImg: ba1,
    bgGradient: 'linear-gradient(135deg, #4A2E1B 0%, #8E5A35 100%)'
  },
  {
    id: 2,
    productName: 'Makil Beetroot Malt',
    mainTitle: "The Viral Iron Booster \n Everyone's Talking About!",
    offer: 'LIMITED TIME DEAL',
    originalPrice: '₹350',
    discountPrice: '₹249',
    productImg: p2,
    baImg: ba2,
    bgGradient: 'linear-gradient(135deg, #4A1B28 0%, #8E3547 100%)'
  },
  {
    id: 3,
    productName: 'Makil Nalangu Powder',
    mainTitle: "The Viral Baby Bath \n Everyone's Talking About!",
    offer: 'FLAT 18% OFF',
    originalPrice: '₹220',
    discountPrice: '₹180',
    productImg: p4,
    baImg: ba3,
    bgGradient: 'linear-gradient(135deg, #4A431B 0%, #8E8235 100%)'
  }
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(slides.length - 1);
  const timerRef = useRef(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      goToNext();
    }, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [currentIndex]);

  const goToPrevious = () => {
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    resetTimer();
  };

  const goToNext = () => {
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    resetTimer();
  };

  const goToSlide = (index) => {
    if (index === currentIndex) return;
    setPrevIndex(currentIndex);
    setCurrentIndex(index);
    resetTimer();
  };

  return (
    <div className="slider-container">
      {/* Slides */}
      {slides.map((slide, index) => {
        let className = 'promo-slide';
        if (index === currentIndex) className += ' active';
        else if (index === prevIndex) className += ' previous';

        return (
          <div key={slide.id} className={className} style={{ background: slide.bgGradient }}>
            <div className="promo-layout">
              {/* Left Content */}
              <div className="promo-text-col">
                <h3 className="promo-small-title">{slide.productName}</h3>
                <h1 className="promo-main-title">{slide.mainTitle}</h1>
                <div className="promo-offer-box">{slide.offer}</div>
                <button className="promo-shop-btn">Shop Now &gt;</button>
              </div>

              {/* Center Content (Product) */}
              <div className="promo-product-col">
                <img src={slide.productImg} alt={slide.productName} className="promo-product-img" />
                <div className="promo-starburst">
                  <span className="price-cut">{slide.originalPrice}</span>
                  <span className="price-new">{slide.discountPrice}</span>
                </div>
              </div>

              {/* Right Content (Before/After) */}
              <div className="promo-ba-col">
                <div className="promo-ba-wrapper">
                  <img src={slide.baImg} alt="Before and After" className="promo-ba-img" />
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Floating Controls */}
      <div className="slider-controls">
        <button className="slider-btn" onClick={goToPrevious} aria-label="Previous slide">
          <ChevronLeft size={28} />
        </button>
        <button className="slider-btn" onClick={goToNext} aria-label="Next slide">
          <ChevronRight size={28} />
        </button>
      </div>

      {/* 3 Dot Sliding Pagination */}
      <div className="slider-dots-container">
        {slides.map((_, index) => (
          <div 
            key={index}
            className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          >
            <div className="dot-fill"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
