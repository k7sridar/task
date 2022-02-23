import React, { useState, useContext } from "react";
import {
  Label,
  Button,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Alert,
} from "reactstrap";
import { AppContext } from "./context";

const Add = () => {
  const { sample, setSample } = useContext(AppContext);
  const [user, setUser] = useState({
    fullname: "",
    address: "",
    email: "",
    jd: "",
    id: "",
  });
  const [modal, setModal] = useState(false);
  const printfn = () => {
    if (user.fullname && user.email && user.jd && user.address) {
      const id = Math.floor(Math.random() * 999) + 100;
      console.log(user);
      setSample([...sample, { ...user, id: id }]);
      setUser(null);
      document.querySelector("#name").value = "";
      document.querySelector("#email").value = "";
      document.querySelector("#dot").value = "";
      document.querySelector("#add").value = "";
      togglefn();
    } else {
      alert("enter all data");
    }
  };

  const togglefn = () => {
    setModal(!modal);
  };

  return (
    <div>
      <Button onClick={togglefn} color="success">
        Add User
      </Button>
      <Modal isOpen={modal}>
        <ModalHeader>Enter Data Of Member</ModalHeader>
        <ModalBody>
          {" "}
          <Label>Name</Label>
          <Input
            id="name"
            required
            type="text"
            onChange={(e) => setUser({ ...user, fullname: e.target.value })}
          ></Input>
          <Label>EMAIL ADDRESS</Label>
          <Input
            id="email"
            type="email"
            required
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          ></Input>
          <Label>DATE OF JOINING</Label>
          <Input
            id="dot"
            required
            type="date"
            onChange={(e) => {
              setUser({ ...user, jd: e.target.value });
            }}
          ></Input>
          <Label>ADDRESS</Label>
          <Input
            id="add"
            required
            type="text"
            onChange={(e) => {
              setUser({ ...user, address: e.target.value });
            }}
          ></Input>
        </ModalBody>

        <ModalFooter>
          <Button color="warning" onClick={printfn}>
            ADD
          </Button>
          <Button id="btnR" color="danger" onClick={togglefn}>
            close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default Add;
