import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';

function Navigation() {
    return (
        <Navbar className="navbar">
            <Container>
            <Navbar.Brand href='/home'>
                <img
                src={require('../assets/logo.png')}
                width='40'
                height='40'
                className='d-inline-block'
                alt="bank_logo"
                />{' '}
                Banco del Dragones
            </Navbar.Brand>
            <Nav className="nav_link">
                <Nav.Link href='/profile'>Profile</Nav.Link>
                <Nav.Link href='/transaction'>Transactions</Nav.Link>
                <Nav.Link href="#logout">Logout</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;