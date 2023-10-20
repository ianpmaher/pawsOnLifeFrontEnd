import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


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

const CarouselEl = (props) => {
    return (
        <div style={{maxWidth:"49vw", minWidth:"30vw", margin:"0 auto"}}>
            <Carousel showThumbs={false}>
            {props.trails?.map((trail, index) => (
                <TrailCard key={index} title={trail?.title} url={trail?.url} content={trail?.content} />
            ))}
            
            </Carousel>
        </div>
        
    );
}

export default CarouselEl