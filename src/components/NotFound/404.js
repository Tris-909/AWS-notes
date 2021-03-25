import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return(
      <Grid 
      container 
      direction="column"
      justify="center"
      alignItems="center"
      style={{
          width: '100%',
          height: '90vh'
      }}>
        <Typography variant="h2">
            Sorry, page not found !
        </Typography>
        <Typography variant="h4">
          Click
          <Link to="/" style={{margin: "0% 10px"}}>
              here 
          </Link> 
          to return to the main page.
        </Typography>
      </Grid>  
    );
}

export default NotFound;