import { Card, Col, Container, Row } from "react-bootstrap";
import Card1 from "../../UI/Card1";
import EmblaCarousel from "../../UI/EmblaCarousel";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Solutions() {
  return (
    <section id="solutions">
      <Container className="py-6 mb-5">
        <Row className="my-3">
          <Col>
            <EmblaCarousel />
          </Col>
        </Row>
        <Row className="mt-6 mb-2">
          <Col lg={3} md={3} sm={12} xs={12} className="mt-3">
            <h2 className="mb-5">
              Nossas soluções
              <br />
              <strong>são definitivas!</strong>
            </h2>
            <p>
              Atuamos há mais de 25 anos no mercado e somos líderes no ramo de
              equipamentos hidráulicos.
            </p>
            <p>
              Estamos qualificados para te fornecer equipamentos hidráulicos em
              alta qualidade, desde o material utilizado até o uso final.
            </p>
            <div className="my-5">
              <button className="button-secondary">
                Veja nosso catálogo! <MdKeyboardArrowRight />
              </button>
            </div>
          </Col>
          <Col lg={3} md={3} sm={12} xs={12} className="my-3">
            <Card>
              <Card.Img variant="top" src="/hidr.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={3} sm={12} xs={12} className="my-3">
            <Card>
              <Card.Img variant="top" src="/hidr.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={3} sm={12} xs={12} className="my-3">
            <Card>
              <Card.Img variant="top" src="/hidr.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
