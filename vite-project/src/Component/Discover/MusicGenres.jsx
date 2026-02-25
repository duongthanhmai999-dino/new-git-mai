import './MusicGenres.css';
import rapTracksImg from '../ImageArtist/RapTracks.png';
import popTracksImg from '../ImageArtist/PopTracks.png';
import rockTracksImg from '../ImageArtist/RockTracks.png';
import classicTracksImg from '../ImageArtist/ClassicTracks.png';

const MusicGenres = () => {
    const genres = [
        { image: rapTracksImg, title: 'Rap Tracks' },
        { image: popTracksImg, title: 'Pop Tracks' },
        { image: rockTracksImg, title: 'Rock Tracks' },
        { image: classicTracksImg, title: 'Classic Tracks' },
    ];

    return (
        <div className="music-genres">
            <h2 className="music-genres-title">
                Music <span className="music-genres-highlight">Genres</span>
            </h2>
            <div className="music-genres-list">
                {genres.map((genre, index) => (
                    <div key={index} className="music-genres-card">
                        <div className="music-genres-thumbnail">
                            <img src={genre.image} alt={genre.title} />
                            <span className="music-genres-card-title">{genre.title}</span>
                        </div>
                    </div>
                ))}
                <button className="music-genres-view-all-btn">
                    <i className="bi bi-plus-lg"></i>
                    <span>View All</span>
                </button>
            </div>
        </div>
    );
};

export default MusicGenres;