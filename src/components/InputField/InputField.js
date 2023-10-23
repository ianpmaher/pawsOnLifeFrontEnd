import styled from "styled-components"

const InputFieldStyle = styled.input`
    height: 5vh;
    margin: 0.25rem auto;
    min-width: 30vw;
    border-radius: 5px;
    box-shadow: 0 0 2rem rgba(0,0,0,0.55);
    border: 2px solid #eee;
    overflow:hidden;
    letter-spacing: auto;
    padding: 0.25rem;
    transition: 0.9s all ease-in-out;

    &:focus {
        outline: none;
        border-color: var(--blue-sapphire-color);
        box-shadow: 0 1px 0 0px #26A69B;
    }
    @media (max-width: 768px) {
        min-width: 25vh;
    }
`

const InputField = () => {
    return (
        <InputFieldStyle>

        </InputFieldStyle>
    )
}

export default InputField