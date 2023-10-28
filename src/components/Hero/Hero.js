import styled from "styled-components";

// https://www.freepik.com/free-vector/faceless-happy-woman-walking-with-dog-park_9649736.htm#page=2&query=dog%20hiking&position=4&from_view=keyword&track=ais" Image by pch.vector

const HeroContainer = styled.div`
    font-family: "Roboto Serif", serif;
    max-width: 80vw;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    gap: 2rem;
    align-items: center;
    @media (max-width: 768px) {
        flex-flow: column wrap;
        gap: 0.5rem;
    }
    @media (max-width: 1000px) {
        gap: 1rem;
    }
`;
const DivContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    
    min-height: 5rem;
    background: var(--blue-deep-color);
    padding: 0.1rem 1rem;
    border-radius: 20px;
    @media (max-width: 768px) {
        min-width: 10rem;
    }
    @media (max-width: 1000px) {
        min-width: 15rem;
    }
`
const HeroText = styled.p`
    font-size: 1.35rem;
    font-weight: 500;
    font-family: "Young Serif", serif;
    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
    @media (max-width: 1000px) {
        font-size: 0.8rem;
    }
`;

const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 30vw;
    @media (max-width: 768px) {
        max-width: 100%;
    }
`;

const ImgCard = styled.img`
    max-height: 30vh;
    max-width: 30vw;
    border-radius: 20px;
`;

const Hero = (props) => {
    return (
        <HeroContainer>
            <FlexContainer>
                <DivContainer>
                    <HeroText> Connecting humans and their animal companions with the natural world.</HeroText>

                </DivContainer>
                </FlexContainer>
            <ImgCard src="https://i.imgur.com/9PMNlbO.png" alt="doggy" />
        </HeroContainer>
    );
};

export default Hero;
