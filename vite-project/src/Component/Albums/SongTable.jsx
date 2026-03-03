import SongRow from './SongRow';

const SongTable = ({ songs }) => {
    return (
        <div className="playlist-detail-table-wrap">
            <div className="playlist-detail-header-row">
                <span className="playlist-detail-header-rank"></span>
                <div className="playlist-detail-table-header">
                    <span className="playlist-detail-col playlist-detail-col-empty"></span>
                    <span className="playlist-detail-col playlist-detail-col-release">Release Date</span>
                    <span className="playlist-detail-col playlist-detail-col-album">album</span>
                    <span className="playlist-detail-col playlist-detail-col-time">Time</span>
                </div>
            </div>
            <div className="playlist-detail-table-body">
                {songs.map((song, index) => (
                    <SongRow key={index} song={song} index={index} />
                ))}
            </div>
        </div>
    );
};

export default SongTable;
