import './Main.css';
import TopBar from '../TopBar/TopBar';
import ArtistSpotlight from '../ArtistSpotlight/ArtistSpotlight';
import SongSection from '../SongSection/SongSection';
import TrendingSongs from '../TrendingSongs/TrendingSongs';
import PopularArtists from '../PopularArtists/PopularArtists.jsx';
import MusicVideo from '../MusicVideo/MusicVideo';
import TopAlbums from '../TopAlbums/TopAlbums';
import MoodPlaylists from '../MoodPlaylists/MoodPlaylists';
import JoinPlatform from '../JoinPlatform/JoinPlatform';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <div className='app'>
            <div className='app-content'>
                <TopBar />
                <ArtistSpotlight />
                <SongSection />
                <TrendingSongs />
                <PopularArtists />
                <MusicVideo />
                <TopAlbums />
                <MoodPlaylists />
                <JoinPlatform />
            </div>
            <Footer />
        </div>
    )
}

export default Main;