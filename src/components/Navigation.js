import {Container, Navbar, Nav} from "react-bootstrap";
function Navigation(props){

    return(
        <div>
            <Navbar className="navigation" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" id="home" onClick={props.display}>Trainers of the Realm</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#about" id="about" onClick={props.display}>About</Nav.Link>
                            <Nav.Link href="#lore" id={"lore"} onClick={props.display}>Lore</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#register">Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
export default Navigation;