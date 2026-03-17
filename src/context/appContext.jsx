import React, { createContext, useContext, useState } from "react";
import { useFetchUsers } from "../hooks/useFetchUsers";

const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [users, setUsers] = useState([]);

  return (
    <AppContext.Provider value={{ users, setUsers }}>
      {children}
    </AppContext.Provider>
  );
};

// Hook para consumir el context
export const useAppContext = () => useContext(AppContext);