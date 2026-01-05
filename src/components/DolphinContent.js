import { useState, useEffect, useRef } from "react";

import {Box, List, ListItem, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import DolphinCommandBar from "./DolphinCommandBar";
import Talker from "./../talker/Talker";
import Message from "./../types/Message";
import IconButton from '@material-ui/core/IconButton';
import Pause from "@material-ui/icons/Pause";
import VolumeUpOutlinedIcon from '@material-ui/icons/VolumeUpOutlined';

const DATA = [];

const useStyles = makeStyles((theme) => ({
    messagesBox:{
        backgroundColor: theme.palette.background.paper
    },

    messagesList:{
        backgroundColor: theme.palette.messagesList.main,
        border: "1px solid",
        borderColor: theme.palette.messagesList.border,
        marginBottom: 14,
        borderRadius: 8,
        padding: 24,
        paddingRight: 48,
        overflowY: "scroll",
        height: "calc(100vh - 300px)"
    },

    commandBar: {
    },

    speak: {
        margin: "0.5em 0em",
        justifyContent: "right"
    },

    speakInner: {
        borderRadius: 8,
        borderTopRightRadius: 0,
        backgroundColor: theme.palette.speakMessages.main,
        padding: "16px 24px",
        paddingRight: 76,
        fontFamily: "Nunito",
        fontSize: 16,
        lineHeight: "28px",
        maxWidth: 900
    },

    listen: {
        margin: "0.5em 0em",
        justifyContent: "left"
    },

    listenInner: {
        borderRadius: 8,
        borderTopLeftRadius: 0,
        backgroundColor: theme.palette.listenMessages.main,
        padding: "16px 24px",
        paddingRight: 76,
        fontFamily: "Nunito",
        fontSize: 16,
        lineHeight: "28px",
        maxWidth: 900
    },

    container: {
        backgroundColor: theme.palette.defaultColor.main,
        padding: 24,
        boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.1)",
        borderRadius: 12,
        marginTop: 120
    },

    playBtn: {
        backgroundColor: theme.palette.defaultColor.main,
        marginLeft: -58,
        padding: 8,
        color: theme.palette.playBtn.contrastText,
        "&:hover": {
            backgroundColor: theme.palette.defaultColor.main,
        },
    },

}));

export default function DolhpinContent(props) {
    const classes = useStyles();
    const [data, setData] = useState(DATA);

    const talkerMonitor = props.talkerMonitor;

    function addMessage(msgObj) {
        setData([...data, msgObj]);
    }

    function addSpeakMessage(msg) {
        addMessage(Message(msg, "speak"));
        if (talkerMonitor.isSpeakEnabled) {
            Talker.speak(msg);
        }
    }

    function addListenMessage(msg) {
        addMessage(Message(msg, "listen"));
    } 

    function toGridMessages() {
        return data.map((m, id) => (
            <ListItem 
                className={classes[m.type]} 
                key={id} 
                id={"msg-" + id}>            
                    <span className={classes[m.type + "Inner"]}>
                        {m.text}
                    </span>
                <IconButton 
                    className={classes.playBtn}
                    size="medium"
                    aria-label={playingId === id ? "Pausar áudio" : "Reproduzir áudio"} 
                    onClick={() => {
                        if (playingId === id) {
                            handlePause();
                        } else {
                            handlePlay(id, m.text);
                        }
                    }}
                >
                    {playingId === id ? <Pause /> : <VolumeUpOutlinedIcon />}
                </IconButton>
            </ListItem>
        ));
    }

    talkerMonitor.talker.setWorkEvent( (resultList) => {
        const lastResult = resultList[resultList.length - 1];   
        addListenMessage(lastResult[lastResult.length - 1].transcript);
    });


    useEffect(() => {
        const el = document.getElementById("msg-" + (data.length - 1));
        if (el) {
            el.scrollIntoView();
        }
    });
    
    const currentUtteranceRef = useRef(null);
    const [playingId, setPlayingId] = useState(null);

    function handlePlay(id, msg) {
        handlePause();
        
        const utterance = new SpeechSynthesisUtterance(msg);
        utterance.onend = () => {
            setPlayingId(null);
            currentUtteranceRef.current = null;
        };

        currentUtteranceRef.current = utterance;
        setPlayingId(id);
        window.speechSynthesis.speak(utterance);
    }

    function handlePause() {
        if (currentUtteranceRef.current) {
            window.speechSynthesis.cancel();
            currentUtteranceRef.current = null;
            setPlayingId(null);
        }
    }

    return (
        <>
            <Container maxWidth="lg" className={classes.container}>
                <Box className={classes.messagesBox}>
                    <List className={classes.messagesList}>
                        { toGridMessages() }
                    </List>  
                </Box>

                <Box className={classes.commandBar}>
                    <DolphinCommandBar onAction={addSpeakMessage} talkerMonitor={talkerMonitor}/>
                </Box>
            </Container>
        </>
    );

}
