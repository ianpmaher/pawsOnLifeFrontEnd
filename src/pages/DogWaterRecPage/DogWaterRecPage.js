import { useState } from "react"
import styled from "styled-components"
import WaterRec from "../../components/WaterRec/WaterRec"

const DogWaterRecPageContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    gap: 2rem;
    background: linear-gradient(20deg, var(--orange-alloy-color) 0%, var(--champagne-color) 100%);
    border-radius: 20px;
    padding: 1rem 5rem 10rem 5rem;
    max-width: 70vw;
    margin: 0 auto;
    @media (max-width: 768px) {
        padding: 1rem 2rem 5rem 2rem;
    }
`

const DogWaterRecPage = (props) => {
    const [ trails, setTrails ] = useState([
        { title: "Bridges & Rusty Car Loop", url: "https://www.hepburnadvocate.com.au/images/transform/v1/crop/frm/storypad-GMYchV3QgFfB8wrDyRmucJ/9ee96814-7109-46fc-93d1-c9036b16e06f.jpg/r0_0_1200_675_w1200_h675_fmax.jpg", content: "2.4 mi", length: 2.4, review: 5},
        { title: "Pine Needle Trail", url: "https://miro.medium.com/v2/resize:fit:1280/format:webp/1*lMXRMqkC9Yn4JDKmyjFmBQ.jpeg", content: "3.0 mi", length: 3, review: 4},
        { title: "Mt Washington via Ammonoosuc Ravine Trail", url: "https://myhikes.org/images_uploads/Ammonoosuc%20Ravine%20Jewell%20Trail%20Loop%20Mt%20Washington%20Mt%20Monroe%20June%204%202022%2FIMG_8427_20220605224241UTC_small.JPG", content: "DEATH 9.2mi", length: 9.2, review: 1},
    ])

    const [ userDog, setuserDog ] = useState({
        breed: "German Shepherd Dog", weight: 60
    })

    return(
        <DogWaterRecPageContainer>
            <h1>dog water</h1>
            <WaterRec trails={trails} userDog={userDog} />
            
        </DogWaterRecPageContainer>
    )
}

export default DogWaterRecPage