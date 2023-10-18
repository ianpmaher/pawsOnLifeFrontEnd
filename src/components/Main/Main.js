import styled from 'styled-components';
import PetsIcon from '@mui/icons-material/Pets';

const MainContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    background-color: var(--red-ruby-color);
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
    
`

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
                <Card>
                    <p>Hiking</p>
                </Card>
            </Row>
            <Row >
                <Card>
                    <img src='https://img.freepik.com/premium-psd/dog-with-opened-mouth-isolated-transparent-background_927015-532.jpg' alt="dog" /> 
                </Card>
            </Row>
            
        </MainContainer>
    )
}

export default Main