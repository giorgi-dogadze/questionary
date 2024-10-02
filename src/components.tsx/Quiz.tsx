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
      text: "Which artist is known for creating massive sculptures that convey deep emotions?",
      options: ["Michelangelo", "Auguste Rodin", "Gustav Vigeland", "Jeff Koons"],
      answer: 2,
    },
    {
      text: "When you look at a painting, what's the first thing you notice?",
      options: ["The colors", "The emotion", "The technique", "How it would look on my wall"],
      answer: 1,
    },
    {
      text: "What's more important in life?",
      options: [
        "Waiting for the perfect moment",
        "Good Khinkali",
        "Not waiting for the perfect moment and just diving in",
        "Ordering takeout before the moment passes",
      ],
      answer: 2,
    },
    {
      text: "If happiness comes in waves, how would you ride yours?",
      options: [
        "With a surfboard and sunglasses",
        "Chilling on the beach, waiting for the next one",
        "Building a sandcastle between waves",
        "Diving right into the water, no hesitation",
      ],
      answer: 3,
    },
    {
      text: "What's the best way to make a memory last forever?",
      options: [
        "Take a photo and frame it",
        "Paint it with dark colors for deep vibes",
        "Write it down and keep it safe",
        "Live in the moment so intensely you never forget it",
      ],
      answer: 3,
    },
    {
      text: "If you had to create a mural that represented your life, what would it feature?",
      options: [
        "A bold splash of colors and random shapes",
        "A self-portrait surrounded by fruits and veggies",
        "A clock ticking, but with no numbers",
        "Something so abstract, people would talk about it for hours",
      ],
      answer: 2,
    },
    {
      text: "How can you stop spring from coming?",
      options: [
        "Not by cutting all the flowers",
        "By not crossing dates on the calendar",
        "By wearing winter clothe in spring",
      ],
      answer: 0,
    },
    {
      text: "What’s the best way to seize the moment?",
      options: [
        "Capture it in a painting or photo",
        "Live it without overthinking",
        "Say 'yes' to new experiences",
        "All of the above, and then some",
      ],
      answer: 3,
    },
    {
      text: "Sometimes you don’t need to ask, just a glance is enough... But what does the glance say?",
      options: [
        "I'm hungry, let’s get food",
        "I have a great idea for a mural",
        "We should totally do something cool together",
        "I think you’re really awesome, no words needed",
      ],
      answer: 3,
    },
    {
      text: "If time is ticking and memories are fleeting, what should you do right now?",
      options: [
        "Take a deep breath and enjoy the moment",
        "Make the best memories you can—right now!",
        "Take the moment and make it perfect",
        "Text that cool person you're thinking about",
      ],
      answer: 3,
    },
    {
      text: "How do you tell someone you think that she is amazing and super cool?",
      options: [
        "Paint a painting for her",
        "Cook dinner for her",
        "Invite them to a gallery opening",
        "Create a personalized Quiz website for her in hopes that she will spare your heart and decide to get to know you",
      ],
      answer: 3,
    }
  ]

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

