import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'


function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">Epood</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/halda">Admin</Nav.Link>
            <Nav.Link as={Link} to="/kaart">Kaart</Nav.Link>


          </Nav>
          <Nav>
          <Nav.Link as={Link} to="/kontakteeru">Kontakteeru</Nav.Link>
          <Nav.Link as={Link} to="/ostukorv">Ostukorv</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;