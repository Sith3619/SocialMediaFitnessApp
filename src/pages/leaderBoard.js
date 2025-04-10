import { useState } from "react";
import "./pageStyles/leaderBoard.css";

const sampleLeaderboard = [
  { id: 1, name: "Cedric", points: 980 },
  { id: 2, name: "Nisith", points: 870 },
  { id: 3, name: "Ephreim", points: 1120 },
  { id: 4, name: "Taylor", points: 760 },
  { id: 5, name: "Jordan", points: 1020 },
  { id: 6, name: "Casey", points: 890 },
  { id: 7, name: "Austin", points: 1090 },
  { id: 8, name: "Ethan", points: 810 },
  { id: 9, name: "Liam", points: 940 },
  { id: 10, name: "Noah", points: 1010 },
];

const Leaderboard = () => {
  const [sortedLeaderboard, setSortedLeaderboard] = useState(
    [...sampleLeaderboard].sort((a, b) => b.points - a.points)
  );

  return (
    <div className="leaderboard-container">
      <h2 className="leaderboard-title">🏆 Leaderboard</h2>
      <div className="table-container">
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th className="points-column">Points</th>
            </tr>
          </thead>
          <tbody>
            {sortedLeaderboard.map((user, index) => {
              let rowClassName = "leaderboard-row";
              let rankDisplay = `${index + 1}`;

              if (index === 0) {
                rowClassName = "leaderboard-row first-place";
                rankDisplay = "🥇1st";
              } else if (index === 1) {
                rowClassName = "leaderboard-row second-place";
                rankDisplay = "🥈2nd";
              } else if (index === 2) {
                rowClassName = "leaderboard-row third-place";
                rankDisplay = "🥉3rd";
              }

              return (
                <tr key={user.id} className={rowClassName}>
                  <td className="rank-cell">{rankDisplay}</td>
                  <td>{user.name}</td>
                  <td className="points-cell">{user.points}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="update-info">Last updated: Just now</div>
    </div>
  );
};

export default Leaderboard;
