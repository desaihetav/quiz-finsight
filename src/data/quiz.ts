import { Quiz } from "./quiz.types";

export const allQuizzes: Array<Quiz> = [
  {
    id: "d7470db1-a896-4f48-a07d-f83cf4a51587",
    name: "Are you a real Suits fan?",
    totalScore: 20,
    questions: [
      {
        id: "a673ebf5-7f22-42b3-91c2-394dabec45b2",
        question:
          "Harvey Specter is considered one of New York's most brilliant corporate litigation lawyers, but what's his unusual middle name?",
        points: 10,
        negativePoints: 5,
        options: [
          {
            id: "eb73ab9b-8a6d-4d7c-873d-c6592a7b4561",
            content: `Michael`,
            isAnswer: false,
          },
          {
            id: "f3884a17-621d-45fc-95e3-598a8a9b7bfc",
            content: `Reginald`,
            isAnswer: true,
          },
          {
            id: "7d653525-6031-452e-a194-e0e6cea370b8",
            content: `Brandon`,
            isAnswer: false,
          },
        ],
      },
      {
        id: "f03ecdac-1107-4664-93ff-7308160b0b63",
        question: "Which partner loves mudding and had a cat named Bruno?",
        points: 10,
        negativePoints: 5,
        options: [
          {
            id: "edec5436-c49f-4905-9770-a550fe97dcf3",
            content: `Harvey Specter`,
            isAnswer: false,
          },
          {
            id: "85c708f7-edfa-4c74-b6f4-40bc293adc7e",
            content: `Jessica Pearson`,
            isAnswer: false,
          },
          {
            id: "a83fdc09-d65d-4bf0-aeda-483d50d7211c",
            content: `Louis Litt`,
            isAnswer: true,
          },
        ],
      },
    ],
  },
];
