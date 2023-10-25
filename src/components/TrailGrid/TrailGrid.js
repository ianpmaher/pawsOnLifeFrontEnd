import styled from 'styled-components';
import Grid from "@mui/material/Grid"
import DogBone from '../DogBone/DogBone';

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
`

const Card = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    background-color: var(--blue-sapphire-color);
    padding: 0.5rem;
    border-radius: 20px;
    margin: 0.25rem auto;
    @media (max-width 768px) {
        max-width: 8rem;
        max-height: 5rem;
    }
`

const ImgCard = styled.img`
    width: 100%;
    height: auto;
    max-width: 15rem;
    max-height: 15rem;
    @media (max-width: 768px) {
        max-width: 10rem;
        max-height: 10rem;
    }
`
const UlTrail = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`

/* Props! */
const TrailCard = ({title, url, content, review}) => {
    return (
        <Card>
            <UlTrail>
                <h4>{title}</h4>
                <ImgCard src={url} alt={title}/>
                <li>{content}</li>
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
        </Card>
    )
}

const TrailGrid = (props) => {
    /* I have these placeholders for now, just looking at margins and stuff */
    /*  */
   

    return (
        <MainContainer>
            <Grid container spacing={3}>
                {props.trails.map((trail, index) => (
                    <Grid item xs key={index}>
                        <TrailCard key={index} title={trail.title} url={trail.url} content={trail.content} review={trail.review} />
                    </Grid>
                ))}
            </Grid>
            
        </MainContainer>
    )
}

export default TrailGrid