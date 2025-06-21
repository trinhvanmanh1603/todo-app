import authStore from "../store/auth/athStore";
import { useNavigate } from "react-router-dom";
import "../styles/components/profile.scss";
const Profile = ({ avatarUrl, username, email, birthday, location, phone }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    authStore.logout();
    navigate("/");
  };
  return (
    <div className="profile">
      <div className="avatar">
        {avatarUrl && (
          <img src={avatarUrl} alt={`${username}'s avatar`} width={40} height={40} />
        )}
      </div>
      <div className="profile-info">
        <span className="username">{username}</span>
        <span className="email">Email: {email}</span>
        <span className="birthday">Birthday: {birthday}</span>
        <span className="location">Location: {location}</span>
        <span className="phone">Phone: {phone}</span>
      </div>
      <div className="profile-actions">
        <button className="edit-button">Edit Profile</button>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Profile;
