import React from "react";
import video from "../assets/project_intro.mp4";
import { Link } from "react-router-dom";
import "../css/home.css";
function Home() {
  return (
    <div
      className="parentVideo"
      style={{ backgroundColor: "black", height: "10%" }}
    >
      <video
        src={video}
        // width="100%"
        // height="0%"
        autoPlay
        loop
        style={{
          opacity: "0.2",
          zIndex: "-999",
        }}
      />
      <div
        className="textOverlay"
        style={{
          position: "absolute",
          top: "50%",
          zIndex: "999",
          color: "white",
        }}
      >
        <h1
          style={{
            fontSize: "50px",
          }}
        >
          Master the Keyboard!
        </h1>
        <p
          style={{
            fontSize: "20px",
            padding: "15px",
            margin: "5px",
          }}
        >
          Unleash your typing potential with our interactive tests
        </p>
        <button className="btnStart">
          <Link
            to="/play"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            Start
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Home;
