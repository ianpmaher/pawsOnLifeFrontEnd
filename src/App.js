import React from 'react'
// import ROUTER
import { Route, Routes } from 'react-router-dom'
import "./App.css";
import "./variables.css"; /* Global CSS Variables */
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";
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

/* darkmode/lightmode switch */
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
const switchLabel = { inputProps: { 'aria-label': 'Switch light mode dark mode' } };

function App() {
    
    /* https://mui.com/material-ui/customization/dark-mode/ */
    /* mainly utilizing this functionality */
    
    // const prefersDarkModeFunc = useMediaQuery("(prefers-color-scheme: dark)");

    const ToggleColorMode = () => {
        const theme = useTheme();
        const colorMode = React.useContext(ColorModeContext);
        const isDark = theme.palette.mode === 'dark';
    
        return (
            <IconButton
                {...switchLabel}
                checked={isDark}
                onClick={colorMode.toggleColorMode}
                {...theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            />
        );
    };
    
    const [mode, setMode] = React.useState('dark');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
            },
        }),
        [],
    );


    // https://react.dev/reference/react/useMemo //
    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    /* asks client browser if set preference for dark mode! mui <3 */
                    mode,
                },
            }),
        [ mode ],
    )

    return (
        // using Route component to specify routes
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline enableColorScheme />
                <div className="App" theme={theme}>
                    <ToggleColorMode/>
                    <Header theme={theme} />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/trails" element={<MapsTrailsPage />} />
                        <Route path="/profile" element={<UserProfilePage/>} />
                        <Route path="/register" element={<RegistrationPage/>} />
                        <Route path="/water" element={<DogWaterRecPage/>} />
                        <Route path="/confirmRegister" element={<SuccessPage/>} />
                    </Routes>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
export default App;
