import React, { useContext, useState } from "react";
import { AppContext } from "./context";
import {
  Button,
  Modal,
  Input,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Alert,
} from "reactstrap";

const Remove = () => {
  const { sample, setSample } = useContext(AppContext);
  const [data, setData] = useState("");
  const [modal, setModal] = useState(false);
  const printfn = () => {
    if (data) {
      const index = sample
        .map((x, i) => {
          return x.id;
        })
        .indexOf(+data);
      console.log(index);
      setSample(sample.filter((k, i) => i !== index));
      console.log(sample);
      togglefn();
    } else {
      alert("enter id");
    }
  };
  const togglefn = () => {
    setModal(!modal);
  };

  return (
    <div>
      {
        <div>
          <Button onClick={togglefn} color="danger">
            Remove User
          </Button>
          <Modal isOpen={modal}>
            <ModalHeader>ENTER ID TO REMOVE</ModalHeader>
            <ModalBody>
              {" "}
              <Input
                id="idI"
                bssize="sm"
                required
                type="number"
                onChange={(e) => setData(e.target.value)}
              ></Input>
            </ModalBody>

            <br />
            <ModalFooter>
              <Button id="btnR" color="warning" onClick={printfn}>
                REMOVE
              </Button>
              <Button id="btnR" color="danger" onClick={togglefn}>
                close
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      }
    </div>
  );
};

export default Remove;
