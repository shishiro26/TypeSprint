import React, { useState } from "react";
import video from "../assets/project_intro.mp4";
import { Link } from "react-router-dom";
import "../css/preview.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import user from "../assets/defaultUser.jpeg";
const persons = [
  {
    id: 1,
    name: "User1",
    role: "User",
    info: "TypeSprint is a  best website to practice the typing and it is too useful to improve the WPM",
    img: `${user}`,
  },

  {
    id: 2,
    name: "User2",
    role: "User",
    info: "TypeSprint is a  best website to practice the typing and it is too useful to improve the WPM",
    img: `${user}`,
  },
  {
    id: 3,
    name: "User3",
    role: "User",
    info: "TypeSprint is a  best website to practice the typing and it is too useful to improve the WPM",
    img: `${user}`,
  },
  {
    id: 4,
    name: "User4",
    role: "User",
    info: "TypeSprint is a  best website to practice the typing and it is too useful to improve the WPM",
    img: `${user}`,
  },

  {
    id: 5,
    name: "User5",
    role: "User",
    info: "TypeSprint is a  best website to practice the typing and it is too useful to improve the WPM",
    img: `${user}`,
  },
];
function HomeBar() {
  const [index, setIndex] = useState(0);
  const { name, role, info, img } = persons[index];

  const nextPerson = () => {
    setIndex((prevIndex) => (prevIndex + 1) % persons.length);
  };

  const prevPerson = () => {
    setIndex((prevIndex) => (prevIndex - 1 + persons.length) % persons.length);
  };

  return (
    <div
      style={{
        height: "100%",
      }}
    >
      <div className="parentVideo" style={{ backgroundColor: "black" }}>
        <video
          src={video}
          autoPlay
          loop
          style={{
            opacity: "0.4",
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
            <div className="underline"></div>
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
              to="/login"
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
      {/* our Review */}
      <div>
        <div
          className="reviewTitle"
          style={{
            zIndex: "999",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1
            className="reviewOne"
            style={{
              marginBottom: "-15px",
            }}
          >
            Our Reviews
          </h1>
          <div className="underline"></div>
        </div>
        <article className="reviewContainer">
          <div className="reviewImg">
            <img src={img} id="image" alt="shishiro" />
          </div>
          <h4 id="name">{name}</h4>
          <p id="role">{role}</p>
          <p id="info">{info}</p>
          <div
            className="button-container"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button className="previous" onClick={prevPerson}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <button className="next" onClick={nextPerson}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}

export default HomeBar;
