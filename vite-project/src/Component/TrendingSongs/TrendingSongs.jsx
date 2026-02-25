import './TrendingSongs.css';
import Softcore from '../ImageArtist/Softcore.png';
import SkyFallBeat from '../ImageArtist/SkyfallBeats.png';
import Greedy from '../ImageArtist/Greedy.png';
import Lovionme from '../ImageArtist/LovinOnme.png';
import painthetownred from '../ImageArtist/painthetownred.png';
import DancinOnNight from '../ImageArtist/DancinOnNight.png';
import Water from '../ImageArtist/Water.png';

const TrendingSongs = () => { 
    return (
        <div className="trending-songs">
            <div className="trending-title-block">
                <h2 className="trending-title">
                    <span className="trending-title-grey">Trending</span>{' '}
                    <span className="trending-title-purple">Songs</span>
                </h2>
            </div>

            <div className="trending-table">
                <div className="trending-header-row">
                    <span className="trending-span"></span>
                    <div className="trending-table-header">
                        <span className="trending-col trending-col-empty"></span>
                        <span className="trending-col">Release Date</span>
                        <span className="trending-col">album</span>
                        <span className="trending-col">Time</span>
                    </div>
                </div>

                <div className="trending-table-body">
                <div className="trending-row-wrap">
                    <span className="trending-rank">#1</span>
                    <div className="trending-row">
                    <div className="trending-song-cell">
                        <div className="trending-album-art">
                            <img src={Softcore} alt="Softcore" />
                        </div>
                        <div className="trending-info">
                            <p className="trending-song-title">Softcore</p>
                            <p className="trending-artist">The neighborhood</p>
                        </div>
                    </div>
                    <span className="trending-release">Nov 4, 2023</span>
                    <span className="trending-album">Hard to Imagine the Neighbourhood Ever Changing</span>
                    <div className="trending-meta">
                        <i className="bi bi-heart trending-heart"></i>
                        <span className="trending-duration">3:26</span>
                    </div>
                    </div>
                </div>

                <div className="trending-row-wrap">
                    <span className="trending-rank">#2</span>
                    <div className="trending-row">
                    <div className="trending-song-cell">
                        <div className="trending-album-art">
                            <img src={SkyFallBeat} alt="Skyfall Beats" />
                        </div>
                        <div className="trending-info">
                            <p className="trending-song-title">Skyfall Beats</p>
                            <p className="trending-artist">nightmares</p>
                        </div>
                    </div>
                    <span className="trending-release">Dec 30, 2023</span>
                    <span className="trending-album">Greedy</span>
                    <div className="trending-meta">
                        <i className="bi bi-heart trending-heart"></i>
                        <span className="trending-duration">2:11</span>
                    </div>
                    </div>
                </div>

                <div className="trending-row-wrap">
                    <span className="trending-rank">#3</span>
                    <div className="trending-row">
                    <div className="trending-song-cell">
                        <div className="trending-album-art">
                            <img src={Greedy} alt="Greedy" />
                        </div>
                        <div className="trending-info">
                            <p className="trending-song-title">Greedy</p>
                            <p className="trending-artist">tate mcrae</p>
                        </div>
                    </div>
                    <span className="trending-release">Oct 5, 2012</span>
                    <span className="trending-album">Skyfall</span>
                    <div className="trending-meta">
                        <i className="bi bi-heart trending-heart"></i>
                        <span className="trending-duration">4:46</span>
                    </div>
                    </div>
                </div>

                <div className="trending-row-wrap">
                    <span className="trending-rank">#4</span>
                    <div className="trending-row">
                    <div className="trending-song-cell">
                        <div className="trending-album-art">
                            <img src={Lovionme} alt="Lovin On me" />
                        </div>
                        <div className="trending-info">
                            <p className="trending-song-title">Lovin On me</p>
                            <p className="trending-artist">jack harlow</p>
                        </div>
                    </div>
                    <span className="trending-release">May 26, 2002</span>
                    <span className="trending-album">The Eminem Show</span>
                    <div className="trending-meta">
                        <i className="bi bi-heart trending-heart"></i>
                        <span className="trending-duration">5:50</span>
                    </div>
                    </div>
                </div>

                <div className="trending-row-wrap">
                    <span className="trending-rank">#5</span>
                    <div className="trending-row">
                    <div className="trending-song-cell">
                        <div className="trending-album-art">
                            <img src={painthetownred} alt="pain the town red" />
                        </div>
                        <div className="trending-info">
                            <p className="trending-song-title">pain the town red</p>
                            <p className="trending-artist">Doja Cat</p>
                        </div>
                    </div>
                    <span className="trending-release">Oct 7, 2022</span>
                    <span className="trending-album">Rush!</span>
                    <div className="trending-meta">
                        <i className="bi bi-heart trending-heart"></i>
                        <span className="trending-duration">4:07</span>
                    </div>
                    </div>
                </div>

                <div className="trending-row-wrap">
                    <span className="trending-rank">#6</span>
                    <div className="trending-row">
                    <div className="trending-song-cell">
                        <div className="trending-album-art">
                            <img src={DancinOnNight} alt="Dancin On Night" />
                        </div>
                        <div className="trending-info">
                            <p className="trending-song-title">Dancin On Night</p>
                            <p className="trending-artist">Dua Lipa</p>
                        </div>
                    </div>
                    <span className="trending-release">Mar 15, 2024</span>
                    <span className="trending-album">Radical Optimism</span>
                    <div className="trending-meta">
                        <i className="bi bi-heart trending-heart"></i>
                        <span className="trending-duration">3:45</span>
                    </div>
                    </div>
                </div>

                <div className="trending-row-wrap">
                    <span className="trending-rank">#7</span>
                    <div className="trending-row">
                    <div className="trending-song-cell">
                        <div className="trending-album-art">
                            <img src={Water} alt="Water" />
                        </div>
                        <div className="trending-info">
                            <p className="trending-song-title">Water</p>
                            <p className="trending-artist">Tyla</p>
                        </div>
                    </div>
                    <span className="trending-release">Mar 15, 2024</span>
                    <span className="trending-album">Water</span>
                    <div className="trending-meta">
                        <i className="bi bi-heart trending-heart"></i>
                        <span className="trending-duration">3:45</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <button className="trending-view-all">
                <i className="bi bi-plus-lg"></i>
                <span>View All</span>
            </button>
        </div>
    );
};

export default TrendingSongs;
