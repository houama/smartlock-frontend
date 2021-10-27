import * as React from 'react'
import { AppBar, Toolbar, Button } from '@mui/material'
import useStyles from './styles'

const Appbar = ({title}) => {

    const classes = useStyles();

    return(
        <AppBar position="static">
        <Toolbar>
            <div className={classes.appBarTitle}>
                E - LIBRARY
            </div>
            <div className={classes.appBarNav}>
                <Button variant="text" component="a">
                    <span className={classes.navText}>Home</span>
                </Button>
            </div>
                <Button color="inherit">Sign Up</Button>
        </Toolbar>
    </AppBar>
    )
}

export default Appbar
