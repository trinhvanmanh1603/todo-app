import React, { useState } from "react";
import "../../styles/components/account.scss";
import authStore from "../../store/auth/athStore";
import Profile from "../../components/Profile";
import { useEffect } from "react";

const Account = () => {
  const auth = authStore.getAuth();
  const user = auth.user;
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".account")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);
  if (!user) return null;

  const {
    avatarUrl = "./avatar.jpg",
    username = "Unknown",
    email,
    birthday = "N/A",
    location = "N/A",
    phone = "N/A",
  } = user;

  return (
    <div className="account">
      <div className="avatar" onClick={toggleDropdown}>
        <img src={avatarUrl} alt={`${username} avatar`} width={40} height={40} />
        {isOpen && (
          <div className="dropdown-menu">
            <Profile
              avatarUrl={avatarUrl}
              username={username}
              email={email}
              birthday={birthday}
              location={location}
              phone={phone}
            />
          </div>
        )}
      </div>
      <div className="account-info">
        <span className="username">{username}</span>
        <span className="email">{email}</span>
      </div>
    </div>
  );
};

export default Account;
