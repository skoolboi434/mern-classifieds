import React, { useState } from 'react';
import { Button, Offcanvas, Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaBars, FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  const [showSidebar, setShowSidebar] = useState();

  const handleClose = () => setShowSidebar(false);
  const handleShow = () => setShowSidebar(true);

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
        <Container>
          <Button variant='dark' className='me-2' onClick={handleShow}>
            <FaBars />
          </Button>
          <LinkContainer to='/'>
            <Navbar.Brand className='m-auto'>MERN - Classifieds</Navbar.Brand>
          </LinkContainer>
          <LinkContainer to='/'>
            <FaShoppingCart className='text-white' />
          </LinkContainer>
        </Container>
      </Navbar>

      <Offcanvas show={showSidebar} onHide={handleClose} placement='start'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className='flex-column'>
            <Nav.Link>Home</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};

export default Header;
