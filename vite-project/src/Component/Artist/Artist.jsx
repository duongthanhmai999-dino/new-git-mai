import './Artist.css';
import '../Albums/Albums.css';
import { useNavigate } from 'react-router-dom';
import EminemImg from '../ImageArtist/Eminem.png';
import NavBar from '../Albums/NavBar';
import LayoutBanner from '../Albums/LayoutBanner';
import Footer from '../Footer/Footer';
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
import LaceIt from '../ImageArtist/LaceIt.png';
import realest from '../ImageArtist/releast.png';
import FromtheD2theLBC from '../ImageArtist/FromtheD2theLBC.png';
import Img911 from '../ImageArtist/911.png';
import Killshot from '../ImageArtist/Killshot.png';
import FullCollection from '../ImageArtist/FullCollection.png';
import BestOfEminem from '../ImageArtist/BestOfEminem.png';
import OldSongs from '../ImageArtist/OldSongs.png';
import FansFavorite from '../ImageArtist/FansFavorite.png';
import NewReleaseSo from '../ImageArtist/New Release So.png';
import SnoopDog from '../ImageArtist/SnoopDog.png';
import Tupac from '../ImageArtist/Tupac.png';
import FiftyCent from '../ImageArtist/50Cent.png';
import JayZ from '../ImageArtist/Jay-z.png';
import layout3 from '../ImageArtist/layout3.png';

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
        { image: LaceIt, title: 'Lace It', year: '2023' },
        { image: realest, title: 'releast', year: '2022' },
        { image: FromtheD2theLBC, title: 'From the D 2 the LBC', year: '2023' },
        { image: Img911, title: '911', year: '2022' },
        { image: Killshot, title: 'Killshot', year: '2018' },
    ];

    const playlists = [
        { image: FullCollection, titleOnImage: 'Full Collecion', subtitle: 'Full Collection' },
        { image: BestOfEminem, titleOnImage: 'Best Of Eminem', subtitle: 'Best Of Eminem' },
        { image: OldSongs, titleOnImage: 'Old Songs', subtitle: 'Old Songs' },
        { image: FansFavorite, titleOnImage: 'Fan favorite', subtitle: "Fan's Favorite" },
        { image: NewReleaseSo, titleOnImage: 'New Release', subtitle: 'New Release So...' },
    ];

    const fansAlsoListenTo = [
        { image: FiftyCent, name: '50 Cent' },
        { image: SnoopDog, name: 'Snoop Dogg' },
        { image: Tupac, name: '2Pac' },
        { image: JayZ, name: 'Jay-Z' },
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
                        <h2 className="artist-albums-title h1">
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
                        <h2 className="artist-singles-title h2">
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
                                            <i className="bi bi-music-note-beamed"></i>
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
                    <section className="artist-playlist-section">
                        <h2 className="artist-playlist-title h2">
                            Artist's <span className="artist-playlist-accent">Playlist</span>
                        </h2>
                        <div className="artist-playlist-list">
                            {playlists.map((playlist, i) => (
                                <div key={i} className="artist-playlist-card">
                                    <div className="artist-playlist-cover-wrap">
                                        <img src={playlist.image} alt={playlist.subtitle} />
                                    </div>
                                    <div className="artist-playlist-details">
                                        <div className="artist-playlist-title-text">{playlist.subtitle}</div>
                                        <div className="artist-playlist-play-indicator">
                                            <i className="bi bi-music-note-list"></i>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="artist-playlist-view-all">
                                <div className="artist-playlist-view-all-icon">
                                    <span className="material-icons">add</span>
                                </div>
                                <span className="artist-playlist-view-all-text">View All</span>
                            </div>
                        </div>
                    </section>
                    <section className="artist-fans-section">
                        <h2 className="artist-fans-title h2">
                            Eminem Fans <span className="artist-fans-accent">Also Listen To</span>
                        </h2>
                        <div className="artist-fans-list">
                            {fansAlsoListenTo.map((artist, i) => (
                                <div key={i} className="artist-fans-card">
                                    <div className="artist-fans-avatar">
                                        <img src={artist.image} alt={artist.name} />
                                    </div>
                                    <p className="artist-fans-name">{artist.name}</p>
                                </div>
                            ))}
                            <div className="artist-fans-view-all">
                                <div className="artist-fans-view-all-icon">
                                    <span className="material-icons">add</span>
                                </div>
                                <span className="artist-fans-view-all-text">View All</span>
                            </div>
                        </div>
                    </section>
                </div>
                <LayoutBanner layoutImg={layout3} />
                <Footer />
            </div>
        </div>
    );
}
export default Artist;