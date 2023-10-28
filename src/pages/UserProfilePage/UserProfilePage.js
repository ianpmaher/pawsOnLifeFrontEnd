import FooterUserTrails from "../../components/FooterUserTrails/FooterUserTrails";
import UserBio from "../../components/UserBio/UserBio";
import styled from "styled-components";

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
        <UserBio />
        <FooterUserTrails />
      </ProfileContainer>
  )
}

export default UserProfilePage;