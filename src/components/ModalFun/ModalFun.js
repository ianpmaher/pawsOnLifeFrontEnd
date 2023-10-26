import { useState } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Button from "../Button/Button";
import Modal from "@mui/material/Modal";

const ModalContainer = styled.div`
    background: var(--blue-sapphire-color);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    @media (max-width: 768px) {
        margin: 0 auto;
        width: 100%;
    }
`
const Card = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    background-color: var(--blue-sapphire-color);
    padding: 1rem;
    border-radius: 20px;
    @media (max-width: 768px) {
        font-size: 0.8rem;
        height: min-content;
        width: 20rem;
        margin: 0 auto;
    }
`

const ModalFun = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return(
        <div>
            {/* TODO aria label */}
            <Button onClick={handleOpen} style={{textAlign: "center", minWidth: "fit-content"}}>About Us</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="about-us"
                aria-describedby="about-us"
            >   
                <ModalContainer>
                    <Card id="about-us">
                        PawsOn.Life is a collaborative effort to support healthy lifestyles, connecting our love of the great outdoors with our passion for web development. 
                        We hope to foster a community of like-minded pet lovers. Register your account now to find, rate, and share your favorite pet-friendly hiking trails.
                    </Card>
                </ModalContainer>

            </Modal>
        </div>
        
    )
}

export default ModalFun