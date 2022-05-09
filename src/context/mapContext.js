import React, { useState, useContext } from "react";
import { defaultMap } from "../constants/defaultMap";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [curMap, setCurMap] = useState(defaultMap);
  return (
    <AppContext.Provider value={{ curMap, setCurMap }}>
      {children}
    </AppContext.Provider>
  );
};

export const useMapContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
