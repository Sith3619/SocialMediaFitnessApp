import React from "react";
import "./pageStyles/aboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container fade-in">
      <h1 className="about-title">About Us</h1>
      <div className="about-content">
        <p className="about-description">
          Welcome to <strong>FlexCo</strong> – the ultimate fitness-focused
          social media platform where motivation meets community. We’re
          dedicated to helping you stay active, engaged, and on track with your
          health goals, all while connecting with friends and fitness
          enthusiasts.
        </p>
        <p className="about-description">
          At FlexCo, every like, comment, and share earns you points. But that’s
          just the beginning. Use our built-in tools like workout trackers, BMI
          and BMR calculators, and other wellness features to rack up even more
          points. Everything you do contributes to your progress.
        </p>
        <p className="about-description">
          Your points aren’t just for show — they're ranked on a dynamic
          leaderboard, giving you the chance to compete with your friends or
          challenge new connections. Whether you're working out solo or teaming
          up, FlexCo turns your fitness journey into a fun and rewarding
          experience.
        </p>
        <p className="about-description">
          Our mission is to create a supportive space where fitness and social
          interaction go hand-in-hand. No matter your level, FlexCo is here to
          push you forward, keep you accountable, and celebrate every
          achievement along the way.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
