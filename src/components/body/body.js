import React from "react";
import "./body.css";
import ProfilePlaceholder from "../assets/AvatarPlaceholder.avif"; // Make sure the path is correct

function Body() {
  return (
    <main>
      <div className="content">
        <div className="sidebar">
          <h2>User Profile</h2>
          <div className="profile">
            <img
              src={ProfilePlaceholder}
              alt="User Profile"
              className="profile-pic"
            />
            <p>Username</p>
            <button>Follow</button>
          </div>
          <h3>Recent Activity</h3>
          <ul>
            <li>Liked a post</li>
            <li>Commented on a photo</li>
            <li>Started following John Doe</li>
          </ul>
        </div>

        <div className="feed">
          <h1>Welcome to the Social Media Fitness App!</h1>
          <div className="post">
            <div className="post-header">
              <img
                src={ProfilePlaceholder}
                alt="User Avatar"
                className="post-avatar"
              />
              <span>Nisith Jayalath</span>
            </div>
            <p>Just beat garry on StepUp!</p>
            <button className="like-btn">Like</button>
            <button className="comment-btn">Comment</button>
          </div>
          <div className="post">
            <div className="post-header">
              <img
                src={ProfilePlaceholder}
                alt="User Avatar"
                className="post-avatar"
              />
              <span>Ephraim Wesley</span>
            </div>
            <p>First Filler Body Content</p>
            <button className="like-btn">Like</button>
            <button className="comment-btn">Comment</button>
          </div>
          <div className="post">
            <div className="post-header">
              <img
                src={ProfilePlaceholder}
                alt="User Avatar"
                className="post-avatar"
              />
              <span>Cedric Nkansah</span>
            </div>
            <p>Second Filler Body Content</p>
            <button className="like-btn">Like</button>
            <button className="comment-btn">Comment</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Body;
