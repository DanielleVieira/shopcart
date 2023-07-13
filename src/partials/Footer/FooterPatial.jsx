import { Container, Row, Col } from "react-bootstrap";

export const FooterPartial = () => {
  return (
    <Container
      as={"footer"}
      className="position-absolute bottom-0 p-3 bg-dark text-light"
      fluid
    >
      <Row>
        <Col md={11} className="text-center">
          <h5>ShoptCart</h5>
          <p>&#128151; Desenvolvido por Danielle de Lima Vieira</p>
          <small className="text-secondary">
            Atividade prática Javascript + React do projeto Instituto Nu e
            Descomplica
          </small>
        </Col>
        <Col className="d-flex justify-content-evenly">
          <a
            href="https://www.linkedin.com/in/daniellelimavieira"
            target="_blank"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/DanielleVieira" target="_blank">
            <i className="bi bi-github"></i>
          </a>
        </Col>
      </Row>
    </Container>
  );
};
