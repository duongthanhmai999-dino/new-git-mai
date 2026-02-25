import './MusicVideo.css';
import gossipImg from '../ImageArtist/Gossip.png';
import shapeOfYouImg from '../ImageArtist/ShapeOfYou.png';
import someoneLikeYouImg from '../ImageArtist/SomeoneLikeYou.png';

const MusicVideo = () => {
    const videos = [
        { image: gossipImg, title: 'Gossip', artist: 'Måneskin', views: '231K views' },
        { image: shapeOfYouImg, title: 'Shape Of You', artist: 'Ed Sheeran', views: '5M views' },
        { image: someoneLikeYouImg, title: 'Someone Like You', artist: 'Adele', views: '3M views' },
    ];

    return (
        <div className="music-video">
            <h2 className="music-video-title">
                Music <span className="music-video-highlight">Video</span>
            </h2>
            <div className="music-video-list">
                {videos.map((video, index) => (
                    <div key={index} className="music-video-card">
                        <div className="music-video-thumbnail">
                            <img src={video.image} alt={video.title} />
                        </div>
                        <div className="music-video-details">
                            <p className="music-video-card-title">{video.title}</p>
                            <div className="music-video-meta">
                                <p className="music-video-card-artist">{video.artist}</p>
                                <span className="music-video-views">{video.views}</span>
                            </div>
                        </div>
                    </div>
                ))}
                <button className="music-video-view-all-btn">
                    <i className="bi bi-plus-lg"></i>
                    <span>View All</span>
                </button>
            </div>
        </div>
    );
};

export default MusicVideo;
