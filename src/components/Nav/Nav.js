// ALL DA ROUTES
import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
// https://mui.com/material-ui/api/link/
import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Theme from "@mui/material/styles";
import ThemeProvider from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";


// ================ //
// ARRAYS OF WHICH PAGES WE WANT TO USE
// ================ //
const pages = ["Home", "Trails & Maps"];
const settings = ["My Profile", "Account", "Logout"];

const appBarLabel = (label) => {
    return (
        <Toolbar>
            <IconButton aria-label="menu" color="inherit" edge="start">
                <MenuItem />
            </IconButton>
            <Typography variant="h5" noWrap component="div" sx={{ flexGrow: 1 }}>
                {label}
            </Typography>
        </Toolbar>
    );
};

// https://mui.com/material-ui/react-app-bar/#app-bar-with-responsive-menu
// passing down ColorTheme (Dark Mode) as a prop
const Nav = (props) => {
    /* declare state for open/close Nav menu */
    const [anchorElemNav, setAnchorElemNav] = React.useState(null);

    /* functions to handle state for open/close the two menus*/
    const handleOpenMenuNav = (event) => {
        setAnchorElemNav(event.currentTarget);
    };
    const handleCloseMenuNav = () => {
        setAnchorElemNav(null);
    };

    return (
        <AppBar position="static" {...props}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h5"
                        noWrap
                        component="ReactRouterLink"
                        to="/"
                        sx={{
                            display: { xs: "none", md: "flex" },
                            fontWeight: 700,
                            textDecoration: "none",
                        }}
                    ></Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="account of user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenMenuNav}
                        >
                            {pages[0]}
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
                            open={Boolean(setAnchorElemNav)}
                            onClose={handleCloseMenuNav}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseMenuNav}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="ReactRouterLink"
                        to="/"
                        href="/"
                        sx={{
                            display: { md: "flex" },
                            fontWeight: 700,
                            textDecoration: "none",
                        }}
                    >
                        MENU
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseMenuNav}
                                sx={{ my: 2, color: "white", display: "block" }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
            <Link to="/">HOME</Link>
            <Link to="/trails">TRAILS & MAPS</Link>
            <Link to="/login">LOGIN / CREATE ACCOUNT</Link>
        </AppBar>
    );
};

export default Nav;
