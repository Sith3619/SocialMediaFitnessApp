import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/header/header";
import Body from "./components/body/body";
import Footer from "./components/footer/footer";
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import AboutUs from "./pages/aboutUs";
import PrivacyPolicy from "./pages/privacyControls";
import HealthCalculator from "./pages/healthCalculator";
import Settings from "./pages/Settings";
import Contact from "./pages/contact";
import CustomWorkoutPlans from "./pages/CustomWorkoutPlans";
import { auth, db } from "./components/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, getDoc } from "firebase/firestore";
import PageTwo from "./pages/pageTwo";
import TermsAndConditions from "./pages/termsConditions";
import PageThree from "./pages/pageThree";
import Leaderboard from "./pages/leaderBoard";

import "./index.css";

function ProtectedRoute({ children }) {
  const [user] = useAuthState(auth);
  return user ? children : <Navigate to="/login" />;
}

function App() {
  const [theme, setTheme] = useState("light");
  const [profileName, setProfileName] = useState("Username");
  const [profileBio, setProfileBio] = useState("This is a bio.");
  const [profilePic, setProfilePic] = useState(
    "https://i0.wp.com/moneysmart.training/wp-content/uploads/2019/03/avatar-placeholder.png?fit=204%2C204&ssl=1"
  );

  useEffect(() => {
    const fetchProfileData = async () => {
      const userDoc = await getDoc(doc(db, "users", auth.currentUser?.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        setProfileName(userData.name);
        setProfileBio(userData.bio);
        setProfilePic(
          userData.profilePic ||
            "https://i0.wp.com/moneysmart.training/wp-content/uploads/2019/03/avatar-placeholder.png?fit=204%2C204&ssl=1"
        );
      }
    };

    if (auth.currentUser) {
      fetchProfileData();
    }
  }, [auth.currentUser]);

  return (
    <BrowserRouter basename="/SocialMediaFitnessApp">
      <div className="app">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/health-calculator" element={<HealthCalculator />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/leaderboard" element={<Leaderboard />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Body
                  profileName={profileName}
                  profileBio={profileBio}
                  profilePic={profilePic}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <PageTwo
                  setProfileName={setProfileName}
                  setProfileBio={setProfileBio}
                  setProfilePic={setProfilePic}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Settings
                  theme={theme}
                  setTheme={setTheme}
                  profileName={profileName}
                  setProfileName={setProfileName}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/custom-workouts"
            element={
              <ProtectedRoute>
                <CustomWorkoutPlans />
              </ProtectedRoute>
            }
          />
          <Route
            path="/trackers"
            element={
              <ProtectedRoute>
                <PageThree />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
