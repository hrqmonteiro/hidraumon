import { Col, Row, Form, Button, Container } from "react-bootstrap";
import Map from "../Map";
import { useState } from "react";
import UberButton from "../../UI/UberButton";
import WazeButton from "../../UI/WazeButton";
import { ImPhone, ImMap, ImClock2 } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaCalendarCheck } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import Modal from "../../UI/Modal";
import Backdrop from "../../UI/Backdrop";

export default function Location() {
  const [modalIsOpen, setModal] = useState(false);

  function openModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  return (
    <section id="location">
      <Container>
        <Row className="pt-5">
          <Col lg={6} md={12} sm={12} xs={12} className="mb-5" data-aos="fade-right">
            <h2>
              Entre
              <br />
              <strong>em contato</strong>
            </h2>
            <div className="my-5">
              <p>
                Possui <em>dúvidas</em>, <em>pedidos</em> ou <em>orçamentos</em>
                ? Nós da <strong>Hidraumon</strong> estamos empenhados em
                responder quaisquer dúvidas e atender quaisquer necessidades!
                <br />
                <br />
                Estamos ansiosos em ouví-lo! Preencha o formulário e
                retornaremos o mais rápido possível. Ou, se preferir, veja
                nossos pontos de contato ou agende um horário para uma visita ou
                ligação!
                {modalIsOpen && (
                  <Modal
                    onCancel={closeModal}
                    onConfirm={closeModal}
                    content="test"
                  />
                )}
                {modalIsOpen && <Backdrop onCancel={closeModal} />}
              </p>
            </div>
            <ul>
              <li>
                <ImPhone /> <a href="tel:+551732269090">(17) 3226-9090</a>
              </li>
              <li>
                <IoLogoWhatsapp />
                <a href="https://wa.me/5517982010001" target="_blank">
                  (17) 98201-0001
                </a>
              </li>
              <li>
                <ImMap /> Rua Gino Cecconi nº 261, Distrito Industrial Dr.
                Carlos Arnaldo e Silva
                <br />
                São José do Rio Preto, SP, Brasil, CEP: 15052-725
              </li>
              <li>
                <ImClock2 /> Segunda à Sexta: 7h30 às 17h30
                <br />
                Sábados, Domingos e Feriados: Fechado
              </li>
              <li>
                <FaCalendarCheck />
                <button className="button-modal" onClick={openModal}>
                  Agendar um horário (visita ou ligação)
                </button>
              </li>
            </ul>
          </Col>
          <Col
            lg={6}
            md={12}
            sm={12}
            xs={12}
            className="mb-5"
            data-aos="fade-left"
          >
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Control
                    type="text"
                    placeholder="Nome"
                    style={{ height: "45px" }}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPhone">
                  <Form.Control
                    type="text"
                    placeholder="Telefone"
                    style={{ height: "45px" }}
                  />
                </Form.Group>
              </Row>
              <Form.Group className="mb-3" controlId="formGridCompany">
                <Form.Control
                  type="text"
                  placeholder="Empresa (se houver)"
                  style={{ height: "45px" }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridMail">
                <Form.Control
                  type="email"
                  placeholder="E-mail"
                  style={{ height: "45px" }}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Digite sua mensagem..."
                  rows={18}
                />
              </Form.Group>

              <button className="button-third">
                Enviar <IoIosSend />
              </button>
            </Form>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col lg={12} md={12} sm={12} xs={12}>
            <section id="map">
              <Map />
              <Row className="my-3">
                <div className="navigation-buttons">
                  <UberButton url="https://m.uber.com/ul/?action=setPickup&client_id=f_Q9JtAf_s2t6zqjGoqnQ3e53t9adhNI&pickup=my_location&dropoff[formatted_address]=Hidraumon%20Industrias%20de%20Maquinas%20EPP.%20-%20Rua%20Gino%20Cecconi%20-%20Distrito%20Industrial%20Doutor%20Carlos%20Arnaldo%20e%20Silva%2C%20S%C3%A3o%20Jos%C3%A9%20do%20Rio%20Preto%20-%20SP%2C%20Brasil&dropoff[latitude]=-20.729855&dropoff[longitude]=-49.342562" />
                  <WazeButton url="https://waze.com/ul?ll=-20.8127115,-49.376521&navigate=yes" />
                </div>
              </Row>
            </section>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
