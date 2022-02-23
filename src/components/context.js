import React, { useState } from "react";

export const AppContext = React.createContext();

const AppContainer = ({ children }) => {
  const [sample, setSample] = useState([]);
  return (
    <AppContext.Provider
      value={{
        member: "some value",
        sample,
        setSample,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContainer;
