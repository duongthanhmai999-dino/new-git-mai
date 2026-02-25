import './MoodPlaylists.css';
import sadImg from '../ImageArtist/SadPlaylist.png';
import chillImg from '../ImageArtist/ChillPlaylist.png';
import workoutImg from '../ImageArtist/WorkoutSongs.png';
import loveImg from '../ImageArtist/LovePlaylist.png';
import happyImg from '../ImageArtist/HappySongs.png';

const MoodPlaylists = () => {
    const playlists = [
        { image: sadImg, name: 'Sad Playlist' },
        { image: chillImg, name: 'Chill Playlist' },
        { image: workoutImg, name: 'Workout Songs' },
        { image: loveImg, name: 'Love Playlist' },
        { image: happyImg, name: 'Happy Songs' },
    ];

    return (
        <div className="mood-playlists">
            <h2 className="mood-playlists-title">
                Mood <span className="mood-playlists-highlight">Playlists</span>
            </h2>
            <div className="mood-playlists-list">
                {playlists.map((playlist, index) => (
                    <div key={index} className="mood-playlist-card">
                        <div className="mood-playlist-cover">
                            <img src={playlist.image} alt={playlist.name} />
                        </div>
                        <div className="mood-playlist-details">
                            <p className="mood-playlist-name">{playlist.name}</p>
                            <i className="bi bi-music-note-list mood-playlist-icon"></i>
                        </div>
                    </div>
                ))}
                <button className="mood-playlists-view-all-btn">
                    <i className="bi bi-plus-lg"></i>
                    <span>View All</span>
                </button>
            </div>
        </div>
    );
};

export default MoodPlaylists;
