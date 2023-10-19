import styled from "styled-components";

const HeroContainer = styled.div`
    display: flex;
    flex-flow: column;
    font-family: "Roboto Serif", serif;
    max-width: 80vw;
    min-height: 100%;
    margin: 0 auto;

`
const HeroText = styled.p`
    letter-spacing: 0.1rem;
    font-size: 1.5rem;
    font-weight: 500;
`

const Hero = (props) => {
    return (
    <>
        <HeroContainer>
            <HeroText>
                Connecting humans and their animal companions with the natural world.
            </HeroText>
        </HeroContainer>
    </>
    )
}

export default Hero;