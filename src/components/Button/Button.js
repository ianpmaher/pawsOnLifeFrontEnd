import styled from "styled-components";

const Button = styled.button`
    font-size: 1.2rem;
    width: 9rem;
    font-family: "Nunito", sans-serif;
    padding: 0.5rem;
    color: white;
    border: 2px solid var(--green-light-blue-color);
    border-radius: 20px;
    background-color: var(--blue-sapphire-color);
    cursor: pointer;
    max-width: 5rem;
    transition: all 0.7s ease-in-out;
    &:hover {
        opacity: 0.8;
        border: 2px solid var(--yellow-sun-color);
    }
    &:active {
        background-color: var(--yellow-sun-color);
    }
`

export default Button;