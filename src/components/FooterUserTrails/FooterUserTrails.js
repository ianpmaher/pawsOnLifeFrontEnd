import { useState } from "react";
/* mui */

import FavoriteIcon from "@mui/icons-material/Favorite";
import HistoryIcon from "@mui/icons-material/History";
import NearMeIcon from "@mui/icons-material/NearMe";
/* =============== */
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import PropTypes from "prop-types"
import Slide from "@mui/material/Slide";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
/* styled components */
import styled from "styled-components";

const FooterContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: fit-content;
    margin: 0 auto;
`;

// docs for "Tab Panel" : https://v4.mui.com/components/tabs/

const TabPanel = (props) => {
    const { children, value, index } = props;
    return (
        <div role="tabpanel" hidden={value !== index} id={`tabpanel ${index}`}>
            {value === index && <Box p={3}>{children}</Box>}
        </div>
    );
};

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

const FooterUserTrails = (props) => {
    // useState to define user's choice of which is clicked
    const [activeTab, setActiveTab] = useState(0);
    // useState to show component data
    const [ activeView, setActiveView ] = useState(0)

    const handleChange = (event, newValue) => {
        setActiveTab(newValue);
        setActiveView(newValue)
    };



    // update 10/19/23: mui Tab/Tabs instead of BottomNavigation
    return (
        <FooterContainer>
            <TabPanel value={activeTab} index={0}>
                {/* ideally customize to display users' data */}
            </TabPanel>
            <TabPanel value={activeTab} index={1}>
                {/* ideally customize to display users' data */}
            </TabPanel>
            <TabPanel value={activeTab} index={2}>
                {/* ideally customize to display users' data */}
            </TabPanel>
            <AppBar position="static" sx={{ flexFlow: "row wrap", justifyContent: "center", borderRadius: "20px" }}>
                <Tabs
                    value={activeTab}
                    onChange={handleChange}
                    aria-label="icon label tabs"
                    sx={{ backgroundColor: "rgba(0,0,0,0.6)", borderRadius: "20px" }}
                >
                    {/* added all the sx fontSize parameters to force icons to be responsive */}
                    <Tab
                        icon={<HistoryIcon sx={{ fontSize: { xs: 18, sm: 20, md: 20, lg: 20 } }} />}
                        label="History"
                        sx={{ fontSize: { xs: 10, sm: 11, md: 11, lg: 12 } }}
                    />
                    <Tab
                        icon={<FavoriteIcon sx={{ fontSize: { xs: 18, sm: 20, md: 20, lg: 20 } }} />}
                        label="Favorites"
                        sx={{ fontSize: { xs: 10, sm: 11, md: 11, lg: 12 } }}
                    />
                    <Tab
                        icon={<NearMeIcon sx={{ fontSize: { xs: 18, sm: 20, md: 20, lg: 20 } }} />}
                        label="Nearby"
                        sx={{ fontSize: { xs: 10, sm: 11, md: 11, lg: 12 } }}
                    />
                </Tabs>
            </AppBar>
        </FooterContainer>
    );
};

export default FooterUserTrails;
