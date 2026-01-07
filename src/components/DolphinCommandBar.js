import { useRef } from "react";

import { TextField, Button, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from '@material-ui/icons/Send';
import React, { useEffect } from 'react';
import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';

const useStyles = makeStyles((theme) => ({

    root: {
        "& .MuiOutlinedInput-root": {
            height: 48,
            borderRadius: 9999,
            backgroundColor: theme.palette.inputText.main,
            color: theme.palette.inputText.contrastText,
            paddingRight: 80,

            "& fieldset": {
                borderColor: theme.palette.grey[500],
            },
            "&:hover fieldset": {
                borderColor: theme.palette.grey[500],
            },
            "&.Mui-focused fieldset": {
                borderColor: theme.palette.grey[500],
            },
        },

        "& .MuiInputLabel-outlined.MuiInputLabel-marginDense": {
            transform: "translate(16px, 16px) scale(1)",
        },

        "& .MuiInputLabel-outlined.MuiInputLabel-marginDense.MuiInputLabel-shrink": {
            transform: "translate(14px, -6px) scale(0.75)", 
        },
        
        "& .MuiInputBase-input::placeholder": {
            color: theme.palette.grey[600],
            opacity: 1,
        },

        "& .MuiInputLabel-root": {
            color: theme.palette.text.primary,
        },
        "& .Mui-focused .MuiInputLabel-root": {
            color: theme.palette.text.primary,
        }
    },

    active: {
        color: theme.palette.primary[500],
    },

    notActive: {
        color: theme.palette.primary[500],
    },

    writeButton: {
        width: 204,
        height: 48,
        marginLeft: -80,
        borderRadius: 9999,
        paddingLeft: 24,
        paddingRight: 24,
        border: "1px solid",
        backgroundColor: theme.palette.primaryButton.main,
        color: theme.palette.primaryButton.text,
        borderColor: theme.palette.primaryButton.border,
        fontWeight: 700,

        "&:hover, &:focus, &:focus-visible": {
            backgroundColor: theme.palette.primaryButton.hover,
            color: theme.palette.primaryButton.textHover,
            borderColor: theme.palette.primaryButton.borderHover,
        },
        '@media (max-width:600px)': {
            width: 48,
            minWidth: 48,
            marginLeft: -48,
            "& .MuiButton-endIcon": {
                marginLeft: 0
            }
        },
    },

    writeButtonText: {
        marginLeft: "auto",
        marginRight: "auto",
        '@media (max-width:600px)': {
            textIndent: -9999,
        },
    },

    speakButton: {
        width: 178,
        height: 48,
        borderRadius: 9999,
        paddingLeft: 24,
        paddingRight: 24,
        marginLeft: 12,
        border: "1.5px solid",
        borderColor: theme.palette.outlineButton.main,
        color: theme.palette.outlineButton.main,
        fontWeight: 700,

        "&:hover, &:focus, &:focus-visible": {
            backgroundColor: theme.palette.outlineButton.main,
            color: theme.palette.outlineButton.textHover,
        },
        '@media (max-width:600px)': {
            width: 48,
            minWidth: 48,
            textIndent: -9999,
            marginLeft: 8,
            "& .MuiButton-endIcon": {
                margin: 0
            }
        },
    },

}));

export default function DolphinCommandBar(props) {
    const classes = useStyles();
    const inputMsgRef = useRef(null);

    function onAction(ev) {
        if (inputMsgRef.current.value !== "") {
            props.onAction(inputMsgRef.current.value);
            inputMsgRef.current.value = "";
        }
    }

    function handleSubmit(ev) {
        ev.preventDefault();
        onAction(ev);
    }
    
    const talkerMonitor = props.talkerMonitor;

    function handleTalkerListen() {
        talkerMonitor.setTalkerListen(!talkerMonitor.isListenEnabled);
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
        <div>
            <form onSubmit={handleSubmit}>
                <Box display="grid" gridTemplateColumns={talkerMonitor.talker.hasSupport() ? {xs: "1fr 48px", sm: "1fr 193px"} : "1fr"}>
                    <Box display="flex" flexDirection="row">
                        <TextField id="input-message" label="Digite sua fala"
                            fullWidth inputRef={inputMsgRef}
                            className={classes.root}
                            variant="outlined"
                            size="small"
                        />
                        <Button fullWidth variant="contained" size="large" disableElevation
                            onClick={onAction}
                            endIcon={<SendIcon />}
                            className={classes.writeButton}
                        >
                            <span className={classes.writeButtonText}>Enviar</span>
                        </Button>
                    </Box>
                    <Box>
                        {  
                            (talkerMonitor.talker.hasSupport()) &&
                            (<Button onClick={handleTalkerListen}
                                    aria-pressed={talkerMonitor.isListenEnabled}
                                    variant="outlined" size="large"
                                    className={classes.speakButton}
                                    endIcon={talkerMonitor.isListenEnabled ? <MicIcon /> : <MicOffIcon />}
                                >
                                enviar fala
                            </Button>)
                        }
                    </Box>
                </Box>
            </form>
        </div>
    );
}