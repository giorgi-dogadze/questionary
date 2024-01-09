import React, { useState } from "react";
import "./Quiz.css";

const FinalQuestion = ({
  score,
  amount,
}: {
  score: number;
  amount: number;
}) => {
  const [showImage, setShowImage] = useState(false);

  return (
    <div className="result-container">
      <h1>
        Your score: {score} / {amount}
      </h1>
      <p>
        {score === amount
          ? "Congratulations Mariam, you aced the quiz! You are smart, funny, and awesome. Will you go out with me?"
          : "Sorry Mariam, you didn't pass the quiz. But don't worry, I still like you because I think you are cool. Will you go out with me?"}
      </p>
      <div>
        <button className="answer-container" onClick={() => setShowImage(true)}>
          YES
        </button>
        <button className="answer-container">YES</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        P.S sorry I don't have database attached to this web-site, so you can
        write confirmation in DMs😆
      </div>

      {showImage && (
        <div>
          <img src="https://www.memesmonkey.com/images/memesmonkey/07/0728d3fd7c4ea4f610393ec0390b3e91.jpeg" />
        </div>
      )}
    </div>
  );
};

export default FinalQuestion;
