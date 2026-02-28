import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import TopBar from '../TopBar/TopBar';
import './Profile.css';

const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="profile-page">
      <TopBar />
      <div className="profile-content">
        <div className="profile-card">
          <div className="profile-avatar">
            <i className="bi bi-person-circle"></i>
          </div>
          <h1 className="profile-name">{user.name}</h1>
          <p className="profile-email">{user.email}</p>
          {user.phone && <p className="profile-phone">{user.phone}</p>}
        </div>
      </div>
    </div>
  );
};

export default Profile;
