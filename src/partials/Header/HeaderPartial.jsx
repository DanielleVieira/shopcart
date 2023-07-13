import { Navbar, Container, Nav, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAppContext } from "../../store/AppContext";

export const HeaderPartial = () => {
  const { state } = useAppContext();

  return (
    <Navbar
      as="header"
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      fixed="top"
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
    </Navbar>
  );
};
