import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Projeto Filmes</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/" className="nav-link">Hello World</Link>
                            <Link to="/pagina1" className="nav-link">Página 1</Link>
                            <Link to="/pagina2" className="nav-link">Página 2</Link>
                            <Link to="/arrays" className="nav-link">Arrays</Link>
                            <Link to="/objetos" className="nav-link">Objetos</Link>
                            <Link to="/estados" className="nav-link">Estados</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Menu
