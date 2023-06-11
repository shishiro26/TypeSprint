import React from "react";
import randomWords from "random-words";
import { useState, useEffect, useRef } from "react";
import "../css/play.css";
function Play() {
  const countWords = 200;
  const maxTime = 60;
  // const childRef = useRef(null);
  const [words, setWords] = useState([]);
  const [timer, setTimer] = useState(maxTime);
  const spanRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [currInput, setCurrInput] = useState("");
  // const span = document.querySelectorAll(".paraBox span");
  useEffect(() => {
    setWords(generateWords);
  }, []);
  function generateWords() {
    return new Array(countWords).fill(null).map((words) => randomWords());
  }
  const handleStart = () => {
    const timeInterval = setInterval(() => {
      setTimer((time) => {
        if (time === 0) {
          return clearInterval(timeInterval);
        } else {
          return time - 1;
        }
      });
    }, 1000);
  };

  const typingText = () => {
    return (
      <>
        {words.map((word, i) => (
          <span id={i}>
            {word.split("").map((letter, id) => (
              <span key={id} ref={spanRef}>
                {letter}
              </span>
            ))}
            <span> </span>
          </span>
        ))}
      </>
    );
  };

  const handleInputChange = (e) => {
    setCurrInput(e.target.value);
    console.log(e.target.value);
    // console.log(e.target.length);
    const typedText = e.target.value;

    const currentWord = words[index];
    const currentLetter = currentWord.charAt(typedText.length - 1);
    console.log("The current letter is " + currentLetter);
    if (typedText === currentWord) {
      setCurrInput("");
      console.log("Word completed!");
      setIndex((prevIndex) => prevIndex + 1);
    } else if (typedText.charAt(typedText.length - 1) === currentLetter) {
      console.log("Correct letter!");
      const spanChild = spanRef.current;
      spanChild.className = "correct";

      if (typedText.length === currentWord.length) {
        console.log("Word completed!");

        setCurrInput("");
        setIndex((prevIndex) => prevIndex + 1);
      }
    } else {
      console.log("Incorrect letter!");
    }
  };

  return (
    <div className="wrapper">
      <input
        type="text"
        className="typedChar"
        onChange={handleInputChange}
        value={currInput}
      />
      <ul>
        <li>
          <div>
            timer:
            <span>{maxTime}</span>
          </div>
        </li>
        <li>
          <div>
            wpm:
            <span>56</span>
          </div>
        </li>
      </ul>
      <button className={handleStart}>start</button>
      <div
        className="paraBox"
        style={{
          margin: "10px",
          boxShadow: "2px 5px 10px rgba(0,0,0,0.5)",
          padding: "10px 15px",
        }}
      >
        {typingText()}
      </div>
    </div>
  );
}

export default Play;
