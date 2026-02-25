import './TopBar.css';

const TopBar = () => {
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
                <button className="topbar-btn topbar-btn-login">Login</button>
                <button className="topbar-btn topbar-btn-signup">Sign Up</button>
            </div>
        </header>
    );
};

export default TopBar;
