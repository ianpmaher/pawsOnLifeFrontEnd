import FooterUserTrails from "../../components/FooterUserTrails/FooterUserTrails";
import UserBio from "../../components/UserBio/UserBio";
import styled from "styled-components";

const UserProfilePage = (props) => {
  return (
    <div>
      <UserBio />
      <FooterUserTrails />
    </div>
  )
}

export default UserProfilePage;