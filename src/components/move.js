import React, { useContext } from "react";
import { AppContext } from "./context";
import { Button } from "reactstrap";

const Move = () => {
  const { table1 } = useContext(AppContext);
  const { sample, setSample } = useContext(AppContext);
  console.log(table1);
  const movefn = () => {
    const check = table1.filter((s, i) => {
      return s.checked === true;
    });
    console.log(check);
    //const primary = table1.filter((k, i) => i === check);
    setSample(check);
    console.log(sample);
  };
  return (
    <div>
      <Button onClick={() => movefn()}>move to primary table</Button>
    </div>
  );
};

export default Move;
