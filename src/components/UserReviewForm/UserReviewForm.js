import styled from "styled-components";
import { useState, useEffect } from "react";
import Button from "../Button/Button";
import { isAuthorized } from '../../services/auth';
import Rating from "../Rating/Rating";

const ReviewContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    margin: 1rem; auto;
    padding: 2rem;
    border-radius: 20px;
    max-width: 50;
    height: 100%;
    gap: 0.25rem;
    background: linear-gradient(20deg, var(--orange-alloy-color) 0%, var(--champagne-color) 100%);
    position: relative;
`;
const InputField = styled.input`
    height: 5vh;
    margin: 0.25rem auto;
    min-width: 20vw;
    border-radius: 5px;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.55);
    overflow: hidden;
    letter-spacing: 2px;
    padding: 0.25rem;
    transition: 0.9s all ease-in-out;

    &:focus {
        outline: none;
    }
`;
const Label = styled.label`
    height: 5vh;
    margin: 0.25rem auto;
    min-width: 20vw;
    border-radius: 5px;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.55);
    overflow: hidden;
    letter-spacing: 2px;
    padding: 0.25rem;
    transition: 0.9s all ease-in-out;

    &:focus {
        outline: none;
    }
`;

const FancyBorder = styled.span`
    border: 0;
    padding: 7px 0;
    border-bottom: 1px solid var(--blue-sapphire-color);
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    &:focus {
        width: 100%;
        background-color: #3399ff;
        transition: 0.4s;
    }
`;

const UserReviewForm = ({ }) => {
    const [validated, setValidated] = useState(false);
    useEffect(() => {
        async function checkValidation() {
            const valid = await isAuthorized();
            setValidated(valid);
        }
        checkValidation();
    })

    /*
    dogsAllowed: Boolean(req.body.dogsAllowed),
      hikedThisTrail: Boolean(req.body.hikedThisTrail),
      rating: Number(req.body.rating),
      difficulty: String(req.body.difficulty),
      length: Number(req.body.length),
      restroomsAvailable: Boolean(req.body.restroomsAvailable),
      waterFountain: Boolean(req.body.waterFountain),
      lastUpdated: new Date(req.body.lastUpdated),
      placesID: String(req.body.placesID),
    */
    return <ReviewContainer>
        <Label>Dog Friendly</Label><InputField name="dogsAllowed" type="checkbox" className="input-area" />
        <Label>Cat Friendly</Label><InputField name="catsAllowed" type="checkbox" className="input-area" />
        <FancyBorder />
        <Label>Accessibility: <Rating /></Label>
        <Label>Difficulty: <Rating /></Label>
        <Label>Restrooms: <Rating /></Label>
        <Label>Water Fountains: <Rating /></Label>
        <FancyBorder />

    </ReviewContainer>
    // return validated ?
    //     <ReviewContainer>
    //         <Label>Test<InputField name="dogsAllowed" type="checkbox" className="input-area" /></Label>
    //         <FancyBorder></FancyBorder>
    //     </ReviewContainer>
    //     : 
    //     <>You must be logged in to do this.
    //     </>
}

export default UserReviewForm;