import { Col, Badge, Container, Nav, Row, Tab } from "react-bootstrap";
import CatalogCard from "../components/UI/CatalogCard";
import Head from "next/head";

export default function Catalogo() {
  return (
    <>
      <Head>
        <title>Catálogo | Hidraumon Máquinas</title>
      </Head>

      <section id="catalog">
        <Container>
          <Row className="py-5">
            <Col lg={12} md={12} sm={12} xs={12}>
              <h2>
                Nosso
                <br />
                <strong>Catálogo</strong>
              </h2>
            </Col>
          </Row>
          <Col lg={12}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3} className="mb-5">
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Arqueadora de Molas</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">
                        Carrinho de Retirar Câmbio
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">
                        Carrinho de Retirar Rodas Duplas
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Cilindros e Bombas</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fifth">Destalonador</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="sixth">Desparafusadeira</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="seventh">Expansores</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="eighth">Macacos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="ninth">Prensas</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tenth">Prensas p/ Cutelaria</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="eleventh">
                        Prensas p/ Ourives{" "}
                        <Badge bg="warning" text="dark">
                          <em>Novidade!</em>
                        </Badge>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="twelfth">Rebitadeira</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="thirteenth">Saca-Pinos</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row className="mb-5">
                        <Col lg={4} md={4} sm={12} xs={12} className="mb-3">
                          <CatalogCard
                            title="Arqueadora de Molas 50 Toneladas"
                            image="/images/products/arqueadoras/50-toneladas.webp"
                          />
                        </Col>
                        <Col lg={4} md={4} sm={12} xs={12} className="mb-3">
                          <CatalogCard
                            title="Arqueadora de Molas Universal Dupla-Ação 50 Toneladas"
                            image="/images/products/arqueadoras/50-toneladas.webp"
                          />
                        </Col>
                        <Col lg={4} md={4} sm={12} xs={12} className="mb-3">
                          <CatalogCard
                            title="Arqueadora de Molas 50 Toneladas c/ Auxiliar de 20"
                            image="/images/products/arqueadoras/50-toneladas.webp"
                          />
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row className="mb-5">
                        <Col lg={4} md={4} sm={12} xs={12} className="mb-3">
                          <CatalogCard
                            title="Carrinho de Retirar Câmbio c/ Bandeja"
                            image="/images/products/arqueadoras/50-toneladas.webp"
                          />
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row className="mb-5">
                        <Col lg={4} md={4} sm={12} xs={12} className="mb-3">
                          <CatalogCard
                            title="Carrinho de Retirar Rodas Duplas"
                            image="/images/products/arqueadoras/50-toneladas.webp"
                          />
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <Row className="mb-5">
                        <Col lg={4} md={4} sm={12} xs={12} className="mb-3">
                          <CatalogCard
                            title="Bomba Motorizada 700 Bar"
                            image="/images/products/arqueadoras/50-toneladas.webp"
                          />
                        </Col>
                        <Col lg={4} md={4} sm={12} xs={12} className="mb-3">
                          <CatalogCard
                            title="Eletro Hidráulica"
                            image="/images/products/arqueadoras/50-toneladas.webp"
                          />
                        </Col>
                        <Col lg={4} md={4} sm={12} xs={12} className="mb-3">
                          <CatalogCard
                            title="Conjunto de Alinhamento de Eixo"
                            image="/images/products/arqueadoras/50-toneladas.webp"
                          />
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fifth">
                      <Row className="mb-5">
                        <Col lg={4} md={4} sm={12} xs={12} className="mb-3">
                          <CatalogCard
                            title="Destalonador de Pneus"
                            image="/images/products/arqueadoras/50-toneladas.webp"
                          />
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="sixth">
                      <Row className="mb-5">
                        <Col lg={4} md={4} sm={12} xs={12} className="mb-3">
                          <CatalogCard
                            title="Desparafusadeira"
                            image="/images/products/arqueadoras/50-toneladas.webp"
                          />
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="seventh">
                      <Row>
                        <Col lg={4} md={4} sm={12} xs={12} className="mb-3">
                          <CatalogCard
                            title="Expansor Simples Ação 6 Toneladas"
                            image="/images/products/arqueadoras/50-toneladas.webp"
                          />
                        </Col>
                        <Col lg={4} md={4} sm={12} xs={12} className="mb-3">
                          <CatalogCard
                            title="Expansor Simples Ação 20 Toneladas"
                            image="/images/products/arqueadoras/50-toneladas.webp"
                          />
                        </Col>
                        <Col lg={4} md={4} sm={12} xs={12} className="mb-3">
                          <CatalogCard
                            title="Expansor Simples Ação 40 Toneladas"
                            image="/images/products/arqueadoras/50-toneladas.webp"
                          />
                        </Col>
                      </Row>
                      <Row className="mb-5">
                        <Col lg={4} md={4} sm={12} xs={12} className="mb-3">
                          <CatalogCard
                            title="Expansor Dupla-Ação 20 Toneladas"
                            image="/images/products/arqueadoras/50-toneladas.webp"
                          />
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="eighth">
                      <Row>
                        <Col lg={4} md={4} sm={12} xs={12} className="mb-3">
                          <CatalogCard
                            title="Expansor Simples Ação 6 Toneladas"
                            image="/images/products/arqueadoras/50-toneladas.webp"
                          />
                        </Col>
                        <Col lg={4} md={4} sm={12} xs={12} className="mb-3">
                          <CatalogCard
                            title="Expansor Simples Ação 20 Toneladas"
                            image="/images/products/arqueadoras/50-toneladas.webp"
                          />
                        </Col>
                        <Col lg={4} md={4} sm={12} xs={12} className="mb-3">
                          <CatalogCard
                            title="Expansor Simples Ação 40 Toneladas"
                            image="/images/products/arqueadoras/50-toneladas.webp"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={4} md={4} sm={12} xs={12} className="mb-3">
                          <CatalogCard
                            title="Expansor Simples Ação 6 Toneladas"
                            image="/images/products/arqueadoras/50-toneladas.webp"
                          />
                        </Col>
                        <Col lg={4} md={4} sm={12} xs={12} className="mb-3">
                          <CatalogCard
                            title="Expansor Simples Ação 20 Toneladas"
                            image="/images/products/arqueadoras/50-toneladas.webp"
                          />
                        </Col>
                        <Col lg={4} md={4} sm={12} xs={12} className="mb-3">
                          <CatalogCard
                            title="Expansor Simples Ação 40 Toneladas"
                            image="/images/products/arqueadoras/50-toneladas.webp"
                          />
                        </Col>
                      </Row>
                      <Row className="mb-5">
                        <Col lg={4} md={4} sm={12} xs={12} className="mb-3">
                          <CatalogCard
                            title="Expansor Simples Ação 6 Toneladas"
                            image="/images/products/arqueadoras/50-toneladas.webp"
                          />
                        </Col>
                        <Col lg={4} md={4} sm={12} xs={12} className="mb-3">
                          <CatalogCard
                            title="Expansor Simples Ação 20 Toneladas"
                            image="/images/products/arqueadoras/50-toneladas.webp"
                          />
                        </Col>
                        <Col lg={4} md={4} sm={12} xs={12} className="mb-3">
                          <CatalogCard
                            title="Expansor Simples Ação 40 Toneladas"
                            image="/images/products/arqueadoras/50-toneladas.webp"
                          />
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="ninth">
                      <Row>
                        <Col lg={4} md={4} sm={12} xs={12} className="mb-3">
                          <CatalogCard
                            title="Expansor Simples Ação 6 Toneladas"
                            image="/images/products/arqueadoras/50-toneladas.webp"
                          />
                        </Col>
                        <Col lg={4} md={4} sm={12} xs={12} className="mb-3">
                          <CatalogCard
                            title="Expansor Simples Ação 20 Toneladas"
                            image="/images/products/arqueadoras/50-toneladas.webp"
                          />
                        </Col>
                        <Col lg={4} md={4} sm={12} xs={12} className="mb-3">
                          <CatalogCard
                            title="Expansor Simples Ação 40 Toneladas"
                            image="/images/products/arqueadoras/50-toneladas.webp"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={4} md={4} sm={12} xs={12} className="mb-3">
                          <CatalogCard
                            title="Expansor Simples Ação 6 Toneladas"
                            image="/images/products/arqueadoras/50-toneladas.webp"
                          />
                        </Col>
                        <Col lg={4} md={4} sm={12} xs={12} className="mb-3">
                          <CatalogCard
                            title="Expansor Simples Ação 20 Toneladas"
                            image="/images/products/arqueadoras/50-toneladas.webp"
                          />
                        </Col>
                        <Col lg={4} md={4} sm={12} xs={12} className="mb-3">
                          <CatalogCard
                            title="Expansor Simples Ação 40 Toneladas"
                            image="/images/products/arqueadoras/50-toneladas.webp"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={4} md={4} sm={12} xs={12} className="mb-3">
                          <CatalogCard
                            title="Expansor Simples Ação 6 Toneladas"
                            image="/images/products/arqueadoras/50-toneladas.webp"
                          />
                        </Col>
                        <Col lg={4} md={4} sm={12} xs={12} className="mb-3">
                          <CatalogCard
                            title="Expansor Simples Ação 20 Toneladas"
                            image="/images/products/arqueadoras/50-toneladas.webp"
                          />
                        </Col>
                        <Col lg={4} md={4} sm={12} xs={12} className="mb-3">
                          <CatalogCard
                            title="Expansor Simples Ação 40 Toneladas"
                            image="/images/products/arqueadoras/50-toneladas.webp"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={4} md={4} sm={12} xs={12} className="mb-3">
                          <CatalogCard
                            title="Expansor Simples Ação 6 Toneladas"
                            image="/images/products/arqueadoras/50-toneladas.webp"
                          />
                        </Col>
                        <Col lg={4} md={4} sm={12} xs={12} className="mb-3">
                          <CatalogCard
                            title="Expansor Simples Ação 20 Toneladas"
                            image="/images/products/arqueadoras/50-toneladas.webp"
                          />
                        </Col>
                        <Col lg={4} md={4} sm={12} xs={12} className="mb-3">
                          <CatalogCard
                            title="Expansor Simples Ação 40 Toneladas"
                            image="/images/products/arqueadoras/50-toneladas.webp"
                          />
                        </Col>
                      </Row>
                      <Row className="mb-5">
                        <Col lg={4} md={4} sm={12} xs={12} className="mb-3">
                          <CatalogCard
                            title="Expansor Simples Ação 6 Toneladas"
                            image="/images/products/arqueadoras/50-toneladas.webp"
                          />
                        </Col>
                        <Col lg={4} md={4} sm={12} xs={12} className="mb-3">
                          <CatalogCard
                            title="Expansor Simples Ação 20 Toneladas"
                            image="/images/products/arqueadoras/50-toneladas.webp"
                          />
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tenth">
                      <Row className="mb-5">
                        <Col lg={4} md={4} sm={12} xs={12} className="mb-3">
                          <CatalogCard
                            title="Prensa p/ Cutelaria 45 Toneladas"
                            image="/images/products/arqueadoras/50-toneladas.webp"
                          />
                        </Col>
                        <Col lg={4} md={4} sm={12} xs={12} className="mb-3">
                          <CatalogCard
                            title="Prensa p/ Cutelaria 35 Toneladas"
                            image="/images/products/arqueadoras/50-toneladas.webp"
                          />
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="eleventh">
                      <Row className="mb-5">
                        <Col lg={4} md={4} sm={12} xs={12} className="mb-3">
                          <CatalogCard
                            title="Prensa p/ Ourives"
                            image="/images/products/arqueadoras/50-toneladas.webp"
                          />
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="twelfth">
                      <Row className="mb-5">
                        <Col lg={4} md={4} sm={12} xs={12} className="mb-3">
                          <CatalogCard
                            title="Rebitadeira HidroPneumática"
                            image="/images/products/arqueadoras/50-toneladas.webp"
                          />
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="thirteenth">
                      <Row className="mb-5">
                        <Col lg={4} md={4} sm={12} xs={12} className="mb-3">
                          <CatalogCard
                            title="Saca-Pino da Manga de Eixo Manual 45 Toneladas"
                            image="/images/products/arqueadoras/50-toneladas.webp"
                          />
                        </Col>
                        <Col lg={4} md={4} sm={12} xs={12} className="mb-3">
                          <CatalogCard
                            title="Saca-Pino da Manga de Eixo HidroPneumático 45 Toneladas"
                            image="/images/products/arqueadoras/50-toneladas.webp"
                          />
                        </Col>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
        </Container>
      </section>
    </>
  );
}
