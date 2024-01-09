import React, { useState } from "react";
import "./Quiz.css";
import FinalQuestion from "./FinalQuestion";

interface Question {
  text: string;
  options: string[];
  answer: number;
}

const questions: Question[] = [
  {
    text: "What is the name of the first computer programmer?",
    options: ["Ada Lovelace", "Grace Hopper", "Alan Turing", "Charles Babbage"],
    answer: 0,
  },
  {
    text: "What is the most popular programming language in 2023?",
    options: ["Python", "JavaScript", "Java", "C#"],
    answer: 1,
  },
  {
    text: "What's an algorithm's favorite dance move?",
    options: [
      "The Quick Sort",
      "The Bubble Sort",
      "The Merge Sort",
      "The Binary Search",
    ],
    answer: 0,
  },
  {
    text: "Why was the JavaScript developer sad?",
    options: [
      "Too many bugs",
      "Callback issues",
      "Undefined emotions",
      "Syntax error in love",
    ],
    answer: 1,
  },
  {
    text: "How does a computer apologize?",
    options: ["Sincerely", "Deeply", "From the bottom of its RAM", "Ctrl + Z"],
    answer: 2,
  },
  {
    text: "How do you comfort a JavaScript bug?",
    options: ["Console.log", "Pet it gently", "Ignore it", "Cry"],
    answer: 2,
  },
  {
    text: "What is the best way to ask someone out on a date?",
    options: [
      "By text",
      "By phone",
      "By email",
      "Create a personalized Quiz website for her",
    ],
    answer: 3,
  },
];

const Quiz: React.FC = () => {
  const [score, setScore] = useState<number>(0);
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

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
      return `${
        selectedOption !== null
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
