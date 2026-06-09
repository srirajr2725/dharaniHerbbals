import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogIn, Mail, Lock } from 'lucide-react';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
    // Handle auth logic here
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

          <div className="auth-options">
            <label className="checkbox-group">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#" className="forgot-link">Forgot Password?</a>
          </div>

          <button type="submit" className="btn btn-primary btn-full">
            <LogIn size={20} />
            Sign In
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
