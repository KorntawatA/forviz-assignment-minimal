import { Button, Checkbox, Divider, InputAdornment, TextField, ThemeProvider, Typography, createTheme, Link } from "@mui/material";
import "./Login.css";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function Login() {

    const customTheme = createTheme({
        palette: {
            sso: {
                main: "#424242",
            }
        },
        typography: {
            fontFamily: "Open Sans",
            h3: {
                fontSize: "2rem",
                fontWeight: "700"
            },
            h4: {
                fontSize: "1.5rem",
                fontWeight: "700"
            },
            subtitle2: {
                fontWeight: "600"
            },
            body1: {
                lineHeight: "1.57143",
                fontSize: "0.875rem",
                fontWeight: "400"
            }
        }
    })

    return (
        <ThemeProvider theme={customTheme}>
            <div id="login-page">
                <div id="welcome-container">
                    <div id="welcome-text">
                        <Typography variant="h3">Hi, Welcome Back</Typography>
                    </div>
                    <img src="src\assets\illustration_login.png" />
                </div>
                <div id="login-container">
                    <div id="sign-in-text">
                        <Typography variant="h4">Sign in to Minimal</Typography>
                    </div>
                    <div id="register-prompt">
                        <Typography variant="body1">Don’t have an account?
                            <span id="get-started-text">
                                <Link href="#" variant="subtitle2">Get started</Link>
                            </span>
                        </Typography>
                    </div>
                    <div id="sso-buttons">
                        <Button className="sso-button" color="sso" variant="outlined">Google</Button>
                        <Button className="sso-button" color="sso" variant="outlined">Facebook</Button>
                        <Button className="sso-button" color="sso" variant="outlined">Twitter</Button>
                    </div>
                    <div id="or-divider">
                        <Divider>
                            <Typography variant="body1">OR</Typography>
                        </Divider>
                    </div>
                    <div id="user-details">
                        <TextField label="Email address" variant="outlined"></TextField>
                        <TextField 
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Checkbox icon={<VisibilityIcon />} checkedIcon={<VisibilityOffIcon />}></Checkbox>
                                    </InputAdornment>
                                )
                            }} 
                            label="Password" 
                            variant="outlined"
                        >
                        </TextField>
                    </div>
                    <div id="extra-fields">
                        <Checkbox></Checkbox>
                        <Link href="#" variant="subtitle2">Forgot password?</Link>
                    </div>
                    <div id="login-button">
                        <Button variant="contained">Login</Button>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}