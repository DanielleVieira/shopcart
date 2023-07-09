import { Col, ListGroup, Row, Form, Container } from "react-bootstrap";
import { CardHorizontalComponent } from "../Card/CardHorizontalComponent";
import { ButtonLoadingComponent } from "../Button/ButtonLoadingComponent";

export const ListGroupComponent = ({
  itens = [],
  buttons = [],
  formOnSubmit,
  formValue,
  formOnChange,
}) => {
  return (
    <ListGroup as="ul">
      {itens.map((item) => (
        <ListGroup.Item key={item.id} as="li">
          <Row className="d-flex align-items-center">
            <Col md={6}>
              <CardHorizontalComponent {...item} />
            </Col>
            <Col md={6}>
              <Container className="d-flex justify-content-around align-items-center">
                <Row>
                  <Col>
                    <Form onSubmit={formOnSubmit}>
                      <Form.Control
                        type="text"
                        value={formValue[item.id]}
                        onChange={() => formOnChange(e, item.id)}
                      />
                    </Form>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    {buttons.map((button, index) => (
                      <ButtonLoadingComponent
                        key={index}
                        {...button}
                        className="m-1"
                      />
                    ))}
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};
