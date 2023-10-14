import styled from 'styled-components';

const MainContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    background-color: var(--red-ruby-color);
    width: 80vw;
    height: 100%;
`

const Main = (props) => {
    return (
        <MainContainer>
            <h1>stuff</h1>
            <img src='https://img.freepik.com/premium-psd/dog-with-opened-mouth-isolated-transparent-background_927015-532.jpg' alt="dog" /> 
        </MainContainer>
    )
}

export default Main