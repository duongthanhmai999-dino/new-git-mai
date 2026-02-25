import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-columns">
                    <div className="footer-about">
                        <h3 className="footer-title">About</h3>
                        <p className="footer-about-text">
                            Melodies is a website that has been created for over <span className="footer-highlight-pink">5 year's</span> now and it is one of the most famous music player website's in the world. in this website you can listen and download songs for free. also of you want no limitation you can buy our <span className="footer-highlight-blue">premium pass's</span>.
                        </p>
                    </div>
                    <div className="footer-section">
                        <h3 className="footer-title footer-title-underline">Melodi</h3>
                        <ul className="footer-links">
                            <li><a href="#">Songs</a></li>
                            <li><a href="#">Radio</a></li>
                            <li><a href="#">Podcast</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3 className="footer-title footer-title-underline">Access</h3>
                        <ul className="footer-links">
                            <li><a href="#">Explore</a></li>
                            <li><a href="#">Artists</a></li>
                            <li><a href="#">Playlists</a></li>
                            <li><a href="#">Albums</a></li>
                            <li><a href="#">Trending</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3 className="footer-title footer-title-underline">Contact</h3>
                        <ul className="footer-links">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Policy</a></li>
                            <li><a href="#">Social Media</a></li>
                            <li><a href="#">Support</a></li>
                        </ul>
                    </div>
                    <div className="footer-brand">
                        <h3 className="footer-brand-name">Melodies</h3>
                        <div className="footer-social">
                            <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                            <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                            <a href="#" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
                            <a href="#" aria-label="Phone"><i className="bi bi-telephone"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;