import React from 'react';
import Container from '@material-ui/core/Container';

export default function HOC({children}) {
    return(
        <Container maxWidth="sm">
            {children}
        </Container>
    )
}