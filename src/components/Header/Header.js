import styled from "styled-components";
import Nav from "../Nav/Nav";
import Card from "@mui/material/Card";

const HeaderContainer = styled.header`
    text-align: center;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin: 0.15rem auto;
    gap: 0.1rem;
    position: sticky;
`;

const HeaderText = styled.h1`
    letter-spacing: 1px;
    margin: 0 auto;
    @media (max-width: 768px) {
        letter-spacing: 0;
        font-size: 1.3rem;
    }
`;

const Header = ({ loggedIn }) => {
    return (
        <div>
            <HeaderContainer>
                <Card sx={{p: "0rem 0.5rem"}}>
                    <HeaderText>PawsOn.Life</HeaderText>
                </Card>
                <Nav loggedIn={loggedIn} />
            </HeaderContainer>
        </div>
    );
};

export default Header;
