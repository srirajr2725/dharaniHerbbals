import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, Mail, Lock, User } from 'lucide-react';
import './Login.css'; // Reusing the same auth styles

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup attempt:', { name, email, password });
    // Handle registration logic here
  };

  return (
    <div className="auth-container">
      <div className="glass-card auth-card">
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

          <button type="submit" className="btn btn-primary btn-full" style={{ marginTop: '16px' }}>
            <UserPlus size={20} />
            Create Account
          </button>
        </form>

        <div className="auth-footer">
          Already have an account? 
          <Link to="/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
}
