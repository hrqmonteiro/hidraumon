import {Col, Row} from "react-bootstrap";

export default function Card2 (props) {
  return (
    <Row>
      <Col>
        <img src={props.image} className="img-fluid" />
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </Col>
    </Row>
  )
}
