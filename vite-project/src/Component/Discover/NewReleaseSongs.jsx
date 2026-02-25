import '../SongSection/SongSection.css';
import './NewReleaseSongs.css';
import timeImg from '../ImageArtist/Time.png';
import img112 from '../ImageArtist/img112.png';
import weDontCare from '../ImageArtist/Wedontcare.png';
import whoIAm from '../ImageArtist/WhoIAm.png';
import baixo from '../ImageArtist/Baixo.png';

const NewReleaseSongs = () => {
    const songs = [
        { image: timeImg, title: 'Time', artist: 'Luciano' },
        { image: img112, title: '112', artist: 'jazzek' },
        { image: weDontCare, title: "We don't care", artist: 'Kyanu & Dj Gullum' },
        { image: whoIAm, title: 'Who I Am', artist: 'Alan Walker & Elias' },
        { image: baixo, title: 'Baixo', artist: 'XXAnteria' },
    ];

    return (
        <div className="new-release-songs">
            <div className="song-row">
                <h2 className="song-row-title">
                    New Release <span className="song-row-highlight">Songs</span>
                </h2>
                <div className="song-cards">
                    {songs.map((song, index) => (
                        <div key={index} className="song-card">
                            <div className="song-card-image">
                                <img src={song.image} alt={song.title} />
                            </div>
                            <p className="song-card-title">{song.title}</p>
                            <p className="song-card-artist">{song.artist}</p>
                            <i className="bi bi-music-note-beamed song-card-icon"></i>
                        </div>
                    ))}
                    <button className="view-all-btn">
                        <i className="bi bi-plus-lg"></i>
                        <span>View All</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewReleaseSongs;
