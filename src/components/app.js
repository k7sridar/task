import React, { useState, useContext } from "react";

import Show from "./showdata";

import AppContainer, { AppContext } from "./context";

export default () => {
  return (
    <AppContainer>
      <Show />
    </AppContainer>
  );
};
