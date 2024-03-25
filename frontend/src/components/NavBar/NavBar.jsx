import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/User/UserActions";
import { useNavigate } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate("/login");
    };

    const handleLogin = () => {
        navigate('/login')
    }

    return (
        <Navbar id="nav_main"
            expand="lg"
            style={{
                padding: "0px 80px",
                position: "fixed",
            }}
        >
            <Container fluid>
                <Navbar.Brand href="#" style={{ fontSize: "30px" }}>
                    WoodWonders
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Shop</Nav.Link>
                        <Nav.Link href="#action3">About</Nav.Link>
                        <Nav.Link href="#action4">Contact us</Nav.Link>
                    </Nav>
                    <div className="d-flex" style={{ padding: "0px 20px" }}>
                        <FontAwesomeIcon
                            icon={faShoppingCart}
                            style={{ marginRight: "20px", cursor: "pointer", marginTop: "10px", fontSize: "18px" }}
                        />

                        <FontAwesomeIcon
                            icon={faHeart}
                            style={{ marginRight: "20px", cursor: "pointer", marginTop: "10px", fontSize: "18px" }}
                        />

                        <Dropdown style={{ padding: "0px" }}>
                            <Dropdown.Toggle
                                variant="link"
                                id="dropdown-basic"
                                style={{ color: "black", padding: "0px", marginTop: "8px" }}
                            >
                                <FontAwesomeIcon
                                    icon={faUser}
                                    style={{ cursor: "pointer", color: "black", fontSize: "18px" }}
                                />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {user.is_authenticated ? (
                                    <>
                                        <Dropdown.Item href="#/action/profile">Profile</Dropdown.Item>
                                        <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                                    </>
                                ) : (
                                    <Dropdown.Item onClick={handleLogin}>Login</Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
