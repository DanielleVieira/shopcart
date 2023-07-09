import { Container, Row, Col } from "react-bootstrap";
import { ListGroupCartContainer } from "../containers/ListGroupCart/ListGroupCartContainer";
import { useAppContext } from "../store/AppContext";
import { useEffect } from "react";
import { fetchCartAction } from "../store/actions";

export const CartPage = () => {
  const { state, dispatch } = useAppContext();

  let totalCart = 0;
  state.cart.forEach(
    (product) => (totalCart += product.amount * product.price)
  );

  useEffect(() => {
    fetchCartAction(dispatch);
  }, []);

  return (
    <Container as="main">
      <ListGroupCartContainer
        buttons={[
          {
            loading: false,
            icon: "bi bi-trash",
            variant: "danger",
            onClick: () => console.log("LoadingButton"),
            disabled: false,
          },
        ]}
      />
      <Row className="mt-3">
        <Col md={10}>
          <h3>{"Total"}</h3>
        </Col>
        <Col>
          <h3>{`R$ ${totalCart.toFixed(2)}`.replace(".", ",")}</h3>
        </Col>
      </Row>
    </Container>
  );
};
