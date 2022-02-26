import React, { useState } from "react";

export const AppContext = React.createContext();

const AppContainer = ({ children }) => {
  const [sample, setSample] = useState([]);
  const [table1, settable1] = useState([]);

  return (
    <AppContext.Provider
      value={{
        member: "some value",
        sample,
        setSample,
        table1,
        settable1,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContainer;
