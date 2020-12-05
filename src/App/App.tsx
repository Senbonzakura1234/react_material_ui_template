import { Box, Card, Container, ThemeProvider } from '@material-ui/core';
import { observer } from 'mobx-react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RootTheme from '../theme/RootTheme';
import './../service/Intercepter.service'
import Header from './Header/Header';
import AppStyles from './theme/AppStyles';

const App = observer(() => {
    const classes = AppStyles()
    return (
        <BrowserRouter>
            <ThemeProvider theme={RootTheme}>
                <Container maxWidth={false} disableGutters
                    className={classes.root}>
                    <Header/>
                    <Card className={classes.card}>
                        <Box className={classes.box}>

                        </Box>
                    </Card>
                </Container>
            </ThemeProvider>
        </BrowserRouter>
    );
});

export default App;