import axios from "axios";

export const getAllQuizzes = async () => {
  try {
    const response = await axios.get(
      "https://watch-finsight.desaihetav.repl.co/quiz"
    );
    if (response.data.success) {
      return response.data.allQuizzes;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
