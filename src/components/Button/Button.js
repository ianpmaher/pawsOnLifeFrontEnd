import styled from "styled-components";

const Button = styled.button`
    font-size: 1.2rem;
    width: 9rem;
    min-width: fit-content;
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
    &:active {
        background-color: var(--yellow-sun-color);
    }
    @media (max-width: 768px) {
        font-size: 0.9rem;
        max-width: 5rem;
    }
`

export default Button;