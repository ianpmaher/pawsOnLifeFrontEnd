import { useEffect } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import "./RegistrationForm.css";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha';

const RegContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    padding: 2rem;
    border-radius: 20px;
    max-width: 50;
    height: 100%;
    gap: 0.25rem;
    background: linear-gradient(20deg, var(--orange-alloy-color) 0%, var(--champagne-color) 100%);
    position: relative;
`;
const RegField = styled.input`
    height: 5vh;
    margin: 0.25rem auto;
    min-width: 20vw;
    border-radius: 5px;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.55);
    overflow: hidden;
    letter-spacing: 2px;
    padding: 0.25rem;
    transition: 0.9s all ease-in-out;

    &:focus {
        outline: none;
    }
`;

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
        background-color: #3399ff;
        transition: 0.4s;
    }
`;

const RegistrationForm = (props) => {
    /* ========================== */
    /* useEffect function definitions */
    
    useEffect(() => {
        loadCaptchaEnginge(8);
    })

    const handleRegister = async (event) => {
        const formData = {
            username: event.target.parentNode.children[0].value,
            email: event.target.parentNode.children[1].value,
            password: event.target.parentNode.children[2].value,
            confirmPassword: event.target.parentNode.children[3].value,
            captcha: event.target.parentNode.children[5].value
        }
        const captchaPassed = validateCaptcha(formData.captcha);

        console.log("Captcha Passed", captchaPassed);

        if(formData.password === formData.confirmPassword && captchaPassed){
                const result = await fetch('http://localhost:4013/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            });
            if(result.status === 200) {
                alert("Please verify your account by checking your email.");
            }else{
                alert(await result.text());
            }
        }else{
            //TODO: Warn user passwords do not match
        }

        
    }
    return (
        <RegContainer>
                    <RegField name="username" placeholder="Username" className="input-area" />
                    <FancyBorder />
                    <RegField name="email" placeholder="Email Address" type="email" className="input-area" />
                    <FancyBorder />
                    <RegField name="password" placeholder="Password" type="password" className="input-area" />
                    <RegField name="passwordConfirm" placeholder="Confirm Password" type="password" className="input-area" />
                    <FancyBorder />
                    <LoadCanvasTemplate />
                    <RegField name="captcha" placeholder="Captcha" className="input-area" />
                    <FancyBorder />
                    <Button onClick={handleRegister} aria-label="Register">
                        Register
                    </Button>
                </RegContainer>
    );
};

export default RegistrationForm;
