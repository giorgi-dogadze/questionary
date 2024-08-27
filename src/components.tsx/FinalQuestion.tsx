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
          ? "Congratulations Mariam, you aced the quiz! I knew you would do it. so can we get to know each other? 😅"
          : "Sorry Mariam, you didn't pass the quiz. But don't worry, you are still cool! so can we get to know each other? 😅"}
      </p>
      <div>
        <button className="answer-container" onClick={() => setShowImage(true)}>
          YES
        </button>
        <button className="answer-container">YES</button>
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
