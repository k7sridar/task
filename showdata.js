import React, { useContext } from "react";
import Add from "./add";
import { Row, Table, Col } from "reactstrap";
import { AppContext } from "./context";
import Remove from "./delete";

const Show = () => {
  const { sample } = useContext(AppContext);

  return (
    <div>
      <br />
      <Row>
        <br />
        <Col></Col>
        <Col />
        <Col />
        <Col />

        <Col>
          <Remove />
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
          {sample.map((sample, i) => {
            return (
              <tr>
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

export default Show;
