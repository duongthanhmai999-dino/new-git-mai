import './MusicVideoDsc.css';
import shapeOfYouImg from '../ImageArtist/ShapeOfYou.png';
import roarImg from '../ImageArtist/Roar.png';
import shakeItOffImg from '../ImageArtist/ShakeItOff.png';
import someoneLikeYouImg from '../ImageArtist/SomeoneLikeYou.png';
import newRulesImg from '../ImageArtist/NewRules.png';
import wakaWakaImg from '../ImageArtist/WakaWaka.png';

const MusicVideoDsc = () => {
    const videos = [
        { image: shapeOfYouImg, title: 'Shape Of You', artist: 'Ed Sheeran', views: '5M views' },
        { image: roarImg, title: 'Roar', artist: 'Katy Perry', views: '4.6M views' },
        { image: shakeItOffImg, title: 'Shake It Off', artist: 'Taylor Swift', views: '4.2M views' },
        { image: someoneLikeYouImg, title: 'Someone Like You', artist: 'Adele', views: '4M views' },
        { image: newRulesImg, title: 'New Rules', artist: 'Dua Lipa', views: '3.7M views' },
        { image: wakaWakaImg, title: 'Waka Waka', artist: 'Shakira', views: '5M views' },
    ];

    return (
        <div className="music-video-dsc">
            <h2 className="music-video-dsc-title">
                Music <span className="music-video-dsc-highlight">Video</span>
            </h2>
            <div className="music-video-dsc-grid">
                <div className="music-video-dsc-cards">
                {videos.map((video, index) => (
                    <div key={index} className="music-video-dsc-card">
                        <div className="music-video-dsc-thumbnail">
                            <img src={video.image} alt={video.title} />
                        </div>
                        <div className="music-video-dsc-details">
                            <p className="music-video-dsc-card-title">{video.title}</p>
                            <div className="music-video-dsc-meta">
                                <p className="music-video-dsc-card-artist">{video.artist}</p>
                                <span className="music-video-dsc-views">{video.views}</span>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
                <button className="music-video-dsc-view-all-btn">
                    <i className="bi bi-plus-lg"></i>
                    <span>View All</span>
                </button>
            </div>
        </div>
    );
};

export default MusicVideoDsc;
