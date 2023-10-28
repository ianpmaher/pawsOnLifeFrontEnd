import React from 'react'
// import ROUTER
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react';
import "./App.css";
import "./variables.css"; /* Global CSS Variables */
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// import useMediaQuery from "@mui/material/useMediaQuery";
import HomePage from './pages/HomePage/HomePage';
import Header from "./components/Header/Header"
import LoginPage from "./pages/LoginPage/LoginPage"
import MapsTrailsPage from "./pages/MapsTrailsPage/MapsTrailsPage"
import UserProfilePage from './pages/UserProfilePage/UserProfilePage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import SuccessPage from './pages/SuccessPage/SuccessPage';
import DogWaterRecPage from './pages/DogWaterRecPage/DogWaterRecPage';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import styled from 'styled-components';

const ButtonContainer = styled.div`
    background-color: var(--green-light-blue-color);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    margin: 0 auto;
    border-radius: 20px;
`

/* darkmode/lightmode switch */
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const ModeButton = () => {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    return(
        <IconButton id='dark-mode' onClick={colorMode.toggleColorMode}> 
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
    )
}

function App() {
    
    /* https://mui.com/material-ui/customization/dark-mode/ */
    /* mainly utilizing this functionality */
    
    // const prefersDarkModeFunc = useMediaQuery("(prefers-color-scheme: dark)");
    const [mode, setMode] = useState("dark");

    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
            },
        }),
        [],
    );

    const theme = React.useMemo(
        () =>
        createTheme({ palette: {mode, 
        }, 
    }), 
    [mode]
    );



    // https://react.dev/reference/react/useMemo //
    // const theme = React.useMemo(
    //     () =>
    //         createTheme({
    //             palette: {
    //                 /* asks client browser if set preference for dark mode! mui <3 */
    //                 mode,
    //             },
    //         }),
    //     [ mode ],
    // )

    return (
        // using Route component to specify routes
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline enableColorScheme />
                <div className="App" theme={theme}>
                    <Header theme={theme} />
                    <ButtonContainer>
                        <ModeButton id='dark-mode' onClick={colorMode.toggleColorMode}
                        />
                    </ButtonContainer>
                    <Routes>
                        <Route path="/" element={<HomePage />} theme={theme} />
                        <Route path="/login" element={<LoginPage />} theme={theme} />
                        <Route path="/trails" element={<MapsTrailsPage />} theme={theme} />
                        <Route path="/profile" element={<UserProfilePage/>} theme={theme}/>
                        <Route path="/register" element={<RegistrationPage/>} theme={theme}/>
                        <Route path="/water" element={<DogWaterRecPage/>} theme={theme}/>
                        <Route path="/confirmRegister" element={<SuccessPage/>} theme={theme}/>
                    </Routes>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>

    );
}
export default App;
