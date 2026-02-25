import './SongSection.css';
import whateverItTakes from '../ImageArtist/WhateverItTakes.png';
import skyfall from '../ImageArtist/Skyfall.png';
import superman from '../ImageArtist/Superman.png';
import softcore from '../ImageArtist/Softcore.png';
import theLonliest from '../ImageArtist/TheLonliest.png';
import timeImg from '../ImageArtist/Time.png';
import img112 from '../ImageArtist/img112.png';
import weDontCare from '../ImageArtist/Wedontcare.png';
import whoIAm from '../ImageArtist/WhoIAm.png';
import baixo from '../ImageArtist/Baixo.png';

const SongSection = () => {
    return (
        <div className="song-section">
            <div className="song-row">
                <h2 className="song-row-title">
                    Weekly Top <span className="song-row-highlight">Songs</span>
                </h2>
                <div className="song-cards">
                    <div className="song-card">
                        <div className="song-card-image">
                            <img src={whateverItTakes} alt="Whatever It Takes" />
                        </div>
                        <p className="song-card-title">Whatever It Takes</p>
                        <p className="song-card-artist">Imagine Dragons</p>
                        <i className="bi bi-music-note-beamed song-card-icon"></i>
                    </div>
                    <div className="song-card">
                        <div className="song-card-image">
                            <img src={skyfall} alt="Skyfall" />
                        </div>
                        <p className="song-card-title">Skyfall</p>
                        <p className="song-card-artist">Adele</p>
                        <i className="bi bi-music-note-beamed song-card-icon"></i>
                    </div>
                    <div className="song-card">
                        <div className="song-card-image">
                            <img src={superman} alt="Superman" />
                        </div>
                        <p className="song-card-title">Superman</p>
                        <p className="song-card-artist">Eminem</p>
                        <i className="bi bi-music-note-beamed song-card-icon"></i>
                    </div>
                    <div className="song-card">
                        <div className="song-card-image">
                            <img src={softcore} alt="Softcore" />
                        </div>
                        <p className="song-card-title">Softcore</p>
                        <p className="song-card-artist">The Neighborhood</p>
                        <i className="bi bi-music-note-beamed song-card-icon"></i>
                    </div>
                    <div className="song-card">
                        <div className="song-card-image">
                            <img src={theLonliest} alt="The Lonliest" />
                        </div>
                        <p className="song-card-title">The Lonliest</p>
                        <p className="song-card-artist">Måneskin</p>
                        <i className="bi bi-music-note-beamed song-card-icon"></i>
                    </div>
                    <button className="view-all-btn">
                        <i className="bi bi-plus-lg"></i>
                        <span>View All</span>
                    </button>
                </div>
            </div>

            <div className="song-row">
                <h2 className="song-row-title">
                    New Release <span className="song-row-highlight">Songs</span>
                </h2>
                <div className="song-cards">
                    <div className="song-card">
                        <div className="song-card-image">
                            <img src={timeImg} alt="Time" />
                        </div>
                        <p className="song-card-title">Time</p>
                        <p className="song-card-artist">Luciano</p>
                        <i className="bi bi-music-note-beamed song-card-icon"></i>
                    </div>
                    <div className="song-card">
                        <div className="song-card-image">
                            <img src={img112} alt="112" />
                        </div>
                        <p className="song-card-title">112</p>
                        <p className="song-card-artist">jazzek</p>
                        <i className="bi bi-music-note-beamed song-card-icon"></i>
                    </div>
                    <div className="song-card">
                        <div className="song-card-image">
                            <img src={weDontCare} alt="We don't care" />
                        </div>
                        <p className="song-card-title">We don't care</p>
                        <p className="song-card-artist">Kyanu & Dj Gullum</p>
                        <i className="bi bi-music-note-beamed song-card-icon"></i>
                    </div>
                    <div className="song-card">
                        <div className="song-card-image">
                            <img src={whoIAm} alt="Who I Am" />
                        </div>
                        <p className="song-card-title">Who I Am</p>
                        <p className="song-card-artist">Alan Walker & Elias</p>
                        <i className="bi bi-music-note-beamed song-card-icon"></i>
                    </div>
                    <div className="song-card">
                        <div className="song-card-image">
                            <img src={baixo} alt="Baixo" />
                        </div>
                        <p className="song-card-title">Baixo</p>
                        <p className="song-card-artist">XXAnteria</p>
                        <i className="bi bi-music-note-beamed song-card-icon"></i>
                    </div>
                    <button className="view-all-btn">
                        <i className="bi bi-plus-lg"></i>
                        <span>View All</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SongSection;
