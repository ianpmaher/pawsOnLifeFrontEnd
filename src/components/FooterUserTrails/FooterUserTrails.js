import { useState } from "react";
/* mui */

import FavoriteIcon from "@mui/icons-material/Favorite";
import HistoryIcon from "@mui/icons-material/History";
import NearMeIcon from '@mui/icons-material/NearMe';
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
/* styled components */
import styled from "styled-components";
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: fit-content;
  margin: 0 auto;
`

// docs for "Tab Panel" : https://v4.mui.com/components/tabs/

const TabPanel = (props) => {
    const { children, value, index } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel ${index}`}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    )
}

const FooterUserTrails = (props) => {
  // useState to define user's choice of which is clicked
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  // update 10/19/23: mui Tab/Tabs instead of BottomNavigation
  return (
    <FooterContainer>
        <TabPanel value={value} index={0}>
            {/* ideally customize to display users' data */}
        </TabPanel>
        <TabPanel value={value} index={1}>
            {/* ideally customize to display users' data */}
        </TabPanel>
        <TabPanel value={value} index={2}>
            {/* ideally customize to display users' data */}
        </TabPanel>
        <AppBar position="static" sx={{flexFlow:"row wrap", justifyContent:"center", borderRadius:"20px"}}>
            <Tabs value={value} onChange={handleChange} aria-label="icon label tabs" sx={{backgroundColor: "rgba(0,0,0,0.6)", borderRadius: "20px"}}>
                {/* added all the sx fontSize parameters to force icons to be responsive */}
                <Tab icon={<HistoryIcon sx={{fontSize: { xs: 20, sm: 25, md: 20, lg: 25 }}} />} label="History" sx={{fontSize: { xs: 12, sm: 14, md: 14, lg: 14 }}} />
                <Tab icon={<FavoriteIcon sx={{fontSize: { xs: 20, sm: 25, md: 20, lg: 25 }}} />} label="Favorites" sx={{fontSize: { xs: 12, sm: 14, md: 16, lg: 14 }}} />
                <Tab icon={<NearMeIcon sx={{fontSize: { xs: 20, sm: 25, md: 20, lg: 25 }}} />} label="Nearby" sx={{fontSize: { xs: 12, sm: 14, md: 16, lg: 14 }}} />
            </Tabs>
        </AppBar>
    </FooterContainer>
  )
}

export default FooterUserTrails;