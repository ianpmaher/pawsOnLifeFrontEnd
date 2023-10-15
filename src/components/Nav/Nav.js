// ALL DA ROUTES
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.nav`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`;

const Nav = (props) => {
    return (
        <NavBar>
            <Link to="/">HOME</Link>
            <Link to="/trails">TRAILS & MAPS</Link>
            <Link to="/login">LOGIN / CREATE ACCOUNT</Link>
        </NavBar>
    );
};

export default Nav;
