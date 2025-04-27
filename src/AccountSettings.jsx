import React from "react";
import "./App.css";

function AccountSettings() {
  const user = {
    name: "Marrydoe",
    email: "marry@gmail.com",
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, perferendis!",
    description: "Lorem ipsum dolor sit amet.",
    profilePic: "https://randomuser.me/api/portraits/women/44.jpg" // or you can use your own image
  };

  return (
    <div className="account-container">
      <h2>Account Settings</h2>
      <div className="account-card">
        <div className="profile-section">
          <img src={user.profilePic} alt="Profile" className="profile-pic" />
          <div className="camera-icon">📷</div>
        </div>
        <div className="user-info">
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
        <div className="user-description">
          <p>{user.about}</p>
          <p>{user.description}</p>
        </div>
      </div>
    </div>
  );
}

export default AccountSettings;
