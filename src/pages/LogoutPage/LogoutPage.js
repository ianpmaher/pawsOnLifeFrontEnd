import styled from "styled-components";
import { isAuthorized, Logout } from "../../services/auth";
import { useEffect } from "react";

const LogoutPageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const LogoutPage = ({loggedIn, setLoggedIn}) => {

    useEffect( () => {
        async function LogMeOut(){
            await Logout();
            const success = await isAuthorized();
            setLoggedIn(success);
        }
        LogMeOut()
    }, [setLoggedIn])
    return (
        <LogoutPageContainer>
            {loggedIn ? "Logging you out..." : "You have been logged out"}
        </LogoutPageContainer>
    )
}

export default LogoutPage