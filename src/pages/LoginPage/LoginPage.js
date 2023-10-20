import styled from "styled-components";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const LoginPage = (props) => {
    //
    return (
        <LoginPageContainer>
            <LoginForm />
        </LoginPageContainer>
    )
}

export default LoginPage