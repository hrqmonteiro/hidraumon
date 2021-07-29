import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import MenuMobile from "../MenuMobile";
import { HiMenuAlt3 } from "react-icons/hi";

export default function OffCanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div id="hamburger">
        <button onClick={handleShow}>
          <HiMenuAlt3 />
        </button>
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img
              src="/images/logo.png"
              alt="Hidraumon Máquinas"
              width={120}
              className="img-fluid"
            />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         <MenuMobile /> 
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
