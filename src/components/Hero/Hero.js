import { CardContent } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import styled from "styled-components";

// https://www.freepik.com/free-vector/faceless-happy-woman-walking-with-dog-park_9649736.htm#page=2&query=dog%20hiking&position=4&from_view=keyword&track=ais" Image by pch.vector

const HeroContainer = styled.div`
    font-family: "Roboto Serif", serif;
    max-width: 80vw;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        flex-flow: column wrap;
        gap: 0.5rem;
    }
    @media (max-width: 1000px) {
        gap: 1rem;
    }
`;

const HeroText = styled.p`
    font-size: 1.15rem;
    font-family: "Young Serif", serif;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
    @media (max-width: 1000px) {
        font-size: 0.8rem;
    }
`;

const Hero = (props) => {
    return (
        <HeroContainer>
            <Card sx={{maxWidth: 345}}>
                <CardMedia
                    sx={{ height: 200 }}
                    image="https://i.imgur.com/9PMNlbO.png"
                    title="Dog Hiking"
                    component={"img"}
                />
                <CardContent>
                    <HeroText>Connecting humans and their animal companions with the natural world</HeroText>
                </CardContent>
            </Card>
        </HeroContainer>
    );
};

export default Hero;