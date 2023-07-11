import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { useAppContext } from "../store/AppContext";
import { useEffect } from "react";
import { fetchCartAction } from "../store/actions";
import { ListGroupItemContainer } from "../containers/ListGroupCartItem/ListGroupCartItemContainer";

export const CartPage = () => {
  const { state, dispatch } = useAppContext();

  let totalCart = 0;
  const sumTotalCart = (itemAmount = 1, itemPrice = 0) =>
    (totalCart += itemAmount * itemPrice);

  const itensAdapted = state.cart.map((item) => {
    sumTotalCart(item.amount, item.price);
    return {
      ...item,
      title: item.name,
      text: item.description,
      total: `R$ ${item.price}`.replace(".", ","),
    };
  });

  useEffect(() => {
    fetchCartAction(dispatch);
  }, []);

  return (
    <Container as="main">
      <ListGroup as="ul">
        {itensAdapted.map((item) => (
          <ListGroupItemContainer
            key={item.id}
            item={item}
          ></ListGroupItemContainer>
        ))}
      </ListGroup>
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
