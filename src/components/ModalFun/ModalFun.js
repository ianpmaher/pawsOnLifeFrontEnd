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
    margin: 5vh auto;
    padding: 2rem;
    @media (max-width: 768px) {
        margin: 0 auto;
        width: 100%;
    }
`
const Card = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    background-color: var(--blue-sapphire-color);
    padding: 0.5rem;
    border-radius: 20px;
    min-height: fit-content;
    @media (max-width: 768px) {
        font-size: 0.8rem;
        height: min-content;
        width: 20rem;
        margin: 0 auto;
    }
`

const ModalFun = ({title, id, content}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return(
        <div>
            {/* TODO aria label */}
            <Button onClick={handleOpen} style={{fontSize: "1rem", textAlign: "center", minWidth: "fit-content"}}>{title}</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby={id}
                aria-describedby={id}
            >   
                <ModalContainer>
                    <Card id={id}>{content}</Card>
                </ModalContainer>

            </Modal>
        </div>
        
    )
}

export default ModalFun