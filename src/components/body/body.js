import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./body.css";

function Body() {
  const [user] = useAuthState(auth);
  const [profileName, setProfileName] = useState("Username");
  const [profileBio, setProfileBio] = useState("This is a bio.");
  const [profilePic, setProfilePic] = useState("");

  const defaultProfilePic =
    "https://www.caribbeangamezone.com/wp-content/uploads/2018/03/avatar-placeholder.png";

  useEffect(() => {
    if (user) {
      const fetchProfile = async () => {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = docSnap.data();
          setProfileName(userData.name || "Username");
          setProfileBio(userData.bio || "This is a bio.");
          setProfilePic(userData.profilePic || defaultProfilePic);
        } else {
          console.log("No profile data found for user.");
          setProfilePic(defaultProfilePic);
        }
      };

      fetchProfile();
    }
  }, [user]);

  return (
    <main>
      <div className="content">
        <div className="sidebar">
          <h2>User Profile</h2>
          <div className="profile">
            <img src={profilePic} alt="User Profile" className="profile-pic" />
            <p>{profileName}</p>
            <p>{profileBio}</p>
            <button>Follow</button>
          </div>
          <h3>Recent Activity</h3>
          <ul>
            <li>Liked a post</li>
          </ul>
        </div>

        <div className="feed">
          <h1>Welcome to the Social Media Fitness App!</h1>
          <div className="post">
            <div className="post-header">
              <img src={profilePic} alt="User Avatar" className="post-avatar" />
              <span>{profileName}</span>
            </div>
            <p>Just beat garry on StepUp!</p>
            <button className="like-btn">Like</button>
            <button className="comment-btn">Comment</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Body;
