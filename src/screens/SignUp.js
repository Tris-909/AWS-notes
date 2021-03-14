import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { Auth } from "aws-amplify";
import { useAppContext } from "../libs/contextLib";
import { useHistory } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';
import { onError } from "../libs/errorLib";
import VpnKeyIcon from '@material-ui/icons/VpnKey';

const marginStyling = {
    margin: '1rem 0rem'
}

const SignUp = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmationCode, setConfirmationCode] = useState("");
    const [firstTimeSubmit, setFirstTimeSubmit] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [newUser, setNewUser] = useState(null);
    const {authenticated, setAuthenticated} = useAppContext();

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmationError, setConfirmationError] = useState(false);

    useEffect(() => {
        if (authenticated) {
            history.push('/');
        }
    }, []);

    useEffect(() => {
        if (!firstTimeSubmit) {
            if (email.length === 0) {
                setEmailError(true);
            }
        }  
        if (!firstTimeSubmit) {
            if ((password.length === 0 || confirmPassword.length === 0 || (password !== confirmPassword))) {
                setPasswordError(true);
            }
        }
    }, [email, password, confirmPassword, firstTimeSubmit]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFirstTimeSubmit(false);
        setIsLoading(true);

        try {
            const newUser = await Auth.signUp({
                username: email,
                password: password
            });
            setIsLoading(false);
            setNewUser(newUser);
        } catch(error) {
            onError(error);
            setIsLoading(false);
        }
    }

    const confirmationCodeSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await Auth.confirmSignUp(email, confirmationCode);
            await Auth.signIn(email, password);
            setAuthenticated(true);
            history.push('/');
        } catch(error) {
            onError(error);
            setIsLoading(false);
        }
    }

    return(
        <ThemeProvider theme={theme}>
            <Grid container   
                justify="center"
                alignItems="center"
                style={{height: '90vh'}}> 
            <Paper
                style={{
                    padding: '2rem',
                    width: '50%'
                }}>
                {
                    newUser === null ? (
                    <>
                    <Typography variant="h3" style={{textAlign: 'center'}}>
                        Sign Up
                    </Typography>
                    <form
                        noValidate 
                        autoComplete="off"
                        onSubmit={handleSubmit}>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center">
    
                            <TextField
                              error={emailError}
                              id="user-email"
                              label="Email"
                              fullWidth
                              style={marginStyling}
                              defaultValue={email}
                              onChange={(e) => setEmail(e.target.value)}
                              variant="outlined"
                              helperText={emailError ? "Email field is empty" : ""}
                            />
    
                            <TextField
                              error={passwordError}
                              id="user-password"
                              label="Password"
                              fullWidth
                              type="password"
                              style={marginStyling}
                              defaultValue={password}
                              onChange={(e) => setPassword(e.target.value)}
                              variant="outlined"                 
                            />
    
                            <TextField
                              error={passwordError}
                              id="user-Confirmpassword"
                              label="Re-typed Password"
                              fullWidth
                              type="password"
                              style={marginStyling}
                              defaultValue={confirmPassword}
                              onChange={(e) => setConfirmPassword(e.target.value)}
                              variant="outlined"
                              helperText={passwordError ? "Password and ConfirmPassword does not match" : ""}
                            />
    
                            <Grid direction="row" style={{alignSelf: 'flex-end'}}>
                                <Button 
                                    type="submit"
                                    variant="contained" 
                                    color="secondary"
                                    style={{marginRight: '1rem'}}>
                                    {
                                        isLoading ?  <CircularProgress color="white" /> : "Submit"
                                    }
                                </Button>
                                <Button
                                    type="submit"
                                    variant="contained" 
                                    color="secondary">
                                    <Link to="/signin" style={{
                                        textDecoration: 'none',
                                        color: 'white'
                                    }}>
                                        Already Has An Account ?
                                    </Link>
                                </Button>
                            </Grid>                    
                        </Grid>
                    </form>
                    </>
                    ) : (
                    <>
                        <Typography variant="h4" style={{textAlign: 'center'}}>
                            Confirmation Code
                        </Typography>
                        <form
                            noValidate 
                            autoComplete="off"
                            onSubmit={confirmationCodeSubmit}>
                            <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center">
                                <TextField
                                  error={passwordError}
                                  id="confirmation-code"
                                  label="Confirmation Code"
                                  fullWidth
                                  style={marginStyling}
                                  defaultValue={confirmationCode}
                                  onChange={(e) => setConfirmationCode(e.target.value)}
                                  variant="outlined"
                                  helperText={"Please check your email for the code"}
                                />
                                <Button 
                                    type="submit"
                                    variant="contained" 
                                    color="secondary"
                                    style={{marginRight: '1rem'}}>
                                    {
                                        isLoading ?  <CircularProgress color="white" /> : (
                                        <span style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                                            <VpnKeyIcon /> 
                                            <div style={{marginLeft: '0.5rem'}}>Verify</div>
                                        </span>
                                        )
                                    }
                                </Button>
                            </Grid>
                        </form>
                    </>
                    )}
            </Paper>
            </Grid>
        </ThemeProvider>   
    );
}

export default SignUp;