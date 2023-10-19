import styled from 'styled-components';
import PetsIcon from '@mui/icons-material/Pets';
import Hero from '../Hero/Hero';

const MainContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    background: var(--background-gradient);
    width: 80vw;
    height: 100%;
    border-radius: 20px;
`

const Row = styled.div`
    display: flex;
    flex-flow: column-wrap;
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
`

const Main = (props) => {
    /* I have these placeholders for now, just looking at margins and stuff */
    /*  */
    return (
        <MainContainer>
            <Hero />
            <Row>
                <Card>
                    <PetsIcon />
                </Card>
                <Card>
                    <PetsIcon />
                </Card>
                <Card>
                    <p>Hiking</p>
                </Card>
            </Row>
            <Row >
                <Card>
                    <ImgCard src='https://img.freepik.com/premium-psd/dog-with-opened-mouth-isolated-transparent-background_927015-532.jpg' alt="dog" /> 
                </Card>
            </Row>
            
        </MainContainer>
    )
}

export default Main