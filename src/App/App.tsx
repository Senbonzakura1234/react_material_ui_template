import { Grid, Container, ThemeProvider } from '@material-ui/core';
import { observer } from 'mobx-react';
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RootTheme from '../theme/RootTheme';
import './../service/Intercepter.service'
import CardItem from './CardItem/CardItem';
import Header from './Header/Header';
import AppStyles from './theme/AppStyles';

const App = observer(() => {
    const classes = AppStyles()
    return (
        <BrowserRouter>
            <ThemeProvider theme={RootTheme}>
                <Container disableGutters maxWidth={false} className={classes.root}>
                    <Header/>
                    <Container maxWidth={false} className={classes.boxContainer} >
                        <Grid container justify="center" spacing={4}>
                            {
                                new Array(8).fill(0).map((item, index) => (
                                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                        <CardItem/>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Container>
                </Container>
            </ThemeProvider>
        </BrowserRouter>
    );
});

export default App;