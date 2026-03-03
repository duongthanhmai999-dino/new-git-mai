import NavBar from './NavBar';

const PlaylistHeader = ({ coverImg, onBack }) => {
    return (
        <div className="playlist-detail-header">
            <div className="playlist-detail-nav-wrap">
                <NavBar onBack={onBack} />
            </div>

            <div className="playlist-detail-hero">
                <div className="playlist-detail-cover-info">
                    <div className="playlist-detail-cover-wrap">
                        <img src={coverImg} alt="Trending Music" className="playlist-detail-cover" />
                    </div>
                    <div className="playlist-detail-info">
                        <h1 className="playlist-detail-title">
                            Trending songs <span className="playlist-detail-title-accent">mix</span>
                        </h1>
                        <p className="playlist-detail-artists">
                            tate mcrae, nightmares, the neighborhood, doja cat and ...
                        </p>
                        <div className="playlist-detail-meta">
                            <span>20 songs</span>
                            <span className="playlist-detail-dot">•</span>
                            <span>1h 36m</span>
                        </div>
                    </div>
                </div>
                <div className="playlist-detail-play-wrap">
                    <div className="playlist-detail-play">
                        <span className="playlist-detail-play-text">Play All</span>
                        <button className="playlist-detail-play-btn">
                            <i className="bi bi-play-circle"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaylistHeader;
