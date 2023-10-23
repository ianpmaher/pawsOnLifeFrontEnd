import styled from 'styled-components';
import Grid from "@mui/material/Grid"

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
const TrailCard = ({title, url, content}) => {
    return (
        <Card>
            <UlTrail>
                <h4>{title}</h4>
                <ImgCard src={url} alt={title}/>
                <li>{content}</li>
                <li>{content}</li>
            </UlTrail>
        </Card>
    )
}

const Main = (props) => {
    /* I have these placeholders for now, just looking at margins and stuff */
    /*  */
    return (
        <MainContainer>
            <Grid container spacing={3}>
                {props.trails.map((trail, index) => (
                    <Grid item xs key={index}>
                        <TrailCard key={index} title={trail.title} url={trail.url} content={trail.content} />
                    </Grid>
                ))}
            </Grid>
            
        </MainContainer>
    )
}

export default Main