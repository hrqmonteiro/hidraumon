import { Col, Container, Row } from "react-bootstrap";
import { MdPhoneInTalk } from "react-icons/md";
import Link from "../../Link";

export default function MenuMobile() {
  return (
    <div id="menu-mobile">
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          <div id="menu-links">
            <ul>
              <li className="underline">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li className="underline">
                <Link href="/sobre">
                  <a>Empresa</a>
                </Link>
              </li>
              <li className="underline">
                <Link href="/catalogo">
                  <a>Catálogo</a>
                </Link>
              </li>
              <li className="underline">
                <Link href="/localizacao">
                  <a>Localização</a>
                </Link>
              </li>
              <li className="underline">
                <Link href="/contato">
                  <a>Contato</a>
                </Link>
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
          <button>Solicitar Orçamento</button>
        </Col>
      </Row>
    </div>
  );
}
