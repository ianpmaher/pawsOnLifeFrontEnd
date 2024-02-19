import styled from "styled-components";
import LoginForm from "../../components/LoginForm/LoginForm";
import { isAuthorized } from "../../services/auth";

const LoginPageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-image: url("/doggo-cropped.png");
    background-size: contain;
    background-position: top;
    background-repeat: space;
    margin: 0 10rem;    
`

const LoginPage = ({setLoggedIn}) => {
    //
    return (
        <LoginPageContainer>
            <LoginForm validate={isAuthorized} setLoggedIn={setLoggedIn}/>
        </LoginPageContainer>
    )
}

export default LoginPage