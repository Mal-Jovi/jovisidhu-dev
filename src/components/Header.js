import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Button, Typography, Toolbar, Box } from '@material-ui/core';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Landing from '../pages/Landing';
import Work from '../pages/Work';
import About from '../pages/About';
import image from '../assets/artboard1.svg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(5),
        backgroundColor: "transparent",
        "&:hover": {
            backgroundColor: "transparent",
        },
        [headerTheme.breakpoints.down('xs')]: {
            marginRight: theme.spacing(1),
          },
    },
    menuIcon: {
        [headerTheme.breakpoints.down('xs')]: {
            height: 60,
            widht: 60,
          },
        "&:hover": {
        backgroundColor: "transparent",
        },
    },
    title: {
        flexGrow: 1,
        textAlign: 'center',
        fontSize: 22,
        [headerTheme.breakpoints.down('xs')]: {
            fontSize: 15,
            marginRight: 30,
          },
    },
    navigationBar: {
        marginTop: 30,
    },
}));

let headerTheme = createMuiTheme({
    shadows: ["none"],
    typography: {
        fontFamily: '"proxima-nova", sans-serif',
        h3: {
            fontFamily: 'proxima-nova',
            fontSize: 22,
            fontWeight: "fontWeightBold",
        },
    },
})

function Header() {
    const classes = useStyles();

    return (
        <div>
            <link rel="stylesheet" href="https://use.typekit.net/dau4ouf.css"/>
            <BrowserRouter>
                <div className="navigation">
                    <div className="navigation-sub">
                        <ThemeProvider theme={headerTheme}>
                            <Toolbar className={classes.navigationBar}>
                                <Link to="/" className="item">
                                    <img className={classes.menuIcon} src={image} alt="jovi_logo" height={100} width={100} />
                                </Link>
                                <Box style={{flex: 1, maxWidth: "32vw", minWidth: 10}}></Box>
                                <Link to="/work" className="item" style={{ textDecoration: 'none', color: 'black'}}>
                                    <Button className={classes.menuButton}>
                                        <Typography variant="h3" className={classes.title} >
                                            work
                                        </Typography>
                                    </Button>
                                </Link>
                                <Button className={classes.menuButton} onClick={() => window.open("https://drive.google.com/file/d/123z1s10DwCAub4HkQ8iZqYYouYQcl1t-/view?usp=sharing", " _blank")}>
                                    <Typography variant="h3" className={classes.title}>
                                        resume
                                    </Typography>
                                </Button>
                                <Link to="/about" className="item" style={{ textDecoration: 'none', color: 'black'}}>
                                    <Button className={classes.menuButton}>
                                        <Typography variant="h3" className={classes.title}>
                                            about
                                        </Typography>
                                    </Button>
                                </Link>
                                <Box style={{flex: 1}}></Box>
                            </Toolbar>
                        </ThemeProvider>
                    </div>
                    <div className="page-body">
                        <Route exact path="/" component={Landing} />
                        <Route path="/work" component={Work} />
                        <Route path="/about" component={About} />
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default Header;