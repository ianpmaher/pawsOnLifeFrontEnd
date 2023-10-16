import styled from "styled-components";
import { useState } from "react";

const LoginContainer = styled.div`

`
const LoginUser = styled.input`

`

const LoginPass = styled.input`

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