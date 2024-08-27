import React, { useState } from "react";
import "./Quiz.css";
import FinalQuestion from "./FinalQuestion";

interface Question {
  text: string;
  options: string[];
  answer: number;
}



const Quiz: React.FC = () => {
  const [score, setScore] = useState<number>(0);
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);


  const questions: Question[] = [
    {
      text: "Which legendary jazz musician is known for his smooth trumpet sound and cool style?",
      options: ["Chet Baker", "Miles Davis", "Dizzy Gillespie", "Louis Armstrong"],
      answer: 0,
    },
    {
      text: "Which poem by Charles Bukowski features a hidden bird inside the poet?",
      options: ["Bluebird", "The Laughing Heart", "So You Want to Be a Writer", "Dinosauria, We"],
      answer: 0,
    },
    {
      text: "If you could only listen to one Miles Davis album on a deserted island, which one would keep you sane?",
      options: ["Kind of Blue", "Bitches Brew", "Sketches of Spain", "Birth of the Cool"],
      answer: 3,
    },
    {
      text: "If your life were a jazz standard, which one would it be?",
      options: [
        "Autumn Leaves",
        "Take Five",
        "My Funny Valentine",
        "All Blues",
      ],
      answer: 2,
    },
    {
      text: "What would a paintbrush say if it could talk while you’re painting?",
      options: ["'You're doing great!'", "'Can you lighten up on the pressure?'", "'Another masterpiece!'", "'Just don't make me paint another sad face, please.'"],
      answer: 3,
    },
    {
      text: "If you could create a mural anywhere in the world, where would it be?",
      options: ["A Parisian street", "A Brooklyn jazz club", "A sleepy coastal town", "On the walls of your own café"],
      answer: 3,
    },
    {
      text: "What’s a painter’s favorite jazz instrument?",
      options: [
        "A paintbrush that doubles as a saxophone",
        "A trumpet that plays only in shades of blue",
        "A piano that spills paint when you hit the keys",
        "A palette that hums 'My Funny Valentine'",
      ],
      answer: 1,
    },
    {
      text: "How do you tell someone you think they're amazing and super cool?",
      options: [
        "Write them a poem",
        "Compose them a jazz tune",
        "Invite them to a gallery opening",
        "Create a personalized Quiz website for her in hopes that she will spare your heart and decide to get to know you",
      ],
      answer: 3,
    },
  ];

  const handleAnswer = (option: number) => {
    console.log("option", option);
    const isCorrect = option === questions[questionIndex].answer;
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    } else {
    }
    setSelectedOption(option);

    // Automatically move to the next question after a brief delay
    setTimeout(() => {
      setQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedOption(null);
    }, 1000);
  };

  const getCorrectClass = (questionIndex: number, mapIndex: number) => {
    if (selectedOption === mapIndex) {
      return `${selectedOption !== null
        ? mapIndex === questions[questionIndex].answer
          ? "correct"
          : "incorrect"
        : ""
        }
      `;
    }

    if (
      mapIndex === questions[questionIndex].answer &&
      selectedOption !== null
    ) {
      return "correct";
    }

    return "";
  };

  return (
    <div className="quiz-container">
      {questionIndex < questions.length ? (
        <div className="question-container">
          <h1>{questions[questionIndex].text}</h1>
          <ul>
            {questions[questionIndex].options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleAnswer(index)}
                className={getCorrectClass(questionIndex, index)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <FinalQuestion amount={questions.length} score={score} />
      )}
    </div>
  );
};

export default Quiz;

