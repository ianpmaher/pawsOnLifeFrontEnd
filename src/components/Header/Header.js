import styled from "styled-components";
import Nav from "../Nav/Nav"

const HeaderContainer = styled.header`
    text-align: center;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-around;
`;

const HeaderText = styled.h1`
    letter-spacing: 3px;
    margin: 0.5rem auto
`;

const Header = (props) => {
    return (
        <HeaderContainer>
            <HeaderText>PawsOn.Life</HeaderText>
            <Nav />
        </HeaderContainer>
    );
};

export default Header;