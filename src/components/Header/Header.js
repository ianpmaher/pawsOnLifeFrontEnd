import styled from "styled-components";
import Nav from "../Nav/Nav"

const HeaderContainer = styled.header`
    text-align: center;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin: 0.5rem auto auto auto;
    position: sticky;
`;

const HeaderText = styled.h1`
    letter-spacing: 2px;
    @media (max-width: 768px) {
        letter-spacing: 0;
        font-size: 1.3rem;
    }
`;

const Header = ({loggedIn}) => {
    return (
        <div>
            <HeaderContainer>
                <HeaderText>PawsOn.Life</HeaderText>
                <Nav loggedIn={loggedIn} />
            </HeaderContainer>
        </div>
    );
};

export default Header;