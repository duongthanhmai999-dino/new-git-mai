import './Artist.css';
const Artist = () => { 
    const EminemImg = '../ImageArtist/Eminem.png';
    return (
        <div className="artist-page">
            <div className="artist-wrap">   
                <img src={EminemImg} alt="Eminem" className="artist-img" />
            </div>
        </div>
    )
}
export default Artist;