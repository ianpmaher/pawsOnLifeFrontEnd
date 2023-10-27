import styled, { css } from 'styled-components'
import { useState } from 'react';
import DogBone from "../DogBone/DogBone";

const RatingContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: start;
    justify-content: space-around;
    height: fit-content;
    margin-bottom: 1rem;
    @media (max-width: 768px) {
        gap: 0.5rem;
    }
`

const RateSpan = styled.span`
${(props) => {
        return css`
    width: 20px;
    height: 20px;
    background-color: ${props.$color};
    border-radius: 25%;
    `
    }}   
`

const Value = styled.span`
    background-color: var(--blue-sapphire-color);
`

const Rating = ({ readOnly, initialValue, ratings }) => {
    const [value, setValue] = useState(initialValue || 0);

    const rates = new Array(5).fill(null);

    const setRating = (v) => {
        setValue(v);
    }
    return (readOnly ? <RatingContainer>
        {rates.map((Rate, index) => {
            let color = `#cc0`;
            if (index >= value) color = `#000`;
            if (Rate !== null) console.log("This should never happen.")
            return <RateSpan key={index} $color={color} />
        })}
        <Value>{value}</Value>
        {ratings && <Value>Based on {ratings} user ratings</Value>}
    </RatingContainer> : <RatingContainer>
        {rates.map((Rate, index) => {
            let color = `#cc0`;
            if (index >= value) color = `#000`;
            if (Rate !== null) console.log("This should never happen.")
            return <RateSpan key={index} onClick={() => { setRating(index + 1) }} $color={color} />
        })}
        <Value>{value}</Value>
    </RatingContainer>
    )
}

export default Rating;