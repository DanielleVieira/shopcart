import { ListGroup, Row, Col, Container, Form } from "react-bootstrap";
import { CardHorizontalComponent } from "../Card/CardHorizontalComponent";
import { ButtonLoadingComponent } from "../Button/ButtonLoadingComponent";

export const ListGroupItemComponent = ({
  item,
  formOnSubmit,
  formValue,
  formOnChange,
  formOnBlur,
  buttons = [],
}) => {
  return (
    <ListGroup.Item as="li">
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
                    type="number"
                    value={formValue}
                    onChange={formOnChange}
                    onBlur={formOnBlur}
                    min={1}
                    aria-describedby="changeProductAmount"
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
  );
};
