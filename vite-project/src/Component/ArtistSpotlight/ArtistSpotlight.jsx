import './ArtistSpotlight.css';
import artistImage from '../ImageArtist/Billieeilishimg.png';

const ArtistSpotlight = () => {
    return (
        <section className="artist-spotlight">
            <button className="spotlight-arrow spotlight-arrow-left">
                <i className="bi bi-chevron-left"></i>
            </button>

            <div className="spotlight-card">
                <div className="spotlight-image-wrap">
                    <img 
                        src={artistImage} 
                        alt="Billie Eilish" 
                        className="spotlight-image"
                    />
                </div>
                <div className="spotlight-content">
                    <h2 className="spotlight-name">Billie eilish</h2>
                    <p className="spotlight-description">
                        You can have easy access to every song of billie eilish by just clicking on the <span className="text-highlight-pink">Listen now</span> button. 
                        You can also <span className="text-highlight-cyan">follow</span> her too for supporting her and keeping it up with what she does.
                    </p>
                    <div className="spotlight-actions">
                        <button className="spotlight-btn spotlight-btn-listen">Listen Now</button>
                        <button className="spotlight-btn spotlight-btn-follow">Follow</button>
                    </div>
                </div>

                <div className="spotlight-dots">
                    <span className="spotlight-dot"></span>
                    <span className="spotlight-dot active"></span>
                    <span className="spotlight-dot"></span>
                    <span className="spotlight-dot"></span>
                    <span className="spotlight-dot"></span>
                </div>
            </div>

            <button className="spotlight-arrow spotlight-arrow-right">
                <i className="bi bi-chevron-right"></i>
            </button>
        </section>
    );
};

export default ArtistSpotlight;
