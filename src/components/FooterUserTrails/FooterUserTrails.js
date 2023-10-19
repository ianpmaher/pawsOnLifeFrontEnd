import { useState } from "react";
/* mui */

import FavoriteIcon from "@mui/icons-material/Favorite";
import HistoryIcon from "@mui/icons-material/History";
import NearMeIcon from '@mui/icons-material/NearMe';
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
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

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  // update 10/19/23: mui Tab/Tabs instead of BottomNavigation
  return (
    <FooterContainer>
      <Tabs value={value} onChange={handleChange} aria-label="icon label tabs" sx={{backgroundColor: "rgba(0,0,0,0.6)", borderRadius: "20px"}}>
        <Tab icon={<HistoryIcon />} label="History" />
        <Tab icon={<FavoriteIcon />} label="Favorites" />
        <Tab icon={<NearMeIcon />} label="Nearby" />
      </Tabs>
    </FooterContainer>
  )
}

export default FooterUserTrails;