import {Container, Navbar, Nav,} from "react-bootstrap";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import {useState} from "react";



function Navigation(props){
    const [expanded, setExpanded] = useState(false);
    return(
        <div>
            <Navbar className="navigation" expanded={expanded} collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Container>
                    <Link to="/" className="navbar-brand">Realms</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <HashLink to="/#home" className="nav-link" onClick={() => setExpanded(false)}>Home</HashLink>
                            <HashLink to="/#about" className="nav-link" onClick={() => setExpanded(false)}>About</HashLink>
                        </Nav>
                        <Nav>
                            <Link to="/register" className="nav-link" onClick={() => setExpanded(false)}>Register</Link>
                            <Link to="/login" className="nav-link" onClick={() => setExpanded(false)}>Login</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
export default Navigation;