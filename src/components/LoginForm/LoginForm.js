import styled from "styled-components";
import PetsIcon from '@mui/icons-material/Pets';
import { useState } from "react";
import "./LoginForm.css"

const LoginContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    margin: 1rem; auto;
    padding: 2rem;
    border-radius: 20px;
    width: 80vw;
    height: 100%;
    gap: 0.25rem;
    background: linear-gradient(20deg, var(--orange-alloy-color) 0%, var(--champagne-color) 100%);
    position: relative;
`
const LoginUser = styled.input`
    height: 5vh;
    margin: 0.25rem auto;
    width: 30rem;
    border-radius: 5px;
    box-shadow: 0 0 2rem rgba(0,0,0,0.25);
    overflow:hidden;
    letter-spacing: 2px;
    padding: 0.25rem;

    &:focus {
        outline: none;
    }
`

const LoginPass = styled.input`
    min-height: 5vh;
    margin: 0.25rem auto;
    width: 30rem;
    border-radius: 5px;
    box-shadow: 0 0 2rem rgba(0,0,0,0.25);
    overflow: hidden;
    letter-spacing: 2px;
    padding: 0.25rem;
    
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

const LoginButton = styled.button`
    font-size: 1.2rem;
    font-family: "Nunito", sans-serif;
    padding: 0.5rem;
    color: white;
    border: 2px solid var(--green-light-blue-color);
    border-radius: 20px;
    background-color: var(--blue-sapphire-color);
    cursor: pointer;
    transition: all 0.7s ease-in-out;
    &:hover {
        opacity: 0.8;
        border: 2px solid var(--yellow-sun-color);
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
                <LoginUser name="email" placeholder="Login Email" className="input-area" />
                <FancyBorder></FancyBorder>
                <LoginPass name="password" placeholder="Password" type="password" className="input-area" />
                <LoginButton onClick={handleLogin} aria-label="login">
                    Login
                </LoginButton>
            </LoginContainer>}
        </>
    );
};

export default LoginForm;