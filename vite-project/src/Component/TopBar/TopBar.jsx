import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './TopBar.css';

const TopBar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setShowDropdown(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    const handleLogout = () => {
        logout();
        setShowDropdown(false);
        navigate('/');
    };

    return (
        <header className="topbar">
            <div className="topbar-search">
                <i className="bi bi-search topbar-search-icon"></i>
                <input 
                    type="text" 
                    placeholder="Search For Musics, Artists, Albumes ..." 
                    className="topbar-search-input"
                />
            </div>

            <nav className="topbar-nav">
                <a href="#" className="topbar-link">About</a>
                <a href="#" className="topbar-link">Contact</a>
                <a href="#" className="topbar-link">Premium</a>
            </nav>

            <div className="topbar-actions">
                {user ? (
                    <div className="topbar-account-dropdown" ref={dropdownRef}>
                        <button
                            type="button"
                            className="topbar-user-icon"
                            onClick={() => setShowDropdown(!showDropdown)}
                            aria-label="Tài khoản"
                            aria-expanded={showDropdown}
                        >
                            <i className="bi bi-person-circle"></i>
                        </button>
                        {showDropdown && (
                            <div className="topbar-dropdown">
                                <Link
                                    to="/profile"
                                    className="topbar-dropdown-item"
                                    onClick={() => setShowDropdown(false)}
                                >
                                    <i className="bi bi-person"></i>
                                    View profile
                                </Link>
                                <button
                                    type="button"
                                    className="topbar-dropdown-item topbar-dropdown-logout"
                                    onClick={handleLogout}
                                >
                                    <i className="bi bi-box-arrow-right"></i>
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        <Link to="/login" className="topbar-btn topbar-btn-login">Login</Link>
                        <Link to="/signup" className="topbar-btn topbar-btn-signup">Sign Up</Link>
                    </>
                )}
            </div>
        </header>
    );
};

export default TopBar;
