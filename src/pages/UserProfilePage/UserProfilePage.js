import FooterUserTrails from "../../components/FooterUserTrails/FooterUserTrails";
import styled from "styled-components";
import UserPetSelect from "../../components/UserPetSelect/UserPetSelect";

const ProfileContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    margin: 0 auto;
    border-radius: 20px;
    background: var(--background-container-gradient);
    width: 80vw;
    padding: 5rem 5rem;
`

const ProfileContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    margin: 0 auto;
    border-radius: 20px;
    background: var(--background-container-gradient);
    width: 80vw;
    padding: 5rem 5rem;
`

const UserProfilePage = (props) => {
    return (
        <ProfileContainer>
            <UserPetSelect />
            <FooterUserTrails />
        </ProfileContainer>
    );
};

export default UserProfilePage;
