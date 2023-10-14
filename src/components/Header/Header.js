import styled from "styled-components";

const HeaderContainer = styled.header`
    text-align: center;
`;

const HeaderText = styled.h1`
    letter-spacing: 3px;
    margin: 0.5rem auto
`;

const Header = (props) => {
    return (
        <HeaderContainer>
            <HeaderText>PawsOn.Life</HeaderText>
        </HeaderContainer>
    );
};

export default Header;