import { useState } from "react";
/* mui */
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HistoryIcon from "@mui/icons-material/History";
import NearMeIcon from '@mui/icons-material/NearMe';
/* styled components */
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`

const FooterUserTrails = (props) => {
  // useState to define user's choice of which is clicked
  const [value, setValue] = useState(0);

  return (
    <FooterContainer>
      <BottomNavigation
        showLabels
        // when user chooses new icon, value changes
        value={value}
        onChange={( event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="History" icon={<HistoryIcon />} />;
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />;
        <BottomNavigationAction label="Nearby" icon={<NearMeIcon />} />
      </BottomNavigation  >
    </FooterContainer>
  )
}

export default FooterUserTrails;