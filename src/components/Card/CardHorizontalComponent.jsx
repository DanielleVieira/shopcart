import { Card, Col, Row } from "react-bootstrap";

export const CardHorizontalComponent = ({ image, alt, title, text, total }) => {
  return (
    <Card as="article" className="border-0">
      <Row className="d-flex align-items-center">
        <Col md={2}>
          <Card.Img src={image} alt={alt} />
        </Col>
        <Col md={6}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
          </Card.Body>
        </Col>
        <Col md={4}>
          <Card.Body>
            <Card.Text>{total}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};
