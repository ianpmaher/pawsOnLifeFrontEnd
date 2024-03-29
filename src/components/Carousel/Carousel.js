import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import DogBone from '../DogBone/DogBone';
import Card from "@mui/material/Card"

const ImgCard = styled.img`
    width: 100%;
    height: auto;
    max-width: 20rem;
    max-height: 20rem;
    @media (max-width: 768px) {
        max-width: 15rem;
        max-height: 15rem;
    }
`
const DivCard = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    padding: 0.5rem auto;
    border-radius: 20px;
    margin: 0.5rem auto;
`

const UlTrail = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`

/* Props! */
const TrailCard = ({title, url, content, review}) => {
    return (
        <DivCard>
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
        </DivCard>
    )
}

const CarouselEl = (props) => {
    return (
        <div style={{maxWidth:"30vw", minWidth:"30vw", margin:"0 auto"}}>
            <Carousel showThumbs={false} showStatus={false}>
            {props.trails?.map((trail, index) => (
                <TrailCard key={index} title={trail?.title} url={trail?.url} content={trail?.content} review={trail?.review} />
            ))}
            
            </Carousel>
        </div>
        
    );
}

export default CarouselEl