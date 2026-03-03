import ArtistPopularRow from './ArtistPopularRow';

const ArtistPopularTable = ({ songs }) => {
    return (
        <div className="artist-popular-section">
            <h2 className="artist-popular-title artist-popular-text-title">Popular</h2>
            <div className="artist-popular-table-wrap">
                <div className="artist-popular-header-row">
                    <span className="artist-popular-header-rank"></span>
                    <div className="artist-popular-table-header">
                        <span className="artist-popular-col artist-popular-col-empty"></span>
                        <span className="artist-popular-col artist-popular-col-release artist-popular-text-release">Release Date</span>
                        <span className="artist-popular-col artist-popular-col-played artist-popular-text-played">Played</span>
                        <span className="artist-popular-col artist-popular-col-time artist-popular-text-time">Time</span>
                    </div>
                </div>
                <div className="artist-popular-table-body">
                    {songs.map((song, index) => (
                        <ArtistPopularRow key={index} song={song} index={index} />
                    ))}
                </div>
            </div>
            <button className="artist-popular-show-all">Show All</button>
        </div>
    );
};

export default ArtistPopularTable;
