import React from 'react'
// import ROUTER
import { Route, Routes } from 'react-router-dom'
import "./App.css";
import "./variables.css"; /* Global CSS Variables */
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import HomePage from './pages/HomePage/HomePage';
import Header from "./components/Header/Header"
import LoginPage from "./pages/LoginPage/LoginPage"
import MapsTrailsPage from "./pages/MapsTrailsPage/MapsTrailsPage"
import UserProfilePage from './pages/UserProfilePage/UserProfilePage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import SuccessPage from './pages/SuccessPage/SuccessPage';
import DogWaterRecPage from './pages/DogWaterRecPage/DogWaterRecPage';
import LogoutPage from './pages/LogoutPage/LogoutPage';
import { isAuthorized } from './services/auth';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Card from "@mui/material/Card"

/* darkmode/lightmode switch */
const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

function App() {

    const [loggedIn, setLoggedIn] = React.useState(false);

    React.useEffect(() => {
        async function CheckLoggedIn() {
            const VerifyLogin = await isAuthorized();
            setLoggedIn(VerifyLogin);
            console.log("User is logged in?", VerifyLogin)
        }
        CheckLoggedIn();
    })
    /* https://mui.com/material-ui/customization/dark-mode/ */
    /* mainly utilizing this functionality */

    // const prefersDarkModeFunc = useMediaQuery("(prefers-color-scheme: dark)");

    const ToggleColorMode = () => {
        const theme = useTheme();
        const colorMode = React.useContext(ColorModeContext);
        const isDark = theme.palette.mode === 'dark';

        return (
            <Card sx={{borderRadius: 5}}>
                <IconButton
                    checked={isDark}
                    onClick={colorMode.toggleColorMode}
                >
                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </Card>
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
        [mode],
    )

    return (
        // using Route component to specify routes
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline enableColorScheme />
                <div className="App" theme={theme}>
                    <ToggleColorMode />
                    <Header theme={theme} loggedIn={loggedIn} />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage setLoggedIn={setLoggedIn} />} />
                        <Route path="/trails" element={<MapsTrailsPage />} />
                        <Route path="/profile" element={<UserProfilePage />} />
                        <Route path="/register" element={<RegistrationPage />} />
                        <Route path="/water" element={<DogWaterRecPage />} />
                        <Route path="/confirmRegister" element={<SuccessPage />} />
                        <Route path="/logout" element={<LogoutPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
                    </Routes>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
export default App;
