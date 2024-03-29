import styled from "styled-components";
import { useState, useEffect } from "react";
import { isAuthorized } from "../../services/auth";
import Rating from "../Rating/Rating";
import DogBone from "../DogBone/DogBone";

const ReviewContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 0;
    border-radius: 20px;
    height: 100%;
    background: linear-gradient(20deg, var(--orange-alloy-color) 0%, var(--champagne-color) 100%);
    position: relative;
    @media (max-width: 768px) {
        flex-flow: row nowrap;
        max-width: 100%;
        padding: 0.25rem;
    }
`;
const InputField = styled.input`
    min-height: 2vh;
    margin: 0 auto;
    min-width: 20vw;
    border-radius: 5px;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.55);
    overflow: hidden;
    transition: 0.9s all ease-in-out;
    &:focus {
        outline: none;
    }
`;
const Label = styled.label`
    height: 6vh;
    margin: 0.1rem auto;
    min-width: 25vw;
    border-radius: 5px;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.55);
    overflow: hidden;
    letter-spacing: 1px;
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

const LabelStyle = {
    fontSize: "1rem",
    color: "white",
    margin: "0 auto",
    padding: "0 auto",
    height: "4vh",
    display: "inline",
};

const UserReviewForm = ({ isForm, review }) => {
    const [validated, setValidated] = useState(false);
    useEffect(() => {
        async function checkValidation() {
            const valid = await isAuthorized();
            setValidated(valid);
        }
        checkValidation();
    });

    return !isForm && review ? (
        <ReviewContainer>
            <div style={{ display: "flex", flexFlow: "row wrap", alignItems: "center" }}>
                <Label style={LabelStyle}>Dog Friendly</Label>
                <InputField
                    style={{
                        height: "2vh",
                        padding: "0",
                        background: "transparent",
                        border: "none",
                        boxShadow: "none",
                    }}
                    readOnly={true}
                    name="dogsAllowed"
                    type="checkbox"
                    className="input-area"
                    value={review.dogsAllowed ? true : false}
                />
            </div>
            <div style={{ display: "flex", flexFlow: "row wrap", alignItems: "center" }}>
                <Label style={LabelStyle}>Cat Friendly</Label>
                <InputField
                    style={{
                        height: "2vh",
                        padding: "0",
                        background: "transparent",
                        border: "none",
                        boxShadow: "none",
                    }}
                    readOnly={true}
                    name="catsAllowed"
                    type="checkbox"
                    className="input-area"
                    value={review.catsAllowed ? true : false}
                />
            </div>
            <FancyBorder />
            <Label>
                Accessibility: <Rating readOnly={true} initialValue={review.accessibility} />
            </Label>
            <Label>
                Difficulty: <Rating readOnly={true} ratings={review.ratings} initialValue={review.difficulty} />
            </Label>
            <Label>
                Restrooms: <Rating readOnly={true} ratings={review.ratings} initialValue={review.restrooms} />
            </Label>
            <Label>
                Water Fountains:{" "}
                <Rating readOnly={true} ratings={review.ratings} initialValue={review.waterFountains} />
            </Label>
            <FancyBorder />
        </ReviewContainer>
    ) : validated ? (
        <ReviewContainer>
            <Label style={LabelStyle}>Dog Friendly</Label>
            <InputField name="dogsAllowed" type="checkbox" className="input-area" />
            <Label>Cat Friendly</Label>
            <InputField name="catsAllowed" type="checkbox" className="input-area" />
            <FancyBorder />
            <Label>
                Accessibility: <Rating />
            </Label>
            <Label>
                Difficulty: <Rating />
            </Label>
            <Label>
                Restrooms: <Rating />
            </Label>
            <Label>
                Water Fountains: <Rating url={DogBone} />
            </Label>
            <FancyBorder />
        </ReviewContainer>
    ) : (
        <>You must be logged in to do this.</>
    );
};

export default UserReviewForm;
