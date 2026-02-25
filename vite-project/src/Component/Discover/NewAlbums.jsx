import './NewAlbums.css';
import { Link } from 'react-router-dom';
import iGotHeavenImg from '../ImageArtist/IGotHeaven.png';
import saviorsImg from '../ImageArtist/Saviors.png';
import lossOfLifeImg from '../ImageArtist/LossofLife.png';
import allQuietImg from '../ImageArtist/AllQuietontheEasternEsplanade.png';
import littleRopeImg from '../ImageArtist/LittleRope.png';

const NewAlbums = () => {
    const albums = [
        { image: iGotHeavenImg, title: 'I Got Heaven', artist: 'Mannequin', selected: false },
        { image: saviorsImg, title: 'Saviors', artist: 'Green Day', selected: true },
        { image: lossOfLifeImg, title: 'Loss of Life', artist: 'MGMT', selected: false },
        { image: allQuietImg, title: 'All Quiet on the Eastern Esplanade', artist: 'The Libertines', selected: false },
        { image: littleRopeImg, title: 'Little Rope', artist: 'Sleater-Kinney', selected: false },
    ];

    return (
        <div className="new-albums">
            <h2 className="new-albums-title">
                New <span className="new-albums-highlight">Albums</span>
            </h2>
            <div className="new-albums-list">
                {albums.map((album, index) => (
                    <div
                        key={index}
                        className={`new-albums-card ${album.selected ? 'new-albums-card--selected' : ''}`}
                    >
                        <div className="new-albums-cover">
                            <img src={album.image} alt={album.title} />
                        </div>
                        <div className="new-albums-details">
                            <p className="new-albums-card-title">{album.title}</p>
                            <p className="new-albums-card-artist">{album.artist}</p>
                        </div>
                        <span className="new-albums-icon material-icons">album</span>
                    </div>
                ))}
                <Link to="/albums" className="new-albums-view-all-btn">
                    <i className="bi bi-plus-lg"></i>
                    <span>View All</span>
                </Link>
            </div>
        </div>
    );
};

export default NewAlbums;
