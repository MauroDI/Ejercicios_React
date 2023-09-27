// no olvides el usestate para cambiar estado
import React, { useState } from "react";
import { getEjercicio } from "./dataset";
import Button from "react-bootstrap/Button";
import { MyVerticallyCenteredModal } from "./RBModal";

function MainView() {
  const [modalShow, setModalShow] = React.useState(false);
  const [selectedButton, setSelectedButton] = useState(0);
  //const componentesRequeridos = [Ejercicio1, Ejercicio2, Ejercicio3];
  const [hoveredButton, setHoveredButton] = useState(null);

  //onhover
  const handleMouseEnter = (buttonId) => {
    setHoveredButton(buttonId);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const botones = [];
  const n = 5;
  const [isModalOpen, setIsModalOpen] = useState(false);

  for (let i = 1; i <= n; i++) {
    botones.push(
      <button
        key={`${i}`}
        onClick={() => {
          setModalShow(true);
          setSelectedButton(i);
        }}
        type="button"
        className="btn btn-warning"
        data-bs-toggle="modal"
        style={{
          border: hoveredButton === i ? "2px solid black" : "none",
        }}
        onMouseEnter={() => handleMouseEnter(i)}
        onMouseLeave={handleMouseLeave}
      >
        Ejercicio{i}
      </button>
    );
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3">{botones}</div>
        <div className="col-9 d-flex align-items-center justify-content-center">
          {hoveredButton ? <p>{getEjercicio(hoveredButton)}</p> : null}
        </div>
      </div>
      {isModalOpen ? (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          ComponenteEjercicio={hoveredButton}
        />
      ) : (
        <></>
      )}
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Re ACT G
        </Button>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          index={selectedButton}
        />
      </>
    </div>
  );
}

export default MainView;
