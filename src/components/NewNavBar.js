import {
    CButton,
    CCollapse,
    CContainer, CForm, CFormInput,
    CNavbar,
    CNavbarBrand,
    CNavbarNav,
    CNavbarToggler,
    CNavItem,
    CNavLink
} from "@coreui/react";
import {useState} from "react";
import {Link} from "react-router-dom";


function NewNavBar(){
    const [visible, setVisible] = useState(false);
    return(
        <>

            <CNavbar expand="lg" colorScheme="light" className="bg-light">

                <CContainer fluid>

                    <CNavbarToggler

                        aria-label="Toggle navigation"

                        aria-expanded={visible}

                        onClick={() => setVisible(!visible)}

                    />

                    <Link to="/"  className="navbar-brand" >Home</Link>

                    <CCollapse className="navbar-collapse" visible={visible}>

                        <CNavbarNav className="me-auto mb-2 mb-lg-0">

                            <CNavItem>


                                <Link to="/register"  className="nav-link" >Register</Link>

                            </CNavItem>

                            <CNavItem>

                                <CNavLink href="#" disabled>

                                    Login

                                </CNavLink>

                            </CNavItem>

                        </CNavbarNav>

                        <CForm className="d-flex">
                            <CFormInput type="search" className="me-2" placeholder="Email" />
                            <CFormInput type="search" className="me-2" placeholder="Password" />
                            <CButton type="submit" color="success" variant="outline">
                                Login
                            </CButton>
                        </CForm>

                    </CCollapse>

                </CContainer>

            </CNavbar>

        </>
    )
}
export default NewNavBar;