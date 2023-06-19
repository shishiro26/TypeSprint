import React from "react";
import shishiro from "../assets/shishiroaka.jpg";
import "../css/profile.css";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Montserrat&display=swap"],
  },
});

function Profile() {
  return (
    <div className="profileContainer">
      <div
        style={{
          width: "814px",
          height: "414px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "10px",
          padding: "10px 15px",
          fontFamily: "Montserrat,sans-serif",
          background: "transparent",
          boxShadow: "2px 5px 10px rgba(0,0,0,0.5)",
          borderRadius: "10px",
        }}
      >
        <div
          className="displayProfile"
          style={{
            width: "500px",
            borderRadius: "14px",
            margin: "15px",
            padding: "10px 15px",
          }}
        >
          <img src={shishiro} alt="shishiro" className="profileImage" />
        </div>
        <div
          style={{
            textTransform: "uppercase",
            padding: "15px",
            margin: "5px",
            zIndex: "999",
          }}
        >
          <h1>Welcome,Shishiro</h1>
          <ul
            style={{
              listStyle: "none",
              fontSize: "20px",
              textTransform: "capitalize",
              padding: "15px",
              margin: "5px",
            }}
          >
            <li>
              <div
                style={{
                  marginBottom: "5px",
                }}
              >
                Name:
                <span
                  style={{
                    marginLeft: "5px",
                  }}
                >
                  Shishiro
                </span>
              </div>
            </li>
            <li>
              <div
                style={{
                  marginBottom: "5px",
                }}
              >
                Email:
                <span
                  style={{
                    marginLeft: "5px",
                  }}
                >
                  LCS2022014@iiitl.ac.in
                </span>
              </div>
            </li>
            <li>
              <div
                style={{
                  marginBottom: "5px",
                }}
              >
                Contact:
                <span
                  style={{
                    marginLeft: "5px",
                  }}
                >
                  +91 81212 78087
                </span>
              </div>
            </li>
            <li>
              <div
                style={{
                  marginBottom: "5px",
                }}
              >
                DOB:
                <span
                  style={{
                    marginLeft: "5px",
                  }}
                >
                  26-April-2005
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
