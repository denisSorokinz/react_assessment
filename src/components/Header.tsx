import React from "react";
import { Link } from "react-router-dom";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink as StyledNavLink,
    Button,
} from "reactstrap";

const Header = () => (
    <Navbar color="dark" dark>
        <NavbarBrand>React Assignment</NavbarBrand>
        <Nav className="m-auto" navbar>
            <NavItem>
                <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
                <Link to="/news">News</Link>
            </NavItem>
            <NavItem>
                <Link to="/profile">Profile</Link>
            </NavItem>
        </Nav>
        <Button>Login</Button>
    </Navbar>
);

export default Header;
