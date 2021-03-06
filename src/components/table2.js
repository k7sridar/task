import React, { useContext } from "react";
import Add from "./add";
import { Row, Table, Col, Input } from "reactstrap";
import { AppContext } from "./context";
import Move from "./move";

const Table2 = () => {
  const { table1, settable1 } = useContext(AppContext);
  //const { setSample } = useContext(AppContext);
  const handleClick = (id) => {
    const newarray = table1.map((item) => {
      if (item.id === id) {
        item.checked = !item.checked;
      }
      return item;
    });
    settable1(newarray);
  };

  console.log(table1);

  return (
    <div>
      <br />
      <Row>
        <Col>
          <Add />
        </Col>
        <Col />
        <Col />
        <Col />

        <Col>
          <Move />
        </Col>
      </Row>
      <br /> <br />
      <Table id="t" hover size="sm">
        <thead>
          <tr>
            <th></th>
            <th>User id</th>
            <th>Name</th>

            <th>Joining Date</th>
            <th>address</th>
          </tr>
        </thead>
        <tbody>
          {table1.map((sample, i) => {
            return (
              <tr>
                <Input
                  type="checkbox"
                  key={i}
                  checked={sample.checked}
                  onChange={() => handleClick(sample.id)}
                />
                <th>{sample.id}</th>
                <th>{sample.fullname}</th>

                <th>{sample.jd}</th>
                <th>{sample.address}</th>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Table2;
