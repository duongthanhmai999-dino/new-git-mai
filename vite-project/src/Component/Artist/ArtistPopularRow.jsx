const ArtistPopularRow = ({ song, index }) => {
    return (
        <div className="artist-popular-row-wrap">
            <span className="artist-popular-rank">{index + 1}</span>
            <div className="artist-popular-row">
                <div className="artist-popular-song-cell">
                    <div className="artist-popular-thumb">
                        <img src={song.image} alt={song.title} />
                    </div>
                    <div className="artist-popular-song-info">
                        <p className="artist-popular-song-title artist-popular-text-song">{song.title}</p>
                        <p className="artist-popular-song-artist artist-popular-text-artist">{song.artist}</p>
                    </div>
                </div>
                <span className="artist-popular-release artist-popular-text-meta">{song.release}</span>
                <span className="artist-popular-played artist-popular-text-meta">{song.played}</span>
                <div className="artist-popular-meta-cell">
                    <i className="bi bi-heart artist-popular-heart"></i>
                    <span className="artist-popular-duration artist-popular-text-meta">{song.duration}</span>
                    <i className="bi bi-three-dots artist-popular-menu"></i>
                </div>
            </div>
        </div>
    );
};

export default ArtistPopularRow;
