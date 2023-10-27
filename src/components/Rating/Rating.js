import styled,  {css} from 'styled-components'
import { useState } from 'react';

const RatingContainer = styled.div`
display: flex;
flex-display: row;
`

const RateSpan = styled.span`
${(props) => {
    return css`
    width: 20px;
    height: 20px;
    background: ${props.$color};
    border-radius: 25%;
    `
}}   
`

const Value = styled.span`

`

const Rating = ({readOnly}) => {
    const [value, setValue] = useState(0);

    const rates = new Array(5).fill(null);

    const setRating = (v) => {
        setValue(v);
    }
    return (<RatingContainer>
        {rates.map((Rate, index) => {
            let color = `#cc0`;
            if(index>=value)  color = `#000`;
            if(Rate !== null) console.log("This should never happen.")
            return <RateSpan key={index} onClick={() => {setRating(index+1)}} $color={color} />
        })}
        <Value>{value}</Value>
        </RatingContainer>
    )
}

export default Rating;