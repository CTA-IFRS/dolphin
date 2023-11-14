
import React, { useState, useEffect } from 'react';

import { makeStyles } from "@material-ui/core/styles";

import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';
import VolumeUp from '@material-ui/icons/VolumeUp';
import VolumeOff from '@material-ui/icons/VolumeOff';

import DolphinDrawer from "./DolphinDrawer";


const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2)
    },

    active: {
        color: theme.palette.talkerActive.main
    },

    notActive: {
        color: theme.palette.talkerNotActive.main
    },

    titleBar: {
        flexGrow: 1
    },

    dolphinLogoName: {
        textDecoration: 'none',
        color: theme.palette.dolphinLogoColor.color
    }
}));

function DolphinAppBar(props) {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);
    
    const talkerMonitor = props.talkerMonitor;

    function handleOpenDrawer() {
        setDrawerOpen(!drawerOpen);
    }

    function handleTalkerListen() {
        talkerMonitor.setTalkerListen(!talkerMonitor.isListenEnabled);
    }

    function handleTalkerSpeak() {
        talkerMonitor.setTalkerSpeak(!talkerMonitor.isSpeakEnabled);
    }

    talkerMonitor.talker.setContinuityEvent(() => {
        return talkerMonitor.isListenEnabled;
    });

    useEffect(() => {
        if (talkerMonitor.isListenEnabled) {
            if (!talkerMonitor.talker.isRunning()) talkerMonitor.talker.start()
        } else {
            if (talkerMonitor.talker.isRunning()) talkerMonitor.talker.stop();
        }
    });

    return (
        <AppBar position="fixed">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton}
                            color="inherit" aria-label="menu"
                            onClick={handleOpenDrawer} 
                            aria-haspopup="true"
                            aria-expanded={drawerOpen}>
                <MenuIcon />
                </IconButton>

                <a href="/dolphin" className={classes.dolphinLogoName}>
                <img src={props.themeUpdater.themeName == "sepia" ? "logo-dolphin.png" : "logo-dolphin-white.png"} width={50} alt="Logo do Dolphin"/>
                    {/* <img src="logo-dolphin.png" width={50} alt="Logo do Dolphin"/> */}
                </a>
                <Typography variant="h6" component="h1" className={classes.titleBar}>
                    <a href="/dolphin" className={classes.dolphinLogoName}>Dolphin</a>
                </Typography>

                {  
                    (talkerMonitor.talker.hasSupport()) &&
                    (<IconButton onClick={handleTalkerListen}
                            aria-pressed={talkerMonitor.isListenEnabled}
                            aria-label="Conversão fala para texto">
                        {
                            (talkerMonitor.isListenEnabled) ? 
                                <MicIcon className={classes.active} />
                            :
                                <MicOffIcon className={classes.notActive} />
                        }
                    </IconButton>)
                 
                }

                <IconButton onClick={handleTalkerSpeak} 
                            aria-pressed={talkerMonitor.isSpeakEnabled}
                            aria-label="Conversão texto para fala">
                    {           
                        (talkerMonitor.isSpeakEnabled) ?          
                            <VolumeUp className={classes.active} />
                        :
                            <VolumeOff className={classes.notActive} />
                    }   
                </IconButton>

            </Toolbar>
            <DolphinDrawer open={drawerOpen} onClose={handleOpenDrawer} 
                themeUpdater={props.themeUpdater}
            />
        </AppBar>
    );
}

export default DolphinAppBar;
