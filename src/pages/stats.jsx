import React, { useEffect } from "react";
import "../css/stats.css";
import Play from "./play.jsx"
export default function Stats() {

  useEffect(() => {
    fetch('http://localhost:3030/gameData')
      .then((res) => {
        return res.json();
      }).then(data => {
        console.log(data)
      })
  }, [])
  const rounds = 1;
  const totalWordsTyped = 30;
  const accuracy = 100;
  const wpm = 30;
  return (
    <div className="subpage-container">
      {/* <Play /> */}
      <div className="stats-section">
        <h1 className="stats-heading">STATS</h1>
        <div className="stats-grid">
          <div className="stats-item">
            <h2 className="stats-title">Rounds Completed:</h2>
            <p className="stats-value">{rounds}</p>
          </div>
          <div className="stats-item">
            <h2 className="stats-title">Total Words Typed:</h2>
            <p className="stats-value">{totalWordsTyped}</p>
          </div>
          <div className="stats-item">
            <h2 className="stats-title">Accuracy:</h2>
            <p className="stats-value">{accuracy.toFixed(2)}%</p>
          </div>
          <div className="stats-item">
            <h2 className="stats-title">Words Per Minute (WPM):</h2>
            <p className="stats-value">{wpm}</p>
          </div>
        </div>
      </div>
    </div>
  );
}