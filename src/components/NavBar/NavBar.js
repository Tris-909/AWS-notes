import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Grid from '@material-ui/core/Grid';
import Tab from '@material-ui/core/Tab';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme';
import CreateSharpIcon from '@material-ui/icons/CreateSharp';
import { Link } from 'react-router-dom';

const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}  

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    text: {
        textDecoration: 'none',
        color: '#fff'
    }
}));  

const NavBar = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handlerChange = (event, value) => {
        setValue(value);
    }
    
    return(
        <ThemeProvider theme={theme} className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handlerChange} >
                    <Grid 
                    container 
                    direction="row" 
                    justify="space-between"
                    alignItems="center">
                        <Link to="/">
                            <Tab 
                                label="Notes" 
                                icon={<CreateSharpIcon />}
                                {...a11yProps(0)} 
                                className={classes.text}
                            />
                        </Link>


                        <Grid>
                            <Link to="/signin">
                                <Tab 
                                    label="Sign In" 
                                    className={classes.text}
                                    {...a11yProps(1)} />
                            </Link>
                            <Link to="/signup">
                                <Tab 
                                    label="Sign Up" 
                                    className={classes.text}
                                    {...a11yProps(1)} />
                            </Link>
                        </Grid>
                    </Grid>
                </Tabs>
            </AppBar>
        </ThemeProvider>
    );
}

export default NavBar;