import styled from "styled-components";
import PetsIcon from '@mui/icons-material/Pets';
import { useState } from "react";

const LoginContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    margin: 1rem; auto;
    padding: 2rem;
    border-radius: 20px;
    width: 80vw;
    height: 30vh;
    gap: 0.25rem;
    background: linear-gradient(20deg, var(--orange-alloy-color) 0%, var(--champagne-color) 100%)
`
const LoginUser = styled.input`
    height: 5vh;
    margin: 0.25rem auto;
    width: 15rem;
    border-radius: 5px;
`

const LoginPass = styled.input`
    min-height: 5vh;
    margin: 0.25rem auto;
    width: 15rem;
    border-radius: 5px;
`

const LoginButton = styled.button`
    font-size: 1.2rem;
    font-family: "Nunito", sans-serif;
    padding: 0.5rem;
    color: white;
    border: 1px solid var(--green-light-blue-color);
    border-radius: 20px;
    background-color: var(--blue-sapphire-color);
    cursor: pointer;
    transition: opacity 1s ease-in-out;
    &:hover {
        opacity: 0.8;
    }
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
                <LoginButton onClick={handleLogin} aria-label="login">
                    {/* <PetsIcon/> */} {/* this would be so insanely cute but bad accessibility*/}
                    Login
                </LoginButton>
            </LoginContainer>}
        </>
    );
};

export default LoginForm;