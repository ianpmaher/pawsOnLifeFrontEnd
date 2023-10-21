import { useState } from "react";
import styled from "styled-components";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

const RegistrationPageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`


const RegistrationPage = (props) => {
    /* ========================== */ 
    /* useState function definitions */
    
    return(
        <RegistrationPageContainer>
            <RegistrationForm>

            </RegistrationForm>
        </RegistrationPageContainer>
    )
}

export default RegistrationPage;