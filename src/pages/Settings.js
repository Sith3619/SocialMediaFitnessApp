import React, { useState } from "react";
import "./pageStyles/settings.css";

function Settings({ theme, setTheme }) {
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    alert(`Theme changed to ${newTheme}`);
  };

  return (
    <div className="settings-page">
      <h2>Account Settings</h2>

      <label>Email:</label>
      <input
        type="email"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
      />
      <button onClick={() => alert("Email updated!")}>Save Email</button>

      <label>Password:</label>
      <input
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button onClick={() => alert("Password updated!")}>Save Password</button>
    </div>
  );
}

export default Settings;
