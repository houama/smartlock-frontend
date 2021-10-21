import React, { useEffect, useState } from 'react';
import Input from './Input';
import { Container, Paper, Grid, Button, Typography, Grow, AppBar, Toolbar, IconButton, ThemeProvider, Link } from '@mui/material';
import useStyles from './styles';
import { theme } from './styles';

const Login = () => {

    const classes = useStyles()

    const [showPassword, setShowPassword] = useState(false)
    const [isSignUp, setIsSignUp] = useState(false)
    const [isError, setIsError] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')

    const handleShowPassword = () => setShowPassword((prev) => !prev)

    const handleSubmit = (e) => {
        e.preventDefault()

        // if(isSignUp) {
        //     dispatch(signUp(authData, history))
        // } else {
        //     dispatch(signIn(authData, history))
        // }  
    }

    const handleChange = (e) => {
        // setAuthData({...authData, [e.target.name]: e.target.value})
        // setIsError(false)
    }

    const switchMode = () => {
        setIsSignUp((prev) => !prev)
        setShowPassword(false)
    }

    useEffect(() =>{
        document.body.classList.add(classes.body)
    },[])

    return(
        <div>
            <ThemeProvider theme={theme}>
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
                <Grow in={true} timeout={1000}>
                    <Container component='main' maxWidth='xs'>
                        <Paper className={classes.paper} elevation={3}>
                            
                            <Typography className={classes.title} variant="h4">{isSignUp ? 'sign up' : 'sign in'}</Typography>
                            <form autoComplete="off" className={classes.form} onSubmit={handleSubmit}>
                                <Grid container spacing={2} marginTop={4}>
                                    {isSignUp && <Input name="nim" label="NIM" handleChange={handleChange}/>}

                                    <Input name="username" label="Email Address" handleChange={handleChange} autoFocus error={isError}/>
                                    
                                    <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} error={isError}/>
                                </Grid>

                                {isError && <Typography className={classes.error} align='center' color='error'>{errorMsg}</Typography> }
                                
                                <Grid container marginTop={2}>
                                    {!isSignUp ?
                                        <Grid item flexGrow={1}>
                                            <Link className={classes.linkText}>
                                                Forgot password?
                                            </Link>    
                                        </Grid>
                                    : null}

                                    <Grid item>
                                        <Link onClick={switchMode} className={classes.linkText}>
                                            {isSignUp ? 'Have an account? Sign In' : 'Don\'t have an account? Sign Up'}
                                        </Link>
                                    </Grid>
                                </Grid>

                                <Grid container marginTop={20}>
                                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                                        {isSignUp ? 'Sign Up' : 'Sign In'}
                                    </Button>
                                </Grid>
                                
                            </form>
                        </Paper>
                    </Container>
                </Grow>
            </ThemeProvider>
        </div>
    )
}

export default Login;