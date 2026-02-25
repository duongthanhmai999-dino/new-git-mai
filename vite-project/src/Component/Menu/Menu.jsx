import './Menu.css';
import { NavLink } from 'react-router-dom';
const Menu = () => {
    return (
        <div className='menu'>
            <div className="menu-logo">
                <span className="logo-text">Melodies</span>
            </div>

            <nav className="menu-nav">
                <div className="menu-category">
                    
                    <span className="category-title">Menu</span>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'} end>
                        <i className="bi bi-house menu-icon"></i>
                        Home
                    </NavLink>
                    <NavLink to="/discover" className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'}>
                        <i className="bi bi-compass menu-icon"></i>
                        Discover
                    </NavLink>
                    <NavLink to="/albums" className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'}>
                        <i className="bi bi-disc menu-icon"></i>
                        Albums
                    </NavLink>
                    <a href="#" className="menu-item">
                        <i className="bi bi-person menu-icon"></i>
                        Artists
                    </a>
                </div>

                <div className="menu-category">
                    <span className="category-title">Library</span>
                    <a href="#" className="menu-item">
                        <i className="bi bi-clock menu-icon"></i>
                        Recently Added
                    </a>
                    <a href="#" className="menu-item">
                        <i className="bi bi-clock-history menu-icon"></i>
                        Most played
                    </a>
                </div>

                <div className="menu-category">
                    <span className="category-title">Playlist and favorite</span>
                    <a href="#" className="menu-item">
                        <i className="bi bi-heart menu-icon"></i>
                        Your favorites
                    </a>
                    <a href="#" className="menu-item">
                        <i className="bi bi-music-note-list menu-icon"></i>
                        Your playlist
                    </a>
                    <a href="#" className="menu-item add-playlist">
                        <i className="bi bi-plus-square menu-icon"></i>
                        Add playlist
                    </a>
                </div>

                //comment test

                <div className="menu-category">
                    <span className="category-title">general</span>
                    <a href="#" className="menu-item">
                        <i className="bi bi-gear menu-icon"></i>
                        Setting
                    </a>
                    <a href="#" className="menu-item logout">
                        <i className="bi bi-box-arrow-right menu-icon"></i>
                        Logout
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Menu;
