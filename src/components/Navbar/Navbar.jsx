import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const NavbarComponent = () => {
    const [isLogin, setIsLogin] = useState(false)
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">Toptech</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        {
                            isLogin ? (
                                <Navbar.Text>
                                    Signed in as: <a href="#login">Mark Otto</a>
                                </Navbar.Text>
                            ) : (
                                <>
                                    <Link to={"/signin-auth"}><Button variant="outline-primary">Sign In</Button></Link>
                                    <Link to={"/signup-auth"}><Button style={{ marginLeft: "1rem" }} variant="outline-secondary">Sign Up</Button></Link></>
                            )
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default NavbarComponent;