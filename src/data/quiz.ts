import { Quiz, Question, Option } from "./quiz.types";

const updateScore = (
  currentScore: number,
  question: Question,
  selectedOption: Option
) => {
  const negativePoints = question.negativePoints ? question.negativePoints : 0;
  return selectedOption.isAnswer
    ? currentScore + question.points
    : currentScore - negativePoints;
};

export const allQuiz: Array<Quiz> = [
  {
    name: "Are you a real Suits fan?",
    questions: [
      {
        question:
          "Harvey Specter is considered one of New York's most brilliant corporate litigation lawyers, but what's his unusual middle name?",
        points: 10,
        options: [
          {
            content: `Michael`,
            isAnswer: false,
          },
          {
            content: `Reginald`,
            isAnswer: true,
          },
          {
            content: `Brandon`,
            isAnswer: false,
          },
        ],
      },
      {
        question: "Which partner loves mudding and had a cat named Bruno?",
        points: 10,
        options: [
          {
            content: `Harvey Specter`,
            isAnswer: false,
          },
          {
            content: `Jessica Pearson`,
            isAnswer: false,
          },
          {
            content: `Louis Litt`,
            isAnswer: true,
          },
        ],
      },
    ],
  },
];
