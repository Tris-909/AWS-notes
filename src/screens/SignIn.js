import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const marginStyling = {
    margin: '1rem 0rem'
}

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstTimeSubmit, setFirstTimeSubmit] = useState(false);

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

    const handleSubmit = (e) => {
        e.preventDefault();
        setFirstTimeSubmit(true);

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
                                Sign In
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