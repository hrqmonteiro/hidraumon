import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import { MdPhoneInTalk } from "react-icons/md";
import Button from "../Button";
import OffCanvas from "../OffCanvas";
import Link from "../../Link";

export default function Menu() {
  return (
    <Container>
      <div id="menu-top">
        <div id="logo-top">
          <img src="/images/logo.png" width={120} className="img-fluid" />
        </div>
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
        <div id="phone-section">
          <div id="phone-icon">
            <MdPhoneInTalk />
          </div>
          <div id="phone-top">
            <span id="call-us">Nosso Telefone</span>
            <br />
            <span id="phone-number">(17) 3226-9090</span>
          </div>
          <Button url="/" text="Solicitar Orçamento" />
        </div>
        <div id="offcanvas">
          <OffCanvas />
        </div>
      </div>
    </Container>
  );
}
