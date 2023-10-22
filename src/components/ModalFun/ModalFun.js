import { useState } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Button from "../Button/Button";
import Modal from "@mui/material/Modal";

const ModalContainer = styled.div`
    width: 30vw;
    background: var(--blue-sapphire-color);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 30vh auto;
    padding: 2rem;
`
const Card = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    background-color: var(--blue-sapphire-color);
    padding: 0.5rem;
    border-radius: 20px;
`

const ModalFun = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return(
        <div>
            {/* TODO aria label */}
            <Button onClick={handleOpen} style={{fontSize: "1rem", textAlign: "center", minWidth: "fit-content"}}>About Us</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="about-us"
                aria-describedby="about-us"
            >   
                <ModalContainer>
                    <Card id="about-us">
                        PawsOn.Life is built to assist people find pet-friendly hiking trails and nature walks.
                        PawsOn.Life is a collaborative effort to support healthy lifestyles, connecting our love of the great outdoors with our passion for web development. 
                        We hope to foster a community of like-minded pet lovers, providing them a platform to find and share pet-friendly hiking trails.
                    </Card>
                </ModalContainer>

            </Modal>
        </div>
        
    )
}

export default ModalFun