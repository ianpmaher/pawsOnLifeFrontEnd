import styled from "styled-components";
import DogBone from "../DogBone/DogBone";
import Grid from "@mui/material/Grid"
import WaterDropIcon from '@mui/icons-material/WaterDrop';

const FlexContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`
const UlTrail = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`

const Card = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    background-color: var(--blue-sapphire-color);
    padding: 0.75rem;
    border-radius: 20px;
    margin: 0.25rem auto;
    @media (max-width 768px) {
        max-width: 8rem;
        max-height: 5rem;
    }
`

const TrailCard = ({title, content, review, length}, {weight}) => {
    return (
        <Card>
            <UlTrail>
                <h4>{title}</h4>
                {/* ==================================== */}
                {/* LOGIC FOR NUMBER OF BONES FOR REVIEWS */}
                { review === 1 && <>
                <li><DogBone /></li>
                </>}
                { review === 2 && <>
                <li><DogBone />
                <DogBone /></li>
                </>}
                { review === 3 && <>
                <li><DogBone />
                <DogBone />
                <DogBone /></li>
                </>}
                { review === 4 && <>
                <li><DogBone />
                <DogBone />
                <DogBone />
                <DogBone /></li>
                </>}
                { review === 5 && <>
                <li><DogBone />
                <DogBone />
                <DogBone />
                <DogBone />
                <DogBone /></li>
                </>}
            </UlTrail>
            <UlTrail>
                <li><WaterDropIcon/> This is a {length} mile trek.</li>
                <li><WaterDropIcon/></li>
            </UlTrail>
        </Card>
    )
}

const WaterCard = ({weight}, {length}) => {
    return (
        <Card style={{fontFamily: "Roboto Serif"}}>
            <UlTrail>
                <li>Your doggo needs at least {weight} fluid ounces of water <WaterDropIcon/> for the trip.</li>
            </UlTrail>
        </Card>
    )
}

const WaterRec = ({userDog, trails}) => {
    // need to reformat model contained within HomePage
    return (
        <FlexContainer>
            <h2>the user's dog is <span><em>{userDog.breed}</em></span> breed and weighs <span><em>{userDog.weight}</em></span> lbs.</h2> 
            <Grid container spacing={3} justifyContent="center" alignItems="center">
                {trails.map((trail, index) => (
                    <Grid item xs key={index}>
                        <TrailCard key={index} title={trail.title} content={trail.length} review={trail.review} length={trail.length} />
                    </Grid>
                ))}
            
            </Grid>
            <Grid item xs>
                <WaterCard weight={userDog.weight} />
            </Grid> 
            
        </FlexContainer>
        
        
    )
}

export default WaterRec