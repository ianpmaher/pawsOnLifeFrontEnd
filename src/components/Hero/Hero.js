import styled from "styled-components";

// https://www.freepik.com/free-vector/faceless-happy-woman-walking-with-dog-park_9649736.htm#page=2&query=dog%20hiking&position=4&from_view=keyword&track=ais" Image by pch.vector

const HeroContainer = styled.div`
    font-family: "Roboto Serif", serif;
    max-width: 80vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 1rem;
    place-items: center;
    align-items: center;
    
`;
const HeroText = styled.p`
    font-size: 1.5rem;
    font-weight: 500;
    @media (max-width: 768px) {
        font-size: 1rem;
    }
    @media (max-width: 1000px) {
        font-size: 0.8rem;
    }
`;

const FlexContainer = styled.div`
    display: flex;
    align-items: center;
`;

const ImgCard = styled.img`
    max-height: 80%;
    max-width: 80%;
    border-radius: 20px;
`;

const Hero = (props) => {
    return (
        <>
            <HeroContainer>
                <FlexContainer>
                    <HeroText> Connecting humans and their animal companions with the natural world.</HeroText>
                </FlexContainer>
                <ImgCard src="https://i.imgur.com/9PMNlbO.png" alt="doggy" />
            </HeroContainer>
        </>
    );
};

export default Hero;
