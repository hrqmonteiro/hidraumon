import { useState } from "react";
import { useRouter } from "next/router";
import { Button, Row, Col, Container, Offcanvas } from "react-bootstrap";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdPhoneInTalk } from "react-icons/md";
import Link from "../../Link";

export default function OffCanvas(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/some-path");
  };

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
          <div id="menu-mobile">
            <Row>
              <Col lg={12} md={12} sm={12} xs={12}>
                <div id="menu-links">
                  <ul>
                    <li className="underline">
                      <button type="button" onClick={handleClose}>
                        <Link href="/">
                          <a>Home</a>
                        </Link>
                      </button>
                    </li>
                    <li className="underline">
                      <button type="button" onClick={handleClose}>
                        <Link href="/sobre">
                          <a>Empresa</a>
                        </Link>
                      </button>
                    </li>

                    <li className="underline">
                      <button type="button" onClick={handleClose}>
                        <Link href="/catalogo">
                          <a>Catálogo</a>
                        </Link>
                      </button>
                    </li>

                    <li className="underline">
                      <button type="button" onClick={handleClose}>
                        <Link href="/#map">
                          <a>Localização</a>
                        </Link>
                      </button>
                    </li>

                    <li className="underline">
                      <button type="button" onClick={handleClose}>
                        <Link href="/contato">
                          <a>Contato</a>
                        </Link>
                      </button>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={12} md={12} sm={12} xs={12}>
                <div id="phone-section">
                  <div id="phone-icon">
                    <MdPhoneInTalk />
                  </div>
                  <div id="phone-top">
                    <span id="call-us">Nosso Telefone</span>
                    <br />
                    <span id="phone-number">(17) 3226-9090</span>
                  </div>
                </div>
              </Col>
              <Col lg={12} md={12} sm={12} xs={12}>
                <button className="button-primary" onClick={handleClose}>
                  <a href="/contato">Solicitar Orçamento</a>
                </button>
              </Col>
            </Row>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
