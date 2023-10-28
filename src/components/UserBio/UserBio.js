import styled from "styled-components";
import { useState, useEffect } from "react";
import Button from "../Button/Button";
import { isAuthorized } from '../../services/auth';
import UserPetSelect from "../UserPetSelect/UserPetSelect";

const BioContainer = styled.div`
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
    height: 6vh;
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

const UserBio = () => {
    const [validated, setValidated] = useState(false);
    const [userPet, setUserPet] = useState(null);
    const [ddlPet, setDdlPet] = useState(null);
    useEffect(() => {
        async function checkValidation() {
            const valid = await isAuthorized();
            setValidated(valid);
        }
        checkValidation();
    })

    useEffect(() => {
        async function loadUserData() {
            const result = await fetch('https://dev.pawson.life/pet', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": localStorage.getItem("token")
                }
            });
            console.log(result.status);
            if (result.status === 200) {
                const loadPet = await result.json();
                console.log(loadPet[0].name);
                setUserPet(loadPet[0]);
                setDdlPet(loadPet[0].type);
            }
        }
        loadUserData();
    }, [setUserPet])

    const handlePetChange = (event) => {
        setDdlPet(event.target.value);
    }

    const handleSubmit = async (event) => {
        const body = {
            name: event.target.parentNode.children[2].value,
            type: ddlPet,
            breed: event.target.parentNode.children[4].children[0].value,
            age: parseInt(event.target.parentNode.children[5].children[0].value),
            weight: parseFloat(event.target.parentNode.children[6].children[0].value),
        }
        console.log(event.target.parentNode, body)
        const result = await fetch('https://dev.pawson.life/pet', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "x-access-token": localStorage.getItem("token")
            },
            body: JSON.stringify(body)
        });
        console.log(result.status);
        if (result.status === 200) {
            const loadPet = await result.json();
            console.log(loadPet[0].name);
            setUserPet(loadPet[0]);
        }
    }
    /*
type: type,
                breed: breed,
                age: parseInt(age),
                weight: parseFloat(weight),
    */

    return validated ? <BioContainer>
        <UserPetSelect setPet={handlePetChange} defPet={ddlPet}/>
        <Label>Pet Name</Label><InputField name="name" className="input-area" placeholder="Pet Name" defaultValue={userPet?.name} />
        <FancyBorder />
        <Label>Breed: <InputField name="type" className="input-area" defaultValue={userPet?.breed} /></Label>
        <Label>Age: <InputField name="age" className="input-area" defaultValue={userPet?.age} type="Number" /></Label>
        <Label>Weight: <InputField name="weight" className="input-area" defaultValue={userPet?.weight} type="Number" /></Label>
        <FancyBorder />
        <Button onClick={handleSubmit}>Save/Update</Button>
    </BioContainer>
    :
    <>You must be logged in to do this.
    </>
}

export default UserBio;