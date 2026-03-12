
import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import VolumeUp from '@material-ui/icons/VolumeUp';
import VolumeOff from '@material-ui/icons/VolumeOff';
import Settings from '@material-ui/icons/Settings';
import DolphinDrawer from "./DolphinDrawer";
import DolphinConfigDrawer from "./DolphinConfigDrawer";

const useStyles = makeStyles((theme) => ({

    appBarCustom: {
        backgroundColor: theme.palette.defaultColor.main,
        color: theme.palette.grey[900],
        boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.1)",
        height: 96,
        justifyContent: "center"
    },
  
    menuButton: {
        marginRight: theme.spacing(2),
        border: "1px solid",
        borderColor: theme.palette.grey[400],
        borderRadius: 4,
        width: 60,
        height: 60,
        color: theme.palette.text.primary,
        
        [theme.breakpoints.down(400)]: {
            width: 44,
            height: 44,
            marginRight: 0,
            marginLeft: 8
        },
    },

    menuIcon: {
        fontSize: 29
    },

    active: {
        color: theme.palette.text.primary
    },

    notActive: {
        color: theme.palette.text.primary
    },

    titleBar: {
        flexGrow: 1
    },

    dolphinLogoName: {
        textDecoration: 'none',
        color: theme.palette.text.primary,
        fontFamily: "Atkinson Hyperlegible, sans-serif",
        fontWeight: 700,
        fontSize: 24,
        marginLeft: 8,

        [theme.breakpoints.down(400)]: {
            marginLeft: 0
        },
    },

    dolphinLogoImg: {
        width: 85,

        [theme.breakpoints.down(400)]: {
            width: 65,
        },
    }
}));

function DolphinAppBar(props) {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [configDrawerOpen, setConfigDrawerOpen] = useState(false);
    
    const talkerMonitor = props.talkerMonitor;

    function handleOpenDrawer() {
        setDrawerOpen(!drawerOpen);
    }

    function handleConfigOpenDrawer() {
        setConfigDrawerOpen(!configDrawerOpen);
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
        <AppBar position="fixed" className={classes.appBarCustom}>
            <Toolbar>

                <a href="/dolphin" className={classes.dolphinLogoName}>
                <img className={classes.dolphinLogoImg} src={props.themeUpdater.themeName === "highContrast" ? "logo-dolphin-white.png" : "logo-dolphin.png"} alt="Logo do Dolphin"/>
                    {/* <img src="logo-dolphin.png" width={50} alt="Logo do Dolphin"/> */}
                </a>
                <Typography variant="h6" component="h1" className={classes.titleBar}>
                    <a href="/dolphin" className={classes.dolphinLogoName}>Dolphin</a>
                </Typography>

                {/*<IconButton onClick={handleTalkerSpeak} 
                            aria-pressed={talkerMonitor.isSpeakEnabled}
                            aria-label="Conversão texto para fala">
                    {           
                        (talkerMonitor.isSpeakEnabled) ?          
                            <VolumeUp className={classes.active} />
                        :
                            <VolumeOff className={classes.notActive} />
                    }   
                </IconButton>*/}

                <IconButton edge="start" className={classes.menuButton}
                            color="inherit" aria-label="menu"
                            onClick={handleConfigOpenDrawer} 
                            aria-haspopup="true"
                            aria-expanded={configDrawerOpen}>
                    <Settings className={classes.menuIcon}/>
                </IconButton>

                <IconButton edge="start" className={classes.menuButton}
                            color="inherit" aria-label="menu"
                            onClick={handleOpenDrawer} 
                            aria-haspopup="true"
                            aria-expanded={drawerOpen}>
                    <MenuIcon className={classes.menuIcon}/>
                </IconButton>

            </Toolbar>
            
            <DolphinConfigDrawer open={configDrawerOpen} onClose={handleConfigOpenDrawer} 
                themeUpdater={props.themeUpdater}
                selectedVoice={props.selectedVoice}
                setSelectedVoice={props.setSelectedVoice}
                speechRate={props.speechRate}
                setSpeechRate={props.setSpeechRate}
                anchor="right"
            />
            
            <DolphinDrawer open={drawerOpen} onClose={handleOpenDrawer} 
                anchor="right"
            />

        </AppBar>
    );
}

export default DolphinAppBar;
