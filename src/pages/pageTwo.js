import React, { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db, auth } from "../components/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./pageStyles/pageTwo.css";

const PageTwo = ({ setProfileName, setProfileBio, setProfilePic }) => {
  const [newName, setNewName] = useState("");
  const [newBio, setNewBio] = useState("");
  const [newPic, setNewPic] = useState("");
  const [user] = useAuthState(auth);

  const handleProfileUpdate = async () => {
    if (user) {
      try {
        const userDocRef = doc(db, "users", user.uid);

        const updatedData = {};

        if (newName) updatedData.name = newName;
        if (newBio) updatedData.bio = newBio;
        if (newPic) updatedData.profilePic = newPic;

        await updateDoc(userDocRef, updatedData);

        if (newName) setProfileName(newName);
        if (newBio) setProfileBio(newBio);
        if (newPic) setProfilePic(newPic);

        alert("Profile Updated!");
      } catch (error) {
        console.error("Error updating profile: ", error);
      }
    }
  };

  return (
    <div className="page-two-container">
      <h2>Update Your Profile</h2>
      <section className="section">
        <label htmlFor="name">Profile Name:</label>
        <input
          type="text"
          id="name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Enter your name"
        />
      </section>
      <section className="section">
        <label htmlFor="bio">Profile Bio:</label>
        <textarea
          id="bio"
          value={newBio}
          onChange={(e) => setNewBio(e.target.value)}
          placeholder="Enter your bio"
        />
      </section>
      <section className="section">
        <label htmlFor="profile-pic">Profile Picture URL:</label>
        <input
          type="text"
          id="profile-pic"
          value={newPic}
          onChange={(e) => setNewPic(e.target.value)}
          placeholder="Enter image URL"
        />
      </section>
      <button onClick={handleProfileUpdate}>Update Profile</button>
    </div>
  );
};

export default PageTwo;
