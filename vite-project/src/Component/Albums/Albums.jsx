import './Albums.css';
import TopBar from '../TopBar/TopBar';
import Footer from '../Footer/Footer';
import iGotHeavenImg from '../ImageArtist/IGotHeaven.png';
import saviorsImg from '../ImageArtist/Saviors.png';
import lossOfLifeImg from '../ImageArtist/LossofLife.png';
import allQuietImg from '../ImageArtist/AllQuietontheEasternEsplanade.png';
import littleRopeImg from '../ImageArtist/LittleRope.png';
import adele21Img from '../ImageArtist/Adele21.png';
import beautyBehindImg from '../ImageArtist/BeautyBehindtheMadnesse 21.png';
import scorpionImg from '../ImageArtist/Scorpion.png';
import harrysHouseImg from "../ImageArtist/Harry'sHouse.png";
import bornToDieImg from '../ImageArtist/BornToDie.png';

const Albums = () => {
    const albums = [
        { image: iGotHeavenImg, title: 'I Got Heaven', artist: 'Mannequin' },
        { image: saviorsImg, title: 'Saviors', artist: 'Green Day' },
        { image: lossOfLifeImg, title: 'Loss of Life', artist: 'MGMT' },
        { image: allQuietImg, title: 'All Quiet on the Eastern Esplanade', artist: 'The Libertines' },
        { image: littleRopeImg, title: 'Little Rope', artist: 'Sleater-Kinney' },
        { image: adele21Img, title: 'Adele 21', artist: 'Adele' },
        { image: beautyBehindImg, title: 'Beauty Behind the Madness 21', artist: 'The Weeknd' },
        { image: scorpionImg, title: 'Scorpion', artist: 'Drake' },
        { image: harrysHouseImg, title: "Harry's House", artist: 'Harry Styles' },
        { image: bornToDieImg, title: 'Born To Die', artist: 'Lana Del Rey' },
    ];

    return (
        <div className="app albums-page">
            <div className="app-content">
                <TopBar />
                <div className="albums-wrapper">
                    <h1 className="albums-page-title">
                        <span className="albums-page-highlight">Albums</span>
                    </h1>
                    <div className="albums-grid">
                        {albums.map((album, index) => (
                            <div key={index} className="albums-card">
                                <div className="albums-cover">
                                    <img src={album.image} alt={album.title} />
                                </div>
                                <div className="albums-details">
                                    <p className="albums-card-title">{album.title}</p>
                                    <p className="albums-card-artist">{album.artist}</p>
                                    <span className="albums-icon material-icons">album</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Albums;
