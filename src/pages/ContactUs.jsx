import React, { useState, useRef } from "react";
import anime from "./contact.json";
import Lottie from "react-lottie";
import "../css/contactus.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
const defaultOptions = {
  loop: true,
  autoplay: false,
  animationData: anime,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function ContactUs() {
  const lottieRef = useRef(null);
  const playAnime = () => {
    if (lottieRef.current) {
      lottieRef.current.play();
    }
  };
  function handleClick() {
    playAnime();
  }
  return (
    <section className="section">
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ margin: "auto 10px" }}>
          <Lottie
            ref={lottieRef}
            options={defaultOptions}
            height={250}
            width={250}
          />
          <div style={{ margin: "10px" }}>
            <div
              style={{
                display: "flex",
                maxWidth: "700px",
                background: "whitesmoke",
                boxShadow: "2px 5px 10px rgba(0,0,0,0.5)",
                height: "40px",
                padding: "15px 20px",
                borderRadius: "5px",
              }}
            >
              <button
                style={{
                  background: "gray",
                  borderRadius: "50%",
                  border: "none",
                  height: "25px",
                  width: "25px",
                }}
              >
                <FontAwesomeIcon icon={faPhone} />
              </button>
              <p style={{ margin: "5px" }}>+91 81212 78087</p>
            </div>
            <div
              style={{
                display: "flex",
                maxWidth: "700px",
                background: "whitesmoke",
                boxShadow: "2px 5px 10px rgba(0,0,0,0.5)",
                margin: "20px auto",
                height: "40px",
                padding: "15px 20px",
                borderRadius: "5px",
              }}
            >
              <button
                style={{
                  background: "gray",
                  borderRadius: "50%",
                  border: "none",
                  height: "25px",
                  width: "25px",
                }}
              >
                <FontAwesomeIcon icon={faEnvelope} />{" "}
              </button>
              <p style={{ margin: "5px" }}>LCS2022014@iiitl.ac.in</p>
            </div>
            <div
              style={{
                display: "flex",
                maxWidth: "700px",
                background: "whitesmoke",
                boxShadow: "2px 5px 10px rgba(0,0,0,0.5)",
                margin: "20px auto",
                height: "40px",
                padding: "15px 20px",
                borderRadius: "5px",
              }}
            >
              <button
                style={{
                  background: "gray",
                  borderRadius: "50%",
                  border: "none",
                  height: "25px",
                  width: "25px",
                }}
              >
                <FontAwesomeIcon icon={faLocationDot} />{" "}
              </button>
              <p style={{ margin: "5px" }}>
                IIIT Lucknow,chak Ganjaraia,UTTARPRADESH
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            borderRadius: "5px",
            padding: "20px 15px",
            width: "500px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1>Contact Us</h1>
          <div style={{ display: "flex" }}>
            <div className="input-group">
              <label className="label">First Name</label>
              <input
                required=""
                type="text"
                name="text"
                placeholder="FirstName"
                className="firstName"
              />
            </div>
            <div className="input-group">
              <label htmlFor="lastName" className="label">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="firstName"
                placeholder="LastName"
              />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="name" className="label">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="firstName-active"
            />
          </div>
          <div>
            <label htmlFor="number" className="label">
              Phone
            </label>
            <input
              type="number"
              name="number"
              id="number"
              placeholder="Phone"
              className="firstName-active"
              style={{ MozAppearance: "textfield" }}
            />
          </div>
          <div>
            <label htmlFor="complaint" className="label">
              Describe Your issue
            </label>
            <textarea
              style={{ resize: "none" }}
              name="complaint"
              id="complaint"
              cols="30"
              rows="10"
              className="textarea"
              placeholder="Describe your issue "
            ></textarea>
          </div>

          <button className="btn" onClick={handleClick}>
            send
          </button>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
