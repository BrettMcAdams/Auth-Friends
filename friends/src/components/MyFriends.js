import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'



const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://images.unsplash.com/photo-1444210971048-6130cf0c46cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(5, 10),
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        fontSize: 30,
        // backgroundColor: theme.palette.secondary.main,
    },
    cardRoot: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    buttons: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    welcome: {
        paddingBottom: '30px',
        paddingTop: '30px',
    },
    submit: {
        flex: 1 ,
        padding: '20px 50px',
    }
}));

function MyFriends() {

    let history = useHistory();

    const classes = useStyles();
    // const preventDefault = (event) => event.preventDefault();


    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid container justify='center' alignItems='center' xs={true} sm={100} md={100} className={classes.image} >
                <Grid item xs={3} sm={3} md={3} component={Paper} elevation={10} square>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <AccountCircleIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5" className={classes.welcome} >Welcome to MyFriends</Typography>
                        <div className={classes.buttons} >
                                <Button
                                    type="submit"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={() => history.push('/login')}
                                >
                                    Login
                                </Button>
                            <div>
                                <Button
                                    type="submit"
                                    color="secondary"
                                    className={classes.submit}
                                >
                                    Register
                                </Button>
                            </div>
                        </div>
                        <Grid container>
                            <Grid item xs className={classes.welcome}>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default MyFriends
