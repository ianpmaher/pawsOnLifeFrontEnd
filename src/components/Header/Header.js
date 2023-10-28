import styled from "styled-components";
import Nav from "../Nav/Nav";
import Card from "@mui/material/Card";

const HeaderContainer = styled.header`
    text-align: center;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto 0.25rem auto;
    position: sticky;
`;

const HeaderText = styled.h1`
    letter-spacing: 3px;
    margin: 0.5rem auto
`;

const Header = () => {
    return (
        <div>
            <HeaderContainer>
                <Card sx={{ flexGrow: 1, borderRadius: 5, padding: 1 }}>
                    <HeaderText>PawsOn.Life</HeaderText>
                </Card>
                <Nav />
            </HeaderContainer>
        </div>
    );
};

export default Header;