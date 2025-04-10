import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { doc, getDoc, setDoc, collection, updateDoc } from "firebase/firestore";
import { db, auth } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./body.css";
import {
  FaHeart,
  FaComment,
  FaCrown,
  FaShareAlt,
} from "react-icons/fa";

function Body() {
  const [user] = useAuthState(auth);
  const [profileName, setProfileName] = useState("Username");
  const [profileBio, setProfileBio] = useState("This is a bio.");
  const [profilePic, setProfilePic] = useState("");
  const [posts, setPosts] = useState([]);
  const [newPostContent, setNewPostContent] = useState("");
  const [newPostMedia, setNewPostMedia] = useState("");
  const [leaderboard, setLeaderboard] = useState([]);
  const [comments, setComments] = useState({});
  const [likes, setLikes] = useState({});
  const [achievements, setAchievements] = useState([
    {
      title: "Leg Day King",
      description: "Completed 10 leg day workouts in a month!",
    },
    {
      title: "Morning Runner",
      description: "Ran 5km every morning for 30 days!",
    },
  ]);
  const [gridView, setGridView] = useState(true);
  const [currentComment, setCurrentComment] = useState("");

  const defaultProfilePic =
    "https://i0.wp.com/moneysmart.training/wp-content/uploads/2019/03/avatar-placeholder.png?fit=204%2C204&ssl=1";

  const navigate = useNavigate();

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
          setProfilePic(defaultProfilePic);
        }
      };

      fetchProfile();
    }

    const fetchPosts = async () => {
      setPosts([
        {
          id: 1,
          type: "image",
          src: "https://plus.unsplash.com/premium_photo-1664109999537-088e7d964da2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D",
          caption: "Crushed today's leg day! 🏋️‍♂️",
        },
        {
          id: 2,
          type: "image",
          src: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
          caption: "My fitness journey ",
        },
        {
          id: 3,
          type: "image",
          src: "https://images.unsplash.com/photo-1483721310020-03333e577078?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D",
          caption: "Early morning run to start the day 🏃‍♂️",
        },
        {
          id: 4,
          type: "image",
          src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D",
          caption: "Personal best on deadlift 🏋️‍♂️",
        },
        {
          id: 5,
          type: "image",
          src: "https://plus.unsplash.com/premium_photo-1664109999775-3f1f3f212ad8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
          caption: "Resting up after a long workout ",
        },
        {
          id: 6,
          type: "image",
          src: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
          caption: "Post-workout Group Session",
        },
        {
          id: 7,
          type: "image",
          src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
          caption: "Let's crush this HIIIIIT session! 🔥",
        },
        {
          id: 8,
          type: "image",
          src: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
          caption: "New personal best in squats! 🏋️‍♂️",
        },
        {
          id: 9,
          type: "image",
          src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
          caption: "Morning yoga session 🧘‍♀️",
        },
        {
          id: 10,
          type: "image",
          src: "https://images.unsplash.com/photo-1550345332-09e3ac987658?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
          caption: "Never skip leg day! 🦵",
        },
        {
          id: 11,
          type: "image",
          src: "https://images.unsplash.com/photo-1539794830467-1f1755804d13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
          caption: "Stretching it out post-workout ",
        },
        {
          id: 12,
          type: "image",
          src: "https://images.unsplash.com/photo-1549476464-37392f717541?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
          caption: "Feeling strong after today's workout 💪",
        },
      ]);
    };

    fetchPosts();

    setLeaderboard([
      { name: "Ephreim", score: 1200 },
      { name: "Cedric", score: 1150 },
      { name: "Nisith", score: 1100 },
    ]);
  }, [user]);

  const handlePostSubmit = async () => {
    if (!newPostContent) return;

    const newPost = {
      id: posts.length + 1,
      caption: newPostContent,
      type: newPostMedia ? "image" : "video",
      src: newPostMedia || "https://via.placeholder.com/600x400",
    };

    setPosts([newPost, ...posts]);

    setNewPostContent("");
    setNewPostMedia("");
  };

  const handleLike = (postId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [postId]: (prevLikes[postId] || 0) + 1,
    }));
  };

  const handleComment = (postId, comment) => {
    setComments((prevComments) => ({
      ...prevComments,
      [postId]: [...(prevComments[postId] || []), comment],
    }));
  };

  const handleCommentSubmit = (postId) => {
    if (!currentComment.trim()) return;
    handleComment(postId, currentComment);
    setCurrentComment("");
  };

  const handleShare = (postId) => {
    alert(`Shared post ID: ${postId} to social media!`);
  };

  const handleLeaderboardClick = () => {
    navigate("/leaderboard");
  };

  return (
    <main className="body-container fade-in">
      <div className="content">
        <div className="sidebar">
          <div className="profile">
            <img src={profilePic} alt="User Profile" className="profile-pic" />
            <p className="profile-name">{profileName}</p>
            <p className="profile-bio">{profileBio}</p>
            <button
              className="toggle-view-btn"
              onClick={() => setGridView(!gridView)}
            >
              {gridView ? "Switch to List View" : "Switch to Grid View"}
            </button>
          </div>

          <div
            className="leaderboard"
            onClick={handleLeaderboardClick}
            style={{ cursor: "pointer" }}
          >
            <h3>🏆 Leaderboard</h3>
            <ul>
              {leaderboard.map((entry, index) => (
                <li key={index} className="leaderboard-entry">
                  <FaCrown className="leader-icon" /> {entry.name} -{" "}
                  {entry.score} pts
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="feed">
          <div className="post-creation">
            <textarea
              placeholder="What's on your mind?"
              className="create-post-input"
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
            />
            <input
              type="url"
              placeholder="Enter image or video URL"
              className="create-post-input"
              value={newPostMedia}
              onChange={(e) => setNewPostMedia(e.target.value)}
            />
            <div className="post-creation-actions">
              <button className="post-btn" onClick={handlePostSubmit}>
                Post
              </button>
            </div>
          </div>

          <div
            className="feed-items"
            style={{ gridTemplateColumns: gridView ? "repeat(3, 1fr)" : "1fr" }}
          >
            {posts.map((post) => (
              <div key={post.id} className="post fade-in">
                <div className="post-header">
                  <img
                    src={profilePic}
                    alt="User Avatar"
                    className="post-avatar"
                  />
                  <span>{profileName}</span>
                  <span className="post-time">6 hours ago</span>
                </div>
                <p>{post.caption}</p>
                <div className="media-container">
                  {post.type === "image" ? (
                    <img src={post.src} alt="Post Content" className="media" />
                  ) : (
                    <video className="media" controls>
                      <source src={post.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
                <div className="post-actions">
                  <button
                    className="like-btn"
                    onClick={() => handleLike(post.id)}
                  >
                    <FaHeart /> Like ({likes[post.id] || 0})
                  </button>
                  <button className="comment-btn">
                    <FaComment /> Comment
                  </button>
                  <button
                    className="share-btn"
                    onClick={() => handleShare(post.id)}
                  >
                    <FaShareAlt /> Share
                  </button>
                </div>
                <div className="comments">
                  {comments[post.id] &&
                    comments[post.id].map((comment, index) => (
                      <div key={index} className="comment">
                        {comment}
                      </div>
                    ))}
                </div>
                <div className="comment-input-container">
                  <input
                    type="text"
                    placeholder="Write a comment..."
                    value={currentComment}
                    onChange={(e) => setCurrentComment(e.target.value)}
                    className="comment-input"
                  />
                  <button
                    onClick={() => handleCommentSubmit(post.id)}
                    className="submit-comment-btn"
                  >
                    Post Comment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Body;
