import './Albums.css';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import coverImg from '../ImageArtist/titleimg.png';
import Softcore from '../ImageArtist/Softcore.png';
import SkyFallBeat from '../ImageArtist/SkyfallBeats.png';
import Greedy from '../ImageArtist/Greedy.png';
import Lovionme from '../ImageArtist/LovinOnme.png';
import painthetownred from '../ImageArtist/painthetownred.png';
import DancinOnNight from '../ImageArtist/DancinOnNight.png';
import Water from '../ImageArtist/Water.png';
import Pushyourimits from '../ImageArtist/Pushyourimits.png';
import Houdini from '../ImageArtist/Houdini.png';
import Lala from '../ImageArtist/Lala.png';
import IWanaaBeYours from '../ImageArtist/IWanaaBeYours.png';
import Paradise from '../ImageArtist/Paradise.png';
import AsItWas from '../ImageArtist/AsItWas.png';
import AnotherLove from '../ImageArtist/AnotherLove.png';
import Daylight from '../ImageArtist/dayline.png';
import Beggin from '../ImageArtist/Beggin.png';
import WhatWasIMadeFor from '../ImageArtist/WhatWasIMadeF....png';
import DaddyIssues from '../ImageArtist/DaddyIssues.png';
import RollingInTheDeep from '../ImageArtist/RollingInTheDeep.png';
import OneShot from '../ImageArtist/OneShot.png';

const Albums = () => {
    const navigate = useNavigate();
    const songs = [
        { image: Softcore, title: 'Softcore', artist: 'The neighborhood', release: 'Nov 4, 2023', album: 'Hard to Imagine Neighbourhood Ever Changing', duration: '3:26' },
        { image: SkyFallBeat, title: 'Skyfall Beats', artist: 'nightmares', release: 'Dec 30, 2023', album: 'Greedy', duration: '2:11' },
        { image: Greedy, title: 'Greedy', artist: 'tate mcrae', release: 'Oct 5, 2012', album: 'Skyfall', duration: '4:46' },
        { image: Lovionme, title: 'Lovin On me', artist: 'jack harlow', release: 'May 26, 2002', album: 'The Eminem Show', duration: '5:50' },
        { image: painthetownred, title: 'pain the town red', artist: 'Doja Cat', release: 'Oct 7, 2022', album: 'Rush!', duration: '4:07' },
        { image: DancinOnNight, title: 'Dancin On Night', artist: 'Dua Lipa', release: 'May 27, 2023', album: 'Dance The Night (From Barbie Movie)', duration: '2:56' },
        { image: Water, title: 'Water', artist: 'Tyla', release: 'Oct 21, 2023', album: 'Water', duration: '3:20' },
        { image: Pushyourimits, title: 'Push your limits', artist: 'Brian michael', release: 'Jan 2, 2024', album: 'Push your limits', duration: '2:24' },
        { image: Houdini, title: 'Houdini', artist: 'Dualipa', release: 'Dec 12, 2023', album: 'Houdini', duration: '3:05' },
        { image: Lala, title: 'Lala', artist: 'myke towers', release: 'Nov 20, 2023', album: 'La vida es una', duration: '3:17' },
        { image: IWanaaBeYours, title: 'I Wanaa Be Yours', artist: 'arctic monkeys', release: 'Sep 9, 2023', album: 'AM', duration: '3:03' },
        { image: Paradise, title: 'Paradise', artist: 'braaheim', release: 'Jul 5, 2023', album: 'Paradise', duration: '2:30' },
        { image: AsItWas, title: 'As It Was', artist: 'Harry Styles', release: 'Sep 14, 2022', album: 'As It Was', duration: '2:47' },
        { image: AnotherLove, title: 'Another Love', artist: 'Tom Odell', release: 'Dec 19, 2013', album: 'Another Love', duration: '4:06' },
        { image: Daylight, title: 'Daylight', artist: 'david kushner', release: 'Jun 16, 2022', album: 'Daylight', duration: '3:32' },
        { image: Beggin, title: 'Beggin', artist: 'Måneskin', release: 'Feb 27, 2017', album: 'Chosen', duration: '3:31' },
        { image: WhatWasIMadeFor, title: 'What Was I Made For', artist: 'Billie eilish', release: 'Sep 6, 2023', album: 'What Was I Made For', duration: '3:42' },
        { image: DaddyIssues, title: 'Daddy Issues', artist: 'The Neighbourhood', release: 'Aug 21, 2015', album: 'Wiped out', duration: '4:20' },
        { image: RollingInTheDeep, title: 'Rolling In The Deep', artist: 'Adele', release: 'Jun 5, 2011', album: 'Adele 21', duration: '3:48' },
        { image: OneShot, title: 'OneShot', artist: 'mhst', release: 'Dec 14, 2023', album: 'Toca Donka', duration: '1:15' },
    ];

    return (
        <div className="app albums-page">
            <div className="app-content">
                <div className="albums-playlist-wrap">
                    <div className="playlist-detail-card">
                        {/* Header với gradient */}
                        <div className="playlist-detail-header">
                            <div className="playlist-detail-nav">
                                <button className="playlist-detail-back" onClick={() => navigate(-1)}>
                                    <i className="bi bi-arrow-left-short"></i>
                                </button>
                                <div className="playlist-detail-links">
                                    <div className="playlist-detail-nav-icons">
                                        <a href="#">Share</a>
                                        <a href="#">About</a>
                                        <a href="#">Premium</a>
                                    </div>
                                    <button className="playlist-detail-profile">
                                        <i className="bi bi-person-circle"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="playlist-detail-hero">
                                <div className="playlist-detail-cover-info">
                                    <div className="playlist-detail-cover-wrap">
                                        <img src={coverImg} alt="Trending Music" className="playlist-detail-cover" />
                                    </div>
                                    <div className="playlist-detail-info">
                                        <h1 className="playlist-detail-title">
                                            Trending songs <span className="playlist-detail-title-accent">mix</span>
                                        </h1>
                                        <p className="playlist-detail-artists">
                                            tate mcrae, nightmares, the neighborhood, doja cat and ...
                                        </p>
                                        <div className="playlist-detail-meta">
                                            <span>20 songs</span>
                                            <span className="playlist-detail-dot">•</span>
                                            <span>1h 36m</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="playlist-detail-play-wrap">
                                    <div className="playlist-detail-play">
                                        <span className="playlist-detail-play-text">Play All</span>
                                        <button className="playlist-detail-play-btn">
                                            <i className="bi bi-play-circle"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bảng danh sách bài hát - có độ loang màu */}
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
                                    <div key={index} className="playlist-detail-row-wrap">
                                        <span className="playlist-detail-rank">{index + 1}</span>
                                        <div className={`playlist-detail-row ${index === 1 ? 'playlist-detail-row--active' : ''}`}>
                                        <div className="playlist-detail-song-cell">
                                            <div className="playlist-detail-thumb">
                                                <img src={song.image} alt={song.title} />
                                            </div>
                                            <div className="playlist-detail-song-info">
                                                <p className="playlist-detail-song-title">{song.title}</p>
                                                <p className="playlist-detail-song-artist">{song.artist}</p>
                                            </div>
                                        </div>
                                        <span className="playlist-detail-release">{song.release}</span>
                                        <span className="playlist-detail-album">{song.album}</span>
                                        <div className="playlist-detail-meta-cell">
                                            <i className="bi bi-heart playlist-detail-heart"></i>
                                            <span className="playlist-detail-duration">{song.duration}</span>
                                            <i className="bi bi-three-dots playlist-detail-menu"></i>
                                        </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Albums;
