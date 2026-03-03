const ProfileCard = ({ user }) => {
    return (
        <div className="profile-card">
            <div className="profile-avatar">
                <i className="bi bi-person-circle"></i>
            </div>
            <h1 className="profile-name">{user.name}</h1>
            <p className="profile-email">{user.email}</p>
            {user.phone && <p className="profile-phone">{user.phone}</p>}
        </div>
    );
};

export default ProfileCard;
