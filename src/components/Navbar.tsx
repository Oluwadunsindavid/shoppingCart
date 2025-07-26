// Import BS Navbar
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarBs sticky="top" className=" bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {/* <Button style={{ width: "3rem", height: "3rem" }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88">
            <g data-name="Shop cart">
              <path
                d="M19 67h53a1 1 0 0 0 .95-.69l10-31A.996.996 0 0 0 82 34h-9.03a17.998 17.998 0 0 1-35.94 0h-8.87L26.6 21.85l-.61-4A1.023 1.023 0 0 0 25 17H8a3 3 0 0 0 0 6h16.731c2.128 16.623.51 5.286 6.104 42H19a5 5 0 0 0 0 10h10.11a7 7 0 1 0 9.779 0h30.222A6.993 6.993 0 1 0 74 73H19a3 3 0 0 1 0-6zm15 16a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3zm43-3a3 3 0 1 1-3-3 3.003 3.003 0 0 1 3 3z"
                style={{ fill: "#202021" }}
              />
              <circle cx="34" cy="80" r="1" style={{ fill: "#202021" }} />
              <circle cx="74" cy="80" r="1" style={{ fill: "#202021" }} />
              <path
                d="M55 43a10 10 0 1 0-10-10 10.012 10.012 0 0 0 10 10zm-3.081-10.422A3.473 3.473 0 0 1 53.472 26H54v-1a1 1 0 0 1 2 0v1h.528A3.476 3.476 0 0 1 60 29.472a1 1 0 0 1-2 0A1.473 1.473 0 0 0 56.528 28H56v4.382l2.081 1.04A3.473 3.473 0 0 1 56.528 40H56v1a1 1 0 0 1-2 0v-1h-.528A3.476 3.476 0 0 1 50 36.528a1 1 0 0 1 2 0A1.473 1.473 0 0 0 53.472 38H54v-4.382z"
                style={{ fill: "#202021" }}
              />
              <path
                d="M58 36.528a1.464 1.464 0 0 0-.814-1.317L56 34.618V38h.528A1.473 1.473 0 0 0 58 36.528zM54 28h-.528a1.472 1.472 0 0 0-.659 2.79l1.187.592z"
                // style={{fill:"#202021"}}
              />
              <path
                d="M55 49a16 16 0 1 0-16-16 16.018 16.018 0 0 0 16 16zm0-28a12 12 0 1 1-12 12 12.013 12.013 0 0 1 12-12zM55 14a1 1 0 0 0 1-1V2a1 1 0 0 0-2 0v11a1 1 0 0 0 1 1zM61 16a1 1 0 0 0 1-1V7a1 1 0 0 0-2 0v8a1 1 0 0 0 1 1zM49 16a1 1 0 0 0 1-1V7a1 1 0 0 0-2 0v8a1 1 0 0 0 1 1z"
                // style={{fill:"#202021"}}
              />
            </g>
          </svg>
        </Button> */}
        {cartQuantity > 0 && (
          <Button
            onClick={openCart}
            style={{ width: "3rem", height: "3rem", position: "relative" }}
            variant="outline-primary"
            className="rounded-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="currentColor"
            >
              <path d="M528.12 301.319l47.273-208C578.545 79.406 564.835 64 548.118 64H128l-5.646-32.131C120.114 14.57 106.72 0 90.158 0H24C10.745 0 0 10.745 0 24s10.745 24 24 24h50.91l61.6 350.438C142.863 435.187 173.479 464 209.034 464H480c13.255 0 24-10.745 24-24s-10.745-24-24-24H209.034c-10.547 0-20.055-7.447-22.053-17.81L179.09 368h298.192c22.517 0 42.059-15.553 47.273-37.319zM208 512a48 48 0 1 0 0-96 48 48 0 0 0 0 96zm288 0a48 48 0 1 0 0-96 48 48 0 0 0 0 96z" />
            </svg>
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%, 25%)",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBs>
  );
}