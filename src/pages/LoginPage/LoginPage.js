import styled from "styled-components";
import LoginForm from "../../components/LoginForm/LoginForm";
import { isAuthorized } from "../../services/auth";

const LoginPageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const LoginPage = (props) => {
    //
    return (
        <LoginPageContainer>
            <LoginForm validate={isAuthorized}/>
        </LoginPageContainer>
    )
}

export default LoginPage