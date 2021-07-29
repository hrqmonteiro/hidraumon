import { Container, Col, Row } from "react-bootstrap";
import Head from "next/head";
import EmblaCarousel from "../components/UI/EmblaCarousel";

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre | Hidraumon Máquinas</title>
        <meta name="description" content="Hidraumon Máquinas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section id="about">
        <Container>
          <Row>
            <Col lg={6} md={12} sm={12} xs={12}></Col>
            <Col lg={6} md={12} sm={12} xs={12} id="header-about">
              <h1 className="mb-4">
                Nossa <strong>história</strong>
              </h1>
              <p>
                A <strong>HIDRAUMON</strong> foi criada em 1995 e desde então
                estamos focados no desenvolvimento de nossos produtos para
                atender nossos clientes cada vez melhor.
                <br />
                <br />
                Somos especializados na fabricação de equipamentos hidráulicos,
                como, macacos hidráulicos manuais e hidropneumáticos, prensas
                manuais, hidropneumáticas e motorizadas, prensas para cutelaria,
                arqueadora de molas, rebitadeiras, carrinho p/ retirar câmbio,
                sacador de rodas, comandos e bombas hidráulicas, também
                adaptamos e desenvolvemos projetos.
                <br />
                <br />
                Com a nossa marca consolidada na região, temos como objetivo
                expandir nossa área de atuação, sempre primando pela qualidade
                dos produtos e atendimento, para que nossos consumidores estejam
                sempre satisfeitos.
              </p>
              <EmblaCarousel />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
