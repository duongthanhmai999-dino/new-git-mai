import './Discover.css';
import TopBar from '../TopBar/TopBar';
import MusicGenres from './MusicGenres';
import MoodPlaylists from '../MoodPlaylists/MoodPlaylists';
import PopularAtists from '../PopularArtists/PopularArtists.jsx';
import MusicVideoDsc from './MusicVideoDsc';
import NewReleaseSongs from './NewReleaseSongs';
import NewAlbums from './NewAlbums';
import Footer from '../Footer/Footer';
const Discover = () => {
    return (
        <div className='app discover-page'>
            <div className='app-content'>
               <TopBar /> 
               <div className="discover-music-genres-wrapper">
                   <MusicGenres />
                   <MoodPlaylists />
                   <PopularAtists />
                   <MusicVideoDsc />
                   <NewReleaseSongs />
                   <NewAlbums />
                   <Footer />
               </div>
            </div>
        </div>
    )
}

export default Discover;

