import React from 'react'
// import ROUTER
import { Route, Routes } from 'react-router-dom'
import { useState } from "react";
import "./App.css";
import "./variables.css"; /* Global CSS Variables */
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Switch from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";
import Main from "./components/Main/Main"
import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer';
import MapsTrailsPage from "./pages/MapsTrailsPage/MapsTrailsPage"
import UserProfilePage from './pages/UserProfilePage/UserProfilePage';

function App() {
    
    /* https://mui.com/material-ui/customization/dark-mode/ */
    /* mainly utilizing this functionality */
    const prefersDarkModeFunc = useMediaQuery("(prefers-color-scheme: dark)");
    // https://react.dev/reference/react/useMemo //
    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkModeFunc ? 'dark' : 'light',
                    // primary: {
                        
                    // }
                },
            }),
        [ prefersDarkModeFunc ],
    )

    return (
        // using Route component to specify routes
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <div className="App">
                <Header theme={theme} />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/trails" element={<MapsTrailsPage />} />
                    <Route path="/profile" element={<UserProfilePage/>} />
                </Routes>
                <Footer/>
                
            </div>
        </ThemeProvider>
    );
}

export default App;