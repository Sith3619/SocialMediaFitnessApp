import React, { useState, useEffect } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db, auth } from "../components/firebase/firebase";

function Privacy() {
  const [profileVisibility, setProfileVisibility] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  useEffect(() => {
    const fetchUserSettings = async () => {
      const userDoc = await getDoc(doc(db, "users", auth.currentUser.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        setProfileVisibility(userData.profileVisibility);
        setNotificationsEnabled(userData.notificationsEnabled);
      }
    };

    if (auth.currentUser) {
      fetchUserSettings();
    }
  }, []);

  const handlePrivacyChange = async () => {
    const userRef = doc(db, "users", auth.currentUser.uid);
    await updateDoc(userRef, {
      profileVisibility: !profileVisibility,
    });
    setProfileVisibility(!profileVisibility);
  };

  const handleNotificationChange = async () => {
    const userRef = doc(db, "users", auth.currentUser.uid);
    await updateDoc(userRef, {
      notificationsEnabled: !notificationsEnabled,
    });
    setNotificationsEnabled(!notificationsEnabled);
  };

  return (
    <div className="privacy">
      <h2>Privacy Settings</h2>
      <div>
        <label>
          Profile Visibility:
          <button onClick={handlePrivacyChange}>
            {profileVisibility ? "Make Private" : "Make Public"}
          </button>
        </label>
      </div>
      <div>
        <label>
          Enable Notifications:
          <button onClick={handleNotificationChange}>
            {notificationsEnabled ? "Disable" : "Enable"}
          </button>
        </label>
      </div>
    </div>
  );
}

export default Privacy;
