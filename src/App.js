import React from 'react'
// import ROUTER
import { Route, Routes } from 'react-router-dom'
import "./App.css";
import "./variables.css"; /* Global CSS Variables */
import { createTheme, ThemeProvider } from "@mui/material/styles";
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
import LogoutPage from './pages/LogoutPage/LogoutPage';
import { isAuthorized } from './services/auth';

function App() {
    
    const [loggedIn, setLoggedIn] = React.useState(false);

    React.useEffect( () => {
        async function CheckLoggedIn(){
            const VerifyLogin = await isAuthorized();
            setLoggedIn(VerifyLogin);
            console.log("User is logged in?", VerifyLogin)
        }
        CheckLoggedIn();
    })
    /* https://mui.com/material-ui/customization/dark-mode/ */
    /* mainly utilizing this functionality */
    const prefersDarkModeFunc = useMediaQuery("(prefers-color-scheme: dark)");
    // https://react.dev/reference/react/useMemo //
    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    /* asks client browser if set preference for dark mode! mui <3 */
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
            <div className="App" theme={theme}>
                <Header theme={theme} loggedIn={loggedIn} />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage setLoggedIn={setLoggedIn}/>} />
                    <Route path="/trails" element={<MapsTrailsPage />} />
                    <Route path="/profile" element={<UserProfilePage/>} />
                    <Route path="/register" element={<RegistrationPage/>} />
                    <Route path="/water" element={<DogWaterRecPage/>} />
                    <Route path="/confirmRegister" element={<SuccessPage/>} />
                    <Route path="/logout" element={<LogoutPage loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
                </Routes>
            </div>
        </ThemeProvider>
    );
}
export default App;
