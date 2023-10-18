import styled from "styled-components";
import { useState } from "react";

const LoginContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    gap: 0.5rem;
`
const LoginUser = styled.input`
    height: 5vh;
`

const LoginPass = styled.input`
    min-height: 5vh;
`

const LoginButton = styled.button`

`

let loggedInAs = null;

const LoginForm = (props) => {
    const [username, setUsername ] = useState(null);

    const handleLogin = async (event) => {
        event.preventDefault();
        const result = await (await fetch('http://localhost:4013/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify({
                email: event.target.parentNode.children[0].value,
                password: event.target.parentNode.children[1].value
            })
        })).json();
        localStorage.setItem("username",result.username);
        loggedInAs = result.username;
        setUsername(result.username);
        localStorage.setItem("token",result.token);
    }

    return (
        <>
            {username && <LoginContainer>Logged in as {username}</LoginContainer>}
            {!username &&
            <LoginContainer>
                <LoginUser name="email" placeholder="Login Email" />
                <LoginPass name="password" placeholder="Password" type="password"/>
                <LoginButton onClick={handleLogin} >Login</LoginButton>
            </LoginContainer>}
        </>
    );
};

export default LoginForm;