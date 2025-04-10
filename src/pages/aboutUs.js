import React from "react";
import "./pageStyles/aboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container fade-in">
      <h1 className="about-title">About Us</h1>
      <div className="about-content">
        <p className="about-description">
          Welcome to SithDwellers Management, your trusted partner in real
          estate management. Our team is dedicated to providing top-tier
          services to property owners, tenants, and investors, ensuring smooth
          transactions and long-lasting relationships.
        </p>
        <p className="about-description">
          With years of experience in the industry, we specialize in property
          management, investment strategies, and a comprehensive understanding
          of the market. We are committed to providing tailored solutions to
          meet your unique needs.
        </p>
        <p className="about-description">
          Our mission is to make real estate management as hassle-free and
          efficient as possible. Whether you're a first-time investor or a
          seasoned property owner, we’re here to support you every step of the
          way.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
