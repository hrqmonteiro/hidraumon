import { Col, Container, Row } from "react-bootstrap";

export default function Slider() {
  return (
    <>
      <section id="home">
        <Container>
          <Row>
            <Col lg={6} md={12} sm={12} xs={12} id="header-top">
              <h1 className="mb-5" data-aos="fade-down" data-aos-delay="1000">
                <strong>Excelência</strong> na <strong>produção</strong> de
                equipamentos <strong>hidráulicos.</strong>
              </h1>
              <p data-aos="fade-down" data-aos-delay="1200">
                <span id="copy-1">
                  Estamos aqui para <strong>oferecer o melhor! </strong>
                  Nossos clientes não pedem por menos.
                </span>
              </p>
              <div id="copy-2">
                <Row data-aos="zoom-in" data-aos-delay="2000">
                  <Col lg={4} md={4} sm={4} xs={4} className="my-5">
                    <p>Mais de</p>
                    <p id="number">25</p>
                    <p>anos de experiência</p>
                  </Col>
                  <Col lg={4} md={4} sm={4} xs={4} className="my-5">
                    <p>Mais de</p>
                    <p id="number">150</p>
                    <p>Clientes em todo território nacional.</p>
                  </Col>
                  <Col lg={4} md={4} sm={4} xs={4} className="my-5">
                    <p>Atuando em</p>
                    <p id="number">20</p>
                    <p>Estados do Brasil.</p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
