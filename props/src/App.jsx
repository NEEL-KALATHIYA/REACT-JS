import React from "react";
import UserProfile from "./UserProfile.jsx";

const App = () => {
  return (
    <div>
      <UserProfile
        user={{
          name: "Rajat sinha",
          age: 26,
          bio: "Full Stack MERN Trainer @ Red & White | Proficient in Java Spring Boot | DSA | Open to Opportunities in Full Stack Development ",
          location: "Ranchi Jharkhand",
          profilePicture: "https://avatars.githubusercontent.com/u/111138210?v=4",
        }}
      />
    </div>
  );
};

export default App;