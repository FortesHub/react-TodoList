import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";

import './Header.css';

function Header() {
  return (
    <Navbar bg="dark">
      <Container>
        <NavbarBrand href="/home">
        <div className="header">
            <img
              alt="todo"
              src="/images/checkBlockchain.png"
              width="30"
              height="30"
            ></img>
            TodoList
          </div>
        </NavbarBrand>
      </Container>
    </Navbar>
  );
}
export default Header;
