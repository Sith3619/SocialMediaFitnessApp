import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/header/header";
import Body from "./components/body/body";
import Footer from "./components/footer/footer";
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import AboutUs from "./pages/aboutUs";
import PrivacyPolicy from "./pages/privacyPolicy";
import Contact from "./pages/contact";
import { auth } from "./components/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./index.css";

const PageOne = () => <div>First Page Nisith</div>;
const PageTwo = () => <div>Second Page Ephraim</div>;
const PageThree = () => <div>Third Page Cedrick</div>;

function ProtectedRoute({ children }) {
  const [user] = useAuthState(auth);
  return user ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Body />
              </ProtectedRoute>
            }
          />
          <Route
            path="/page-one"
            element={
              <ProtectedRoute>
                <PageOne />
              </ProtectedRoute>
            }
          />
          <Route
            path="/page-two"
            element={
              <ProtectedRoute>
                <PageTwo />
              </ProtectedRoute>
            }
          />
          <Route
            path="/page-three"
            element={
              <ProtectedRoute>
                <PageThree />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
