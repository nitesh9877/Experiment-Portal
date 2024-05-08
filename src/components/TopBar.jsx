// TopBar.js
import React, { useContext } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import { MyContext } from '../MyContextProvider';
import {  Link } from 'react-router-dom';

const TopBar = () => {
  const { count,secondcount,thirdcounter } = useContext(MyContext);

  return (
    <Navbar style={{ backgroundColor: "#03AED2", color: "#fff" }}>
      <Container>
        <Navbar.Brand as={Link} to="/">Naukri</Navbar.Brand>
        <Nav className="me-auto">
          
          <NavDropdown title="Home" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/counter">Counter</NavDropdown.Item>
            <NavDropdown.Item as={Link} to ="/secondcounter">Second Counter</NavDropdown.Item>
            <NavDropdown.Item as={Link} to ="/thirdcounter">Third Counter</NavDropdown.Item>
            <NavDropdown.Item href="#home">Something else</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Demo" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/crudoperation">Crud operation</NavDropdown.Item>
            <NavDropdown.Item href="#home">Something else</NavDropdown.Item>
          </NavDropdown>

        </Nav>
        <Nav.Link > First:{count}</Nav.Link>&nbsp;
        <Nav.Link >Second:{secondcount}</Nav.Link>
        <Nav.Link >third:{thirdcounter}</Nav.Link>
        <Button variant="outline-dark">Login</Button>
      </Container>
    </Navbar>
  );
};

export default TopBar;
