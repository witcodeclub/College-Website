import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const CollegeNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar 
      bg="primary" 
      variant="dark" 
      expand="md" 
      expanded={expanded}
      className="shadow"
    >
      <Container>
        {/* Logo / Brand */}
        <Navbar.Brand as={Link} to="/">
          College Name
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle 
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />

        {/* Navbar Links */}
        <Navbar.Collapse>
          <Nav className="ms-auto" onClick={() => setExpanded(false)}>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/academics">Academics</Nav.Link>
            <Nav.Link as={Link} to="/admissions">Admissions</Nav.Link>
            <Nav.Link as={Link} to="/placements">Placements</Nav.Link>
            <Nav.Link as={Link} to="/studentlife">Student Life</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CollegeNavbar;
