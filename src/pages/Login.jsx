import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn, Phone, Lock } from 'lucide-react';
import './Login.css';

export default function Login() {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const data = JSON.parse(storedUser);
        if (data.mobile === 'admin' || data.is_admin || data.user?.role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/profile');
        }
      } catch (e) {
        console.error("Failed to parse user data", e);
      }
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://ungreased-repulsive-consuming.ngrok-free.dev/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mobile: mobile,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error('Invalid mobile number or password');
      }

      const data = await response.json();
      console.log('Login Success:', data);
      
      // Store user data in localStorage
      localStorage.setItem('user', JSON.stringify(data));

      // Redirect based on role or admin email
      if (mobile === 'admin' || data.is_admin || data.user?.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/profile');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Login failed. Please check your credentials and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page-wrapper">
      <div className="auth-container">
        <div className="auth-glass-card">
          <div className="auth-header">
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Sign in to your Dharani Herbbals account</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="input-label" htmlFor="mobile">Mobile Number</label>
            <div style={{ position: 'relative' }}>
              <input 
                id="mobile"
                type="tel" 
                className="input-field" 
                placeholder="1234567890" 
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
                style={{ paddingLeft: '40px' }}
              />
              <Phone 
                size={18} 
                color="var(--text-muted)" 
                style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} 
              />
            </div>
          </div>

          <div className="input-group">
            <label className="input-label" htmlFor="password">Password</label>
            <div style={{ position: 'relative' }}>
              <input 
                id="password"
                type="password" 
                className="input-field" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ paddingLeft: '40px' }}
              />
              <Lock 
                size={18} 
                color="var(--text-muted)" 
                style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} 
              />
            </div>
          </div>

          <div className="auth-options">
            <label className="checkbox-group">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#" className="forgot-link">Forgot Password?</a>
          </div>

          {error && <div style={{ color: 'red', marginTop: '10px', fontSize: '14px', textAlign: 'center' }}>{error}</div>}

          <button type="submit" className="btn btn-primary btn-full" disabled={loading}>
            <LogIn size={20} />
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div className="auth-footer">
          Don't have an account? 
          <Link to="/signup">Sign up here</Link>
        </div>
      </div>
    </div>
    </div>
  );
}
