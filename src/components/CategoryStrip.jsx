import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import './CategoryStrip.css';

// Product images for categories
import p1 from '../assets/1.png';
import p2 from '../assets/2.png';
import p3 from '../assets/3.png';
import p4 from '../assets/4.png';
import p5 from '../assets/5.png';
import p6 from '../assets/6.png';
import p7 from '../assets/7.png';

const categories = [
  { id: 1, name: 'Carrot Malt', image: p1 },
  { id: 2, name: 'Beetroot Malt', image: p2 },
  { id: 3, name: 'Multani Mitti', image: p3 },
  { id: 4, name: 'Nalangu Powder', image: p4 },
  { id: 5, name: 'Wild Turmeric', image: p5 },
  { id: 6, name: 'Green Gram', image: p6 },
  { id: 7, name: 'Herbal Oils', image: p7 },
];

export default function CategoryStrip() {
  const location = useLocation();

  // ONLY show on Home Page and Shop Page
  if (location.pathname !== '/' && location.pathname !== '/shop') {
    return null;
  }

  return (
    <div className="category-strip-container">
      <div className="category-strip-scroll">
        {categories.map((category, index) => (
          <Link 
            key={category.id} 
            to="/shop" 
            className="category-item cat-animate-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="category-blob-wrapper">
              <div className="category-blob"></div>
              <img src={category.image} alt={category.name} className="category-img" />
            </div>
            <div className="category-btn">
              <span>{category.name}</span>
              <ChevronRight size={16} strokeWidth={2.5} className="cat-btn-icon" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
