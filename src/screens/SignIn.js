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

const marginStyling = {
    margin: '1rem 0rem'
}

const SignIn = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstTimeSubmit, setFirstTimeSubmit] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { authenticated, setAuthenticated } = useAppContext();

    useEffect(() => {
        if (authenticated) {
            history.push('/');
        }
    }, []);

    const hasError = (inputVal) => {
        if (inputVal === 'email' && firstTimeSubmit) {
            if (email.length === 0) {
                return true;
            }
        } else if (inputVal === "password" && firstTimeSubmit) {
            if (password.length === 0) {
                return true;
            }
        }
        return false;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFirstTimeSubmit(true);
        setIsLoading(true);

        try {
            setIsLoading(true);
            await Auth.signIn(email, password);
            setAuthenticated(true);
            history.push('/');
        } catch (e) {
            setIsLoading(false);
            onError(e)
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
                }}
            >
                <Typography variant="h3" style={{textAlign: 'center'}}>
                    Sign In
                </Typography>
                <form
                    noValidate 
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center">

                        <TextField
                          error={hasError('email')}
                          id="user-email"
                          label="Email"
                          fullWidth
                          style={marginStyling}
                          defaultValue={email}
                          onChange={(e) => setEmail(e.target.value)}
                          variant="outlined"
                        />

                        <TextField
                          error={hasError('password')}
                          id="user-password"
                          label="Password"
                          fullWidth
                          type="password"
                          style={marginStyling}
                          defaultValue={password}
                          onChange={(e) => setPassword(e.target.value)}
                          variant="outlined"
                        />

                        <Grid direction="row" style={{alignSelf: 'flex-end'}}>
                            <Button 
                                type="submit"
                                variant="contained" 
                                color="secondary"
                                style={{marginRight: '1rem'}}>
                                {
                                    isLoading ?  <CircularProgress color="white" /> : "Sign In"
                                }
                            </Button>
                            <Button
                                type="submit"
                                variant="contained" 
                                color="secondary">
                                <Link to="/signup" style={{
                                    textDecoration: 'none',
                                    color: 'white'
                                }}>
                                    Make a new account
                                </Link>
                            </Button>
                        </Grid>                    
                    </Grid>
                </form>
            </Paper>
            </Grid>
        </ThemeProvider>   
    );
}

export default SignIn;