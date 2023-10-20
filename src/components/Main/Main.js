import styled from 'styled-components';
import PetsIcon from '@mui/icons-material/Pets';

const MainContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    height: 100%;
    border-radius: 20px;
`

const Row = styled.div`
    display: flex;
    flex-flow: row wrap;
    gap: 2rem;
`

const Card = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    background-color: var(--blue-sapphire-color);
    padding: 1rem;
    border-radius: 20px;
    margin: 0.5rem auto;
`

const ImgCard = styled.img`
    width: 100%;
    height: auto;
    max-width: 20rem;
    max-height: 20rem;
    @media (max-width: 768px) {
        max-width: 10rem;
        max-height: 10rem;
    }
`

/* Props! */
const TrailCard = ({title, url, content}) => {
    return (
        <Card>
            <h3>{title}</h3>
            <ImgCard src={url} alt={title}/>
            <p>{content}</p>
        </Card>
    )
}

const Main = (props) => {
    /* I have these placeholders for now, just looking at margins and stuff */
    /*  */
    return (
        <MainContainer>
            <Row>
                <Card>
                    <PetsIcon />
                </Card>
                <Card>
                    <PetsIcon />
                </Card>
            </Row>
            <Row>
                {props.trails.map((trail, index) => (
                    <TrailCard key={index} title={trail.title} url={trail.url} content={trail.content} />
                ))}
            </Row>
            
        </MainContainer>
    )
}

export default Main