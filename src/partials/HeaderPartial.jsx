import { Navbar, Container, Nav, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAppContext } from "../store/AppContext";
import { useEffect } from "react";
import { removeNotificationToQueueAction } from "../store/actions";
import { NotificationComponent } from "../components/Notification/NotificationComponent";

export const HeaderPartial = () => {
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    if (state.notificationsQueue.length > 0) {
      const timer = setTimeout(() => {
        console.log("aqui");
        dispatch(removeNotificationToQueueAction());
      }, 3000);
      // return () => clearTimeout(timer); //para desativar o timeout se houver mudança de tela e o compoente for demostado. Nesse caso quero q contine ativo por isso desativado
    }
  }, [state.notificationsQueue]);

  return (
    <Navbar
      as="header"
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      className="mb-3"
    >
      <Container>
        <Link to={"/"} className="navbar-brand">
          ShopCart
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav as="nav" className="ms-auto">
            <Link to={"/"} className="nav-link">
              Produtos
            </Link>
            <Link to={"/cart"} className="nav-link">
              <i className="bi bi-cart"></i>
              <Badge>{state.cart.length}</Badge>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      {state.notificationsQueue.length > 0 && (
        <NotificationComponent
          message={state.notificationsQueue[0].message}
          variant={state.notificationsQueue[0].variant}
        />
      )}
    </Navbar>
  );
};
