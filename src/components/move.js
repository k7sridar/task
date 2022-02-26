import React, { useContext, useState } from "react";
import { AppContext } from "./context";
import { Button, Alert } from "reactstrap";

const Move = () => {
  const { table1, settable1 } = useContext(AppContext);
  const { sample, setSample } = useContext(AppContext);
  console.log(table1);
  const movefn = () => {
    const check = table1
      .filter((s, i) => {
        return s.checked;
      })
      .indexOf(true);
    console.log(check);
    setSample(table1.filter((k, i) => i === check));
    console.log(sample);
  };
  return (
    <div>
      <Button onClick={() => movefn}>move to primary table</Button>
    </div>
  );
};

export default Move;
