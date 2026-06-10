import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Phone, UserPlus, Mail, Lock, User } from 'lucide-react';
import './Login.css';

export default function Signup() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
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
    setSuccess(false);

    try {
      const response = await fetch('https://ungreased-repulsive-consuming.ngrok-free.dev/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          mobile: mobile,
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();
      console.log('Success:', data);
      setSuccess(true);
      
      // Navigate to login page
      setTimeout(() => navigate('/login'), 1500);

      setName('');
      setMobile('');
      setEmail('');
      setPassword('');
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to create account. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page-wrapper">
      <div className="auth-container">
        <div className="auth-glass-card">
        <div className="auth-header">
          <h1 className="auth-title">Create Account</h1>
          <p className="auth-subtitle">Join Dharani Herbbals today</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="input-label" htmlFor="name">Full Name</label>
            <div style={{ position: 'relative' }}>
              <input 
                id="name"
                type="text" 
                className="input-field" 
                placeholder="John Doe" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{ paddingLeft: '40px' }}
              />
              <User 
                size={18} 
                color="var(--text-muted)" 
                style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} 
              />
            </div>
          </div>

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
            <label className="input-label" htmlFor="email">Email Address</label>
            <div style={{ position: 'relative' }}>
              <input 
                id="email"
                type="email" 
                className="input-field" 
                placeholder="you@example.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ paddingLeft: '40px' }}
              />
              <Mail 
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

          {error && <div style={{ color: 'red', marginTop: '10px', fontSize: '14px', textAlign: 'center' }}>{error}</div>}
          {success && <div style={{ color: 'green', marginTop: '10px', fontSize: '14px', textAlign: 'center' }}>Account created successfully!</div>}

          <button type="submit" className="btn btn-primary btn-full" style={{ marginTop: '16px' }} disabled={loading}>
            <UserPlus size={20} />
            {loading ? 'Creating...' : 'Create Account'}
          </button>
        </form>

        <div className="auth-footer">
          Already have an account? 
          <Link to="/login">Sign in</Link>
        </div>
        </div>
      </div>
    </div>
  );
}
