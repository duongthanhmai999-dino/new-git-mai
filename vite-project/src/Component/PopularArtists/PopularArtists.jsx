import './PopularArtists.css';
import eminemImg from '../ImageArtist/Superman.png';
import imagineDragonsImg from '../ImageArtist/WhateverItTakes.png';
import adeleImg from '../ImageArtist/Skyfall.png';
import lanaImg from '../ImageArtist/Softcore.png';
import harryImg from '../ImageArtist/TheLonliest.png';
import billieImg from '../ImageArtist/Billieeilishimg.png';

const PopularArtists = () => {
    const artists = [
        { image: eminemImg, name: 'Eminem' },
        { image: imagineDragonsImg, name: 'Imagine Dragons' },
        { image: adeleImg, name: 'Adele' },
        { image: lanaImg, name: 'Lana Del Rey' },
        { image: harryImg, name: 'Harry Styles' },
        { image: billieImg, name: 'Billie Eilish' },
    ];

    return (
        <div className="popular-artists">
            <h2 className="popular-artists-title">
                Popular <span className="popular-artists-highlight">Artists</span>
            </h2>
            <div className="popular-artists-list">
                {artists.map((artist, index) => (
                    <div key={index} className="popular-artist-card">
                        <div className="popular-artist-avatar">
                            <img src={artist.image} alt={artist.name} />
                        </div>
                        <p className="popular-artist-name">{artist.name}</p>
                    </div>
                ))}
                <button className="popular-view-all-btn">
                    <i className="bi bi-plus-lg"></i>
                    <span>View All</span>
                </button>
            </div>
        </div>
    );
};

export default PopularArtists;
