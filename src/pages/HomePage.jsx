import { Container, Row, Col } from "react-bootstrap";
import { CardComponent } from "../components/Card/CardComponent";
import { useEffect, useState } from "react";
import { useAppContext } from "../store/AppContext";
import {
  fetchCartAction,
  fetchProductsAction,
  saveProductToCartAction,
} from "../store/actions";

export const HomePage = () => {
  const { state, dispatch } = useAppContext();
  const [itensLoading, setItensLoading] = useState({});

  const handleClick = async (product) => {
    setItensLoading((prevState) => ({
      ...prevState,
      [product.id]: true,
    }));
    await saveProductToCartAction(dispatch, product);
    setItensLoading((prevState) => ({
      ...prevState,
      [product.id]: false,
    }));
  };

  useEffect(() => {
    fetchProductsAction(dispatch);
    fetchCartAction(dispatch);
  }, []);

  const productsNormalized = state.products.map((product) => ({
    ...product,
    saved: !!state.cart.find((cartProduct) => cartProduct.id === product.id),
  }));

  return (
    <Container as="main">
      <Row>
        {productsNormalized.map((product) => (
          <Col key={product.id} md={3} xs={12} className="mb-3">
            <CardComponent
              image={product.image}
              alt={product.name}
              title={product.name}
              text={product.description}
              emphasis={`R$ ${product.price}`.replace(".", ",")}
              button={{
                label: product.saved ? "No carrinho" : "Adicionar ao carrinho",
                loadingLabel: "Adicionando ...",
                loading: itensLoading[product.id],
                icon: !product.saved ? "bi bi-cart-plus" : "",
                onClick: () => handleClick(product),
                disabled: product.saved,
                variant: product.saved ? "secondary" : "primary",
                className: "position-relative",
              }}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
