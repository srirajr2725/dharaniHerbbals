import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, Package, Heart, LogOut, ChevronRight } from 'lucide-react';
import './Profile.css';

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Fetch user from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUserData(JSON.parse(storedUser));
      } catch (e) {
        console.error("Failed to parse user data", e);
      }
    } else {
      // If no user found, redirect to login
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (!userData) {
    return <div className="profile-loading">Loading your profile...</div>;
  }

  // Fallback data if API doesn't return everything
  const user = userData.user || userData;
  const name = user.name || 'Dharani Customer';
  const mobile = user.mobile || user.mobile_number || '+91 00000 00000';

  return (
    <div className="profile-page-wrapper">
      <div className="profile-container">
        
        {/* Left Column: Profile Card & Nav */}
        <div className="profile-sidebar">
          <div className="profile-card">
            <div className="profile-avatar">
              {name.charAt(0).toUpperCase()}
            </div>
            <h2 className="profile-name">{name}</h2>
          </div>

          <div className="profile-nav">
            <button className="profile-nav-item active">
              <User size={18} />
              <span>Account Details</span>
              <ChevronRight size={16} className="chevron" />
            </button>
            <button className="profile-nav-item">
              <Package size={18} />
              <span>My Orders</span>
              <ChevronRight size={16} className="chevron" />
            </button>
            <button className="profile-nav-item">
              <Heart size={18} />
              <span>Wishlist</span>
              <ChevronRight size={16} className="chevron" />
            </button>
            <button className="profile-nav-item logout-btn" onClick={handleLogout}>
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Right Column: Main Content */}
        <div className="profile-main-content">
          <div className="profile-content-header">
            <h1>Account Details</h1>
            <p>Manage your personal information and preferences.</p>
          </div>

          <div className="profile-info-grid">
            <div className="profile-info-card">
              <div className="info-icon">
                <User size={20} />
              </div>
              <div className="info-details">
                <label>Full Name</label>
                <p>{name}</p>
              </div>
            </div>

            <div className="profile-info-card">
              <div className="info-icon">
                <Phone size={20} />
              </div>
              <div className="info-details">
                <label>Mobile Number</label>
                <p>{mobile}</p>
              </div>
            </div>
          </div>

          <div className="profile-recent-orders">
            <h2>Recent Orders</h2>
            <div className="empty-orders">
              <Package size={40} className="empty-icon" />
              <p>You haven't placed any orders yet.</p>
              <button className="btn-shop-now" onClick={() => navigate('/shop')}>Start Shopping</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
