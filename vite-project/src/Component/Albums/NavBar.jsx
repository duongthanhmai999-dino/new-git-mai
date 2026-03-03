const NavBar = ({ onBack }) => {
    return (
        <div className="detail-nav-bar">
            <button className="detail-nav-back" onClick={onBack}>
                <i className="bi bi-arrow-left-short"></i>
            </button>
            <div className="detail-nav-links">
                <a href="#">Share</a>
                <a href="#">About</a>
                <a href="#">Premium</a>
                <button className="detail-nav-profile">
                    <i className="bi bi-person-circle"></i>
                </button>
            </div>
        </div>
    );
};

export default NavBar;
