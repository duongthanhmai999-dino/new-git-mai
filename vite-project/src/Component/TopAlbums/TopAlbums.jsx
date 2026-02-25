import './TopAlbums.css';
import { Link } from 'react-router-dom';
import adele21Img from '../ImageArtist/Adele21.png';
import beautyBehindImg from '../ImageArtist/BeautyBehindtheMadnesse 21.png';
import scorpionImg from '../ImageArtist/Scorpion.png';
import harrysHouseImg from "../ImageArtist/Harry'sHouse.png";
import bornToDieImg from '../ImageArtist/BornToDie.png';

const TopAlbums = () => {
    const albums = [
        { image: adele21Img, title: 'Adele 21', artist: 'Adele' },
        { image: beautyBehindImg, title: 'Beauty Behind the Madness 21', artist: 'The Weeknd' },
        { image: scorpionImg, title: 'Scorpion', artist: 'Drake' },
        { image: harrysHouseImg, title: "Harry's House", artist: 'Harry Styles' },
        { image: bornToDieImg, title: 'Born To Die', artist: 'Lana Del Rey' },
    ];

    return (
        <div className="top-albums">
            <h2 className="top-albums-title">
                Top <span className="top-albums-highlight">Albums</span>
            </h2>
            <div className="top-albums-list">
                {albums.map((album, index) => (
                    <div key={index} className="top-albums-card">
                        <div className="top-albums-cover">
                            <img src={album.image} alt={album.title} />
                        </div>
                        <div className="top-albums-details">
                            <p className="top-albums-card-title">{album.title}</p>
                            <p className="top-albums-card-artist">{album.artist}</p>
                            <span className="material-icons top-albums-album-icon">album</span>
                        </div>
                    </div>
                ))}
                <Link to="/albums" className="top-albums-view-all-btn">
                    <i className="bi bi-plus-lg"></i>
                    <span>View All</span>
                </Link>
            </div>
        </div>
    );
};

export default TopAlbums;
