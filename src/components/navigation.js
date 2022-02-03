import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';

import Home from '../pages/home';
import Transaction from '../pages/transaction';

function Navigation() {
    return (
        <Navbar className="navbar">
            <Container>
            <Navbar.Brand component={Home} style={{color: "#283618"}}>MyBanking</Navbar.Brand>
            <Nav className="nav_link">
                <Nav.Link component={Transaction}>Transactions</Nav.Link>
                <Nav.Link href="#logout">Logout</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;