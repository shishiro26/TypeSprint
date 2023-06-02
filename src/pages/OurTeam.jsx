import React from "react";
import "../css/team.css";
import shishiro from "../assets/shishiroaka.jpg";
import suresh from "../assets/suresh.jpg";
import madhav from "../assets/madhav.jpg";
import madhur from "../assets/madhur.jpg";
import narasimha from "../assets/narasimha.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faDiscord,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function OurTeam() {
  return (
    <section>
      <h1>Who we are?</h1>
      <div className="mainClass">
        <div className="images" style={{ display: "flex" }}>
          <div className="narasimha">
            <img
              src={narasimha}
              alt="narasimha"
              height={300}
              width={300}
              style={{ margin: "5px" }}
            />
            <h2>Narasimha</h2>
            <p className="title">Student</p>
            <p className="college" style={{ margin: "5px" }}>
              IIIT LUCKNOW
            </p>
            <div className="social">
              <FontAwesomeIcon icon={faTwitter} className="tweet" />
              <FontAwesomeIcon icon={faDiscord} className="tweet" />
              <FontAwesomeIcon icon={faInstagram} className="tweet" />
            </div>
          </div>
          <div className="narasimha">
            <img
              src={madhav}
              alt="madhav"
              height={300}
              width={300}
              style={{ margin: "5px" }}
            />
            <h2>Madhav</h2>
            <p className="title">Student</p>
            <p className="college" style={{ margin: "5px" }}>
              IIIT LUCKNOW
            </p>
            <div className="social">
              <FontAwesomeIcon icon={faTwitter} className="tweet" />
              <FontAwesomeIcon icon={faDiscord} className="tweet" />
              <FontAwesomeIcon icon={faInstagram} className="tweet" />
            </div>
          </div>
          <div className="narasimha">
            <img
              src={madhur}
              alt="madhur"
              height={300}
              width={300}
              style={{ margin: "5px" }}
            />
            <h2>Madhur</h2>
            <p className="title">Student</p>
            <p className="college" style={{ margin: "5px" }}>
              IIIT LUCKNOW
            </p>
            <div className="social">
              <FontAwesomeIcon icon={faTwitter} className="tweet" />
              <FontAwesomeIcon icon={faDiscord} className="tweet" />
              <FontAwesomeIcon icon={faInstagram} className="tweet" />
            </div>
          </div>
          <div className="narasimha">
            <img
              src={suresh}
              alt="suresh"
              height={300}
              width={300}
              style={{ margin: "5px" }}
            />
            <h2>Suresh</h2>
            <p className="title">Student</p>
            <p className="college" style={{ margin: "5px" }}>
              IIIT LUCKNOW
            </p>
            <div className="social">
              <FontAwesomeIcon icon={faTwitter} className="tweet" />
              <FontAwesomeIcon icon={faDiscord} className="tweet" />
              <FontAwesomeIcon icon={faInstagram} className="tweet" />
            </div>
          </div>
          <div className="narasimha">
            <img
              src={shishiro}
              alt="shishiro"
              height={300}
              width={300}
              style={{ margin: "5px" }}
            />
            <h2>Shishiro</h2>
            <p className="title">Student</p>
            <p className="college" style={{ margin: "5px" }}>
              IIIT LUCKNOW
            </p>
            <div className="social">
              <FontAwesomeIcon icon={faTwitter} className="tweet" />
              <FontAwesomeIcon icon={faDiscord} className="tweet" />
              <FontAwesomeIcon icon={faInstagram} className="tweet" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
