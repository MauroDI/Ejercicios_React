import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Ejercicio1 from "./img/Ejercicio1.jpg";
import Ejercicio3 from "./img/Ejercicio3.jpg";
import Ejercicio4 from "./img/Ejercicio4.jpg";
export function MyVerticallyCenteredModal(props, index) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h1>{JSON.stringify(index)}</h1>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
const prueba = ({ i }) => {
  let imagenAMostrar;

  switch (i) {
    case 1:
      imagenAMostrar = Ejercicio1;
      break;
    case 2:
      imagenAMostrar = Ejercicio3;
      break;
    case 3:
      imagenAMostrar = Ejercicio4;
      break;

    default:
      break;
  }

  return (
    <div>
      <h4>Centered Modal</h4>
      {imagenAMostrar && <img src={imagenAMostrar} alt={`Ejercicio ${i}`} />}
    </div>
  );
};
