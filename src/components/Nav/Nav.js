// ALL DA ROUTES
import * as React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu"
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
// https://mui.com/material-ui/api/link/
import Typography from "@mui/material/Typography";

// ================ //
// ARRAYS OF PAGES WE WANT TO USE
// ================ //
const pages = [
    {
        title: "Home",
        destination: "/",
    },
    {
        title: "Maps & Trails",
        destination: "/trails",
    }
];
if(localStorage.getItem("token") !== null){
        pages.push(
            {
                title: "Account",
                destination: "/profile",
            },
        {
            title: "Log Out",
            destination: "/logout",
        })
    }else{
        pages.push({
            title: "Log In",
            destination: "/login",
        },
        {
            title: "Registration",
            destination: "/register",
        })
    }

    // TODO: Move login/out/register/account to context

const FlexContainer = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 0 1rem;
`

// https://mui.com/material-ui/react-app-bar/#app-bar-with-responsive-menu
// passing down ColorTheme (Dark Mode) as a prop
const Nav = (props) => {
    /* declare state for open/close Nav menu */
    const [anchorElemNav, setAnchorElemNav] = useState(null);

    /* functions to handle state for open/close the two menus*/
    const handleOpenMenuNav = (event) => {
        setAnchorElemNav(event.currentTarget);
    };
    const handleCloseMenuNav = () => {
        setAnchorElemNav(null);
    };
    

    return (
       
        <AppBar position="static" {...props} sx={{ borderRadius: 5 }}>
            <FlexContainer>
                <Toolbar disableGutters >
                    {/* in MUI, sx props are inline styles. "m" is margin */}
                    {/* https://mui.com/system/getting-started/the-sx-prop/ */}
                    {/* everything in Box container will display unless mobile, then hamburger menu */}
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            edge="start"
                            aria-label="site navigation"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenMenuNav}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElemNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElemNav)}
                            onClose={handleCloseMenuNav}
                            sx={{
                                display: { xs: "block", md: "none"},
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.title} onClick={handleCloseMenuNav}>
                                    <Link variant="h5" noWrap component="a" to={page.destination} href={page.destination}>
                                        <Typography textAlign="center">{page.title}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    {/* <Link
                        variant="h5"
                        noWrap
                        component="a"
                        to="/"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: "flex" },
                            fontWeight: 700,
                            textDecoration: "none",
                        }}
                    >
                        PAWS ON LIFE
                    </Link> */}
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}>
                        {pages.map((page) => (
                            <Link noWrap component="a" to={page.destination} href={page.destination}
                                key={page.title}
                                onClick={handleCloseMenuNav}
                                underline="hover"
                                sx={{ my: 2, color: "white", padding: 1 }}
                            >
                                {page.title}
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </FlexContainer>
        </AppBar>
    );
};

export default Nav;