import styled from "styled-components"

const InputFieldStyle = styled.input`
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

const InputField = () => {
    return (
        <InputFieldStyle>

        </InputFieldStyle>
    )
}

export default InputField