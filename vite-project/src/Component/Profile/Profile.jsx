import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import TopBar from '../TopBar/TopBar';
import ProfileCard from './ProfileCard';
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
        <ProfileCard user={user} />
      </div>
    </div>
  );
};

export default Profile;
