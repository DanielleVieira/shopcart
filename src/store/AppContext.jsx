import { reducer } from "./reducer.js";
import { createContext, useContext, useReducer } from "react";

const AppContext = createContext({});

export const AppProvider = ({ children, initialState }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
