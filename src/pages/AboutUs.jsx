import React, { useState } from "react";
import "../css/aboutUs.css";
import animationData from "./faq.json";
import Lottie from "react-lottie";
import vout from "../assets/about.jpg";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};



export default function AboutUs() {
  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  const toggleActive1 = () => {
    setActive1(!active1);
  };

  const toggleActive2 = () => {
    setActive2(!active2);
  };

  return (
    <section>
      <div className="gip">
        <h1>About Us</h1>
        <div
          className="textPage"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div
            style={{
              margin: "10px",
              width: "600px",
              height: "300px",
              padding: "30px",
            }}
          >
            <span>
              Welcome to our typing test website! We are passionate about
              helping individuals improve their typing skills and achieve their
              goals. Our team is dedicated to providing a user-friendly platform
              that is both easy to use and informative.
            </span>

            <span>
              Our typing test website was created with the belief that anyone
              can improve their typing skills with practice and dedication. We
              offer a range of typing tests and exercises designed to challenge
              users of all skill levels. Whether you're a beginner looking to
              improve your typing speed or an advanced typist looking to enhance
              your accuracy, we have the tools and resources you need to achieve
              your goals.
            </span>

            <span>
              Our mission is to help our users become more confident and
              proficient typists, whether for personal or professional reasons.
              We understand the importance of typing skills in today's
              fast-paced digital world, and we are committed to helping
              individuals reach their full potential.
            </span>

            <span>
              Thank you for choosing our typing test website. We look forward to
              helping you improve your typing skills and achieve your goals!
            </span>
          </div>

          <div
            className="lottieAnime"
            style={{ position: "relative", top: "-60px", left: "65px" }}
          >
            <img src={vout} alt="about" height={400} width={400} />
          </div>
        </div>
        <div className="faqPage">
          <div className="lottie-container">
            <Lottie
              options={defaultOptions}
              className="lottie"
              height={400}
              width={400}
            />
          </div>
          <div className="faq">
            <h2>General Questions</h2>
            <div className={`question1 ${active ? "question1-active" : ""}`}>
              <button id="button1" onClick={toggleActive}>
                <p>Is Typing Master suitable for beginners?</p>
              </button>
              {active && (
                <p className="hideText3" id="hideText3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
                  hic aliquid a quam! Expedita tempore consectetur autem, vel
                  magnam odio magni eum corporis fuga error dolores optio odit
                  qui quae.
                </p>
              )}
            </div>
            <div className={`question1 ${active1 ? "question1-active" : ""}`}>
              <button id="button2" onClick={toggleActive1}>
                <p>Can I track my typing speed progress on this website?</p>
              </button>
              {active1 && (
                <p className="hideText3" id="hideText3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
                  hic aliquid a quam! Expedita tempore consectetur autem, vel
                  magnam odio magni eum corporis fuga error dolores optio odit
                  qui quae.
                </p>
              )}
            </div>
            <div className={`question1 ${active2 ? "question1-active" : ""}`}>
              <button id="button3" onClick={toggleActive2}>
                <p>Is the website free to use?</p>
              </button>
              {active2 && (
                <p className="hideText3" id="hideText3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
                  hic aliquid a quam! Expedita tempore consectetur autem, vel
                  magnam odio magni eum corporis fuga error dolores optio odit
                  qui quae.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
