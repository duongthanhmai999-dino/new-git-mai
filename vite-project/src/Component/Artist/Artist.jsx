import './Artist.css';
import '../Albums/Albums.css';
import { useNavigate } from 'react-router-dom';
import EminemImg from '../ImageArtist/Eminem.png';
import NavBar from '../Albums/NavBar';
import ArtistPopularTable from './ArtistPopularTable';
import WithoutMe from '../ImageArtist/WithoutMe.png';
import mockingbird from '../ImageArtist/mockingbird.png';
import TheRealSlimSha from '../ImageArtist/TheRealSlimSha...png';
import LoseYourself from '../ImageArtist/LoseYourself.png';
import Godzila from '../ImageArtist/Godzila.png';
import Encore from '../ImageArtist/Encore.png';
import Recovery from '../ImageArtist/Recovery.png';
import MusicToBeMurdered from '../ImageArtist/MusicTo beMrder.png';
import EminemTheSlim from '../ImageArtist/EminemTheSlim.png';

const Artist = () => {
    const navigate = useNavigate();
    const popularSongs = [
        { image: WithoutMe, title: 'Without Me', artist: 'Eminem', release: 'May 15, 2002', played: '21,215,618', duration: '4:50' },
        { image: mockingbird, title: 'mockingbird', artist: 'Eminem', release: 'Apr 25, 2005', played: '19,856,112', duration: '4:10' },
        { image: TheRealSlimSha, title: 'The Real Slim Sha..', artist: 'Eminem', release: 'May 23, 2000', played: '18,234,567', duration: '4:44' },
        { image: LoseYourself, title: 'Lose Yourself', artist: 'Eminem', release: 'Oct 28, 2002', played: '16,543,210', duration: '5:26' },
        { image: Godzila, title: 'Godzilla', artist: 'Eminem', release: 'Nov 30, 2023', played: '15,123,456', duration: '3:30' },
    ];

    const albums = [
        { image: WithoutMe, title: 'The Eminem Show', year: '2002' },
        { image: Encore, title: 'Encore', year: '2004' },
        { image: MusicToBeMurdered, title: 'Music To Be Murdered By', year: '2020' },
        { image: Recovery, title: 'Recovery', year: '2010' },
        { image: EminemTheSlim, title: 'The Slim Shady LP', year: '1999' },
    ];

    const singleSongs = [
        { image: WithoutMe, title: 'Without Me', year: '2002' },
        { image: LoseYourself, title: 'Lose Yourself', year: '2002' },
        { image: Godzila, title: 'Godzilla', year: '2020' },
    ];

    return (
        <div className="app artist-page">
            <div className="app-content">
                <div className="artist-card-wrap">
                    <div className="artist-img-wrap">
                        <img src={EminemImg} alt="Eminem" className="artist-img" />
                    </div>
                    <div className="artist-nav-bar">
                        <NavBar onBack={() => navigate(-1)} />
                    </div>
                    <ArtistPopularTable songs={popularSongs} />
                    <section className="artist-albums-section">
                        <h2 className="artist-albums-title">
                            Artist's <span className="artist-albums-accent">Albums</span>
                        </h2>
                        <div className="artist-albums-list">
                            {albums.map((album, i) => (
                                <div key={i} className="artist-album-card">
                                    <div className="artist-album-cover-wrap">
                                        <img src={album.image} alt={album.title} />
                                    </div>
                                    <div className="artist-album-details">
                                        <div className="artist-album-title">{album.title}</div>
                                        <div className="artist-album-year">{album.year}</div>
                                        <div className="artist-album-play-indicator">
                                            <span className="material-icons">album</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="artist-album-view-all">
                                <div className="artist-album-view-all-icon">
                                    <span className="material-icons">add</span>
                                </div>
                                <span className="artist-album-view-all-text">View All</span>
                            </div>
                        </div>
                    </section>
                    <section className="artist-singles-section">
                        <h2 className="artist-singles-title">
                            Single <span className="artist-singles-accent">Songs</span>
                        </h2>
                        <div className="artist-singles-list">
                            {singleSongs.map((song, i) => (
                                <div key={i} className="artist-single-card">
                                    <div className="artist-single-cover-wrap">
                                        <img src={song.image} alt={song.title} />
                                    </div>
                                    <div className="artist-single-details">
                                        <div className="artist-single-title">{song.title}</div>
                                        <div className="artist-single-year">{song.year}</div>
                                        <div className="artist-single-play-indicator">
                                            <span className="material-icons">album</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="artist-single-view-all">
                                <div className="artist-single-view-all-icon">
                                    <span className="material-icons">add</span>
                                </div>
                                <span className="artist-single-view-all-text">View All</span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
export default Artist;