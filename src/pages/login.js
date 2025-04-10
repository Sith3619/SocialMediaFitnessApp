import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, db, googleProvider } from "../components/firebase/firebase";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "./pageStyles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        console.log("User Info:", userDoc.data());
      }

      navigate("/");
    } catch (error) {
      setError("Invalid email or password");
      console.error("Error during email login:", error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        console.log("User Info:", userDoc.data());
      } else {
        console.log("New user detected, creating user document...");
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          profilePicture: user.photoURL,
        });
      }

      navigate("/");
    } catch (error) {
      setError("Google sign-in failed");
      console.error("Error during Google login:", error.message);
    }
  };

  return (
    <div className="login-container">
      <h2 className="title">Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
      <button onClick={handleGoogleLogin} className="google-login-btn">
        Sign in with Google
      </button>
      <p className="signup-text">
        Don't have an account?{" "}
        <a href="/SocialMediaFitnessApp/signUp" className="signup-link">
          Sign Up
        </a>
      </p>
    </div>
  );
};

export default Login;
