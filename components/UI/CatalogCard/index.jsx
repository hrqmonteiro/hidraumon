import { Col, Row } from "react-bootstrap";

export default function CatalogCard(props) {
  return (
    <div className="product-card">
      <Row className="px-3 py-4">
        <Col lg={12} md={12} sm={12} xs={12}>
          <img src={props.image} alt={props.title} className="img-fluid" />
        </Col>
        <Col lg={12} md={12} sm={12} xs={12} className="my-3">
          <div className="title-contaner">
            <span id="product-title">{props.title}</span>
          </div>
        </Col>
      </Row>
    </div>
  );
}
