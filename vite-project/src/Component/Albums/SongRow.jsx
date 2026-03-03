const SongRow = ({ song, index }) => {
    return (
        <div className="playlist-detail-row-wrap">
            <span className="playlist-detail-rank">{index + 1}</span>
            <div className={`playlist-detail-row ${index === 1 ? 'playlist-detail-row--active' : ''}`}>
                <div className="playlist-detail-song-cell">
                    <div className="playlist-detail-thumb">
                        <img src={song.image} alt={song.title} />
                    </div>
                    <div className="playlist-detail-song-info">
                        <p className="playlist-detail-song-title">{song.title}</p>
                        <p className="playlist-detail-song-artist">{song.artist}</p>
                    </div>
                </div>
                <span className="playlist-detail-release">{song.release}</span>
                <span className="playlist-detail-album">{song.album}</span>
                <div className="playlist-detail-meta-cell">
                    <i className="bi bi-heart playlist-detail-heart"></i>
                    <span className="playlist-detail-duration">{song.duration}</span>
                    <i className="bi bi-three-dots playlist-detail-menu"></i>
                </div>
            </div>
        </div>
    );
};

export default SongRow;
