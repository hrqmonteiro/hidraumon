import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Slider from "react-slick";
import Card1 from "../Card1";

export default class EmblaCarousel extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "100px",
      slidesToShow: 1,
      speed: 500,
    };

    return (
      <Container>
        <Row className="m-0 p=0">
          <Col lg={12} md={12} sm={12} xs={12} className="p-0 m-0">
            <div className="embla-slide" data-aos="fade-down" data-aos-delay="700">
              <Slider {...settings}>
                <div className="card-1">
                  <Card1 title="Industrial" description="Lorem Ipsum" />
                </div>
                <div className="card-1">
                  <Card1 title="Industrial" description="Lorem Ipsum" />
                </div>
                <div className="card-1">
                  <Card1 title="Industrial" description="Lorem Ipsum" />
                </div>
                <div className="card-1">
                  <Card1 title="Industrial" description="Lorem Ipsum" />
                </div>
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
