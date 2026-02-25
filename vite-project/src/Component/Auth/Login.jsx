import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { loginUser } from '../../utils/authStorage';
import './Auth.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result = loginUser(email.trim(), password);
    setLoading(false);

    if (result.success) {
      login(result.user);
      navigate('/');
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-brand">
          <div className="auth-logo">
            <i className="bi bi-music-note-beamed"></i>
          </div>
          <h1 className="auth-app-name">Melodies</h1>
        </div>

        <h2 className="auth-title">Login To Continue</h2>

        {error && <p className="auth-message auth-message-error">{error}</p>}

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-input-group">
            <input
              type="email"
              placeholder="E-Mail"
              className="auth-input"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError('');
              }}
              disabled={loading}
              required
            />
          </div>

          <div className="auth-input-group auth-input-password">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="auth-input"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              disabled={loading}
              required
            />
            <button
              type="button"
              className="auth-password-toggle"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
              tabIndex={-1}
            >
              <i className={showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'}></i>
            </button>
          </div>

          <div className="auth-actions">
            <a href="#" className="auth-link">
              Forgot password &gt;
            </a>
            <button
              type="submit"
              className="auth-btn auth-btn-primary"
              disabled={loading}
            >
              {loading ? 'Đang đăng nhập...' : 'Login'}
            </button>
          </div>

          <div className="auth-social">
            <button type="button" className="auth-social-btn">
              <i className="bi bi-google"></i>
              <span>Google Login</span>
            </button>
            <button type="button" className="auth-social-btn">
              <i className="bi bi-facebook"></i>
              <span>Facebook Login</span>
            </button>
          </div>

          <div className="auth-footer">
            <p className="auth-footer-text">
              Dont Have An Account{' '}
              <Link to="/signup" className="auth-link-inline">
                Sign Up Here
              </Link>
            </p>
            <Link to="/signup" className="auth-btn auth-btn-secondary">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
