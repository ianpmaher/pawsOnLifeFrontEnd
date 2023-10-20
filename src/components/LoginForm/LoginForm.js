import styled from "styled-components";
import { useState } from "react";
import "./LoginForm.css"
import Button from "../Button/Button";

const LoginContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    margin: 1rem; auto;
    padding: 2rem;
    border-radius: 20px;
    max-width: 50;
    height: 100%;
    gap: 0.25rem;
    background: linear-gradient(20deg, var(--orange-alloy-color) 0%, var(--champagne-color) 100%);
    position: relative;
`
const LoginField = styled.input`
    height: 5vh;
    margin: 0.25rem auto;
    min-width: 20vw;
    border-radius: 5px;
    box-shadow: 0 0 2rem rgba(0,0,0,0.55);
    overflow:hidden;
    letter-spacing: 2px;
    padding: 0.25rem;
    transition: 0.9s all ease-in-out;

    &:focus {
        outline: none;
    }
`

const FancyBorder = styled.span`
    border: 0;
    padding: 7px 0;
    border-bottom: 1px solid var(--blue-sapphire-color);
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    &:focus {
        width: 100%;
        background-color: #3399FF;
        transition: 0.4s;
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
                <LoginField name="email" placeholder="Login Email" className="input-area" />
                <FancyBorder></FancyBorder>
                <LoginField name="password" placeholder="Password" type="password" className="input-area" />
                <Button onClick={handleLogin} aria-label="login">
                    Login
                </Button>
            </LoginContainer>}
        </>
    );
};

export default LoginForm;