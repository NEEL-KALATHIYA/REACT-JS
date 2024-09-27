import React from "react";


const UserProfile = (props) => {
  const { user } = props;
  return (
    <div>
      <div className="user-profile">
        <img src={user.profilePicture} alt="Profile Picture" />
        <h2>
          {user.name} ({user.age})
        </h2>
        <p>Location: {user.location}</p>
        <p>
          {user.bio.length > 100 ? (
            <>
              {user.bio.substring(0, 130)}... <span>Read more</span>
            </>
          ) : (
            user.bio
          )}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;