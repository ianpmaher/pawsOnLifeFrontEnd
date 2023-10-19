import styled from "styled-components";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";

const HomePageContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    gap: 2rem;
    background: var(--background-container-gradient);
    border-radius: 20px;
    padding: 1rem 5rem 10rem 5rem;
    width: 80vw;
    @media (max-width: 768px) {
        padding: 1rem 2rem 5rem 2rem;
    }
`

const HomePage = (props) => {
    return (
        <HomePageContainer>
            <Hero />
            <Main />
            <Footer/>
        </HomePageContainer>
    )
}

export default HomePage