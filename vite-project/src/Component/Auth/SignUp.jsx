import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signUpUser } from '../../utils/authStorage';
import './Auth.css';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const validate = () => {
    const { name, email, password } = formData;

    if (!name.trim()) {
      setError('Vui lòng nhập tên.');
      return false;
    }

    if (name.trim().length < 2) {
      setError('Tên phải có ít nhất 2 ký tự.');
      return false;
    }

    if (!email.trim()) {
      setError('Vui lòng nhập email.');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError('Email không hợp lệ.');
      return false;
    }

    if (!password) {
      setError('Vui lòng nhập mật khẩu.');
      return false;
    }

    if (password.length < 6) {
      setError('Mật khẩu phải có ít nhất 6 ký tự.');
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!validate()) return;

    setLoading(true);

    const result = signUpUser(formData);

    setLoading(false);

    if (result.success) {
      setSuccess(result.message);
      setFormData({ name: '', email: '', password: '', phone: '' });

      setTimeout(() => {
        navigate('/login');
      }, 1500);
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="auth-page auth-page-signup">
      <div className="auth-container">
        <div className="auth-brand">
          <div className="auth-logo">
            <i className="bi bi-music-note-beamed"></i>
          </div>
          <h1 className="auth-app-name">Melodies</h1>
        </div>

        <h2 className="auth-title">Sign In To Continue</h2>

        {error && <p className="auth-message auth-message-error">{error}</p>}
        {success && <p className="auth-message auth-message-success">{success}</p>}

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-input-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="auth-input"
              value={formData.name}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          <div className="auth-input-group">
            <input
              type="email"
              name="email"
              placeholder="E-Mail"
              className="auth-input"
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          <div className="auth-input-group auth-input-password">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              className="auth-input"
              value={formData.password}
              onChange={handleChange}
              disabled={loading}
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

          <div className="auth-input-group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="auth-input"
              value={formData.phone}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            className="auth-btn auth-btn-primary auth-btn-full"
            disabled={loading}
          >
            {loading ? 'Đang xử lý...' : 'Create an account'}
          </button>

          <div className="auth-footer auth-footer-signup">
            <p className="auth-footer-text">
              Already have an account?{' '}
              <Link to="/login" className="auth-link-inline">
                Login Here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
