import {Container, Navbar, Nav} from "react-bootstrap";
function Navigation(){
    return(
        <div>
            <Navbar className="navigation" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Trainers of the Realm</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#lore">Lore</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#signup">Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
export default Navigation;