import React from 'react';
import { Button, AppBar, Toolbar, SvgIcon, Avatar } from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

const useStyles = makeStyles({
    appBar:{
        boxShadow: 'none',
    },
    img:{
        maxHeight: 55,
    },
    grow:{
        flexGrow: 1,
    },
    userSection:{
        display: 'flex',
        alignItems: 'center',
    },
    button:{
        marginRight: 10,
    },
    bell:{
        marginRight: 10,
    }
})

function Header() {
    const classes = useStyles();

    return (
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
            <Toolbar>
                <img src="/images/logo.png" alt="logo" className={classes.img} />
                <div className={classes.grow}></div>
                <div className={classes.userSection}>
                    <Button variant="contained" color="primary" className={classes.button}>
                        Novo Post
                    </Button>
                    <SvgIcon className={classes.bell}>
                        <NotificationsNoneIcon />
                    </SvgIcon>
                    <Avatar alt="Remy Sharp" src="/" />
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header;