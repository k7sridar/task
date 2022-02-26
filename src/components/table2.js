import React, { useContext, useState } from "react";
import Add from "./add";
import { Row, Table, Col, Input } from "reactstrap";
import { AppContext } from "./context";
import Move from "./move";

const Table2 = () => {
  const { table1, settable1 } = useContext(AppContext);
  const handleClick = (check, i) => {
    table1.filter();
    settable1([...table1, { checked: !check }]);
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
            <th>User id</th>
            <th>Name</th>
            <th>Email</th>
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
                  id="chk"
                  checked={sample.checked}
                  onChange={() => handleClick(sample.checked, i)}
                />
                <th scope="row">{sample.id}</th>
                <th>{sample.fullname}</th>
                <th>{sample.email}</th>
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
