import {
  createContext,
  FunctionComponent,
  useContext,
  useReducer,
} from "react";
import { quizReducer, quizInitialState } from "../reducers/quiz.reducer";
import { QUIZ_INITIAL_STATE } from "../reducers/quiz.types";
import { DATA_CONTEXT } from "./DataContext.types";

const DataContext = createContext<DATA_CONTEXT>({
  state: quizInitialState,
  dispatch: () => null,
});

export const useData = () => useContext(DataContext);

export const DataProvider: FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, quizInitialState);
  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
