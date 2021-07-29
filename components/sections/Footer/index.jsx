import { Container, Col, Row } from "react-bootstrap";
import SocialLinks from "../../UI/SocialLinks";

export default function Footer() {
  return (
    <>
      <section id="footer">
        <Container className="p-5">
          <Row>
            <Col lg={4} md={12} sm={12} xs={12} className="py-3">
              <img
                src="/images/logo.png"
                className="img-fluid mb-3"
                width="120px"
                alt="Hidraumon Máquinas"
              />
              <br />
              <p id="footer-institutional" className="py-3">
                Hidraumon Ind. de Máquinas Eireli
              </p>
              <p>
                Rua Gino Cecconi Nº 261,
                <br />
                Distrito Industrial Dr. Carlos Arnaldo e Silva
                <br />
                CEP: 15052-725
                <br />
                <div className="mt-3">
                  <p id="footer-mail">
                    <a href="mailto:hidraumon@hidraumon.com.br">
                      hidraumon@hidraumon.com.br
                    </a>
                  </p>
                </div>
              </p>
              <br />
              <div className="m-0">
                <SocialLinks />
              </div>
            </Col>
            <Col lg={4} md={6} sm={6} xs={6} className="py-3">
              <h6 className="mb-4">
                <strong>Institucional</strong>
              </h6>
              <ul>
                <li>
                  <a href="/">Página Inicial</a>
                </li>
                <li>
                  <a href="/sobre">Sobre</a>
                </li>
                <li>
                  <a href="#">Catálogo</a>
                </li>
                <li>
                  <a href="#">Localização</a>
                </li>
                <li>
                  <a href="#">Contato</a>
                </li>
              </ul>
            </Col>
            <Col lg={4} md={6} sm={6} xs={6} className="py-3">
              <h6 className="mb-4">
                <strong>Institucional</strong>
              </h6>
              <ul>
                <li>
                  <a href="/">Página Inicial</a>
                </li>
                <li>
                  <a href="/sobre">Sobre</a>
                </li>
                <li>
                  <a href="#">Catálogo</a>
                </li>
                <li>
                  <a href="#">Localização</a>
                </li>
                <li>
                  <a href="#">Contato</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
