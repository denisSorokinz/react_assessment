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
                <StyledNavLink>
                    <Link to="/">Home</Link>
                </StyledNavLink>
            </NavItem>
            <NavItem>
                <StyledNavLink>
                    <Link to="/news">News</Link>
                </StyledNavLink>
            </NavItem>
            <NavItem>
                <StyledNavLink>
                    <Link to="/profile">Profile</Link>
                </StyledNavLink>
            </NavItem>
        </Nav>
        <Button>Login</Button>
    </Navbar>
);

export default Header;