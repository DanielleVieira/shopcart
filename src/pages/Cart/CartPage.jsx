import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { useAppContext } from "../../store/AppContext";
import { ListGroupItemContainer } from "../../containers/ListGroupCartItem/ListGroupCartItemContainer";

export const CartPage = () => {
  const { state } = useAppContext();

  let totalCart = 0;
  const sumTotalCart = (itemAmount = 1, itemPrice = 0) =>
    (totalCart += itemAmount * itemPrice);

  const itensAdapted = state.cart.map((item) => {
    sumTotalCart(item.amount, item.price);
    return {
      ...item,
      title: item.name,
      text: item.description,
      total: `R$ ${item.price.toLocaleString("pt-br", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`,
    };
  });

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
      <Row className="mt-3 border-top border-bottom py-3">
        <Col md={10}>
          <h3>{"Subtotal"}</h3>
        </Col>
        <Col>
          <h3>{`R$ ${totalCart.toLocaleString("pt-br", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`}</h3>
        </Col>
      </Row>
    </Container>
  );
};
