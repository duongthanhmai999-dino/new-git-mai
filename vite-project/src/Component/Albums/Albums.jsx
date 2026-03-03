import './Albums.css';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import PlaylistHeader from './PlaylistHeader';
import SongTable from './SongTable';
import LayoutBanner from './LayoutBanner';
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
import layout3 from '../ImageArtist/layout3.png';

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
                        <PlaylistHeader coverImg={coverImg} onBack={() => navigate(-1)} />
                        <SongTable songs={songs} />
                    </div>
                </div>
                <LayoutBanner layoutImg={layout3} />
                <Footer />
            </div>
        </div>
    );
};

export default Albums;
