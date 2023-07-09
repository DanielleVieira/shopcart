import { Form, Col, Row, Container, Badge } from "react-bootstrap";
import { ListGroupComponent } from "../../components/ListGroup/ListGroupComponent";
import { ButtonLoadingComponent } from "../../components/Button/ButtonLoadingComponent";
import { useState } from "react";
import { useAppContext } from "../../store/AppContext";

export const ListGroupCartContainer = ({ buttons = [] }) => {
  const { state, dispatch } = useAppContext();
  const [itensAmount, setItensAmount] = useState({});

  const handleChange = (e, itemID) => {
    setItensAmount((prevState) => ({
      ...prevState,
      [itemId]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(amount);
  };

  const itensAdapted = state.cart.map((item) => ({
    ...item,
    title: item.name,
    text: item.description,
    total: `R$ ${item.price}`.replace(".", ","),
  }));

  return (
    <ListGroupComponent
      itens={itensAdapted}
      buttons={buttons}
      formOnSubmit={handleSubmit}
      formOnChange={handleChange}
      formValue={itensAmount}
    ></ListGroupComponent>
  );
};
