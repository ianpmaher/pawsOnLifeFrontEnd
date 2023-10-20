import { useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import "./RegistrationForm.css";

const RegContainer = styled.div`
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
    /* useState function definitions */

    return (
        <RegContainer>
            <h1>RegistrationForm</h1>
            <RegField placeholder="coool stuff" className="input-area"></RegField>
            <FancyBorder/>
            <RegField placeholder="coool stuff" className="input-area"></RegField>
            <FancyBorder />
            <Button>submit</Button>
        </RegContainer>
    );
};

export default RegistrationForm;
