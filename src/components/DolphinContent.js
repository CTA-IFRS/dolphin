import { useState, useEffect } from "react";

import {Box, List, ListItem, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import DolphinCommandBar from "./DolphinCommandBar";
import Talker from "./../talker/Talker";
import Message from "./../types/Message";
import { red } from "@material-ui/core/colors";

const DATA = [
    Message("Bem vindo ao Dolphin!", "intro")
];

const useStyles = makeStyles((theme) => ({
    messagesBox:{
        position: "fixed",
        left: 0, 
        right: 0,
        top: 0, 
        bottom: 0,
        overflow: "auto",
        
        backgroundColor: theme.palette.background.paper
    },

    messagesList:{
        marginLeft: "1.5em",
        marginRight: "1.5em",
        marginTop: "3.5em",
        marginBottom: "3.5em"
    },

    commandBar: {
        position: "fixed", 
        bottom: "0px", 
        left: "0px", 
        right: "0px", 
        borderTop: "1px solid black", 
        zIndex: 1000,
        padding: "0.5em 0.5em",
        backgroundColor: theme.palette.background.default
    },

    speak: {
        margin: "0.5em 0em",
        justifyContent: "right"
    },

    speakInner: {
        borderRadius: 8,
        backgroundColor: theme.palette.speakMessages.main,
        padding: "0.5em 1em"
    },

    listen: {
        margin: "0.5em 0em",
        justifyContent: "left"
    },

    listenInner: {
        borderRadius: 8,
        backgroundColor: theme.palette.listenMessages.main,
        padding: "0.5em 1em"
    },

    intro: {
        borderRadius: 8,
        backgroundColor: theme.palette.speakMessages.main,
        //padding: "1em 1em"
        margin: "0.5em 0em",
        justifyContent: "center"
    }

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
            </ListItem>
        ));
    }

    talkerMonitor.talker.setWorkEvent( (resultList) => {
        const lastResult = resultList[resultList.length - 1];   
        addListenMessage(lastResult[lastResult.length - 1].transcript);
    });


    useEffect(() => {
        const el = document.getElementById("msg-" + (data.length - 1));
        el.scrollIntoView();
    });

    return (
        <>
            <Box className={classes.messagesBox}>
                <List className={classes.messagesList}>
                    { toGridMessages() }
                </List>  
            </Box>

            <Paper elevation={0} square={true} className={classes.commandBar}>
                <DolphinCommandBar onAction={addSpeakMessage} />
            </Paper>
        </>
    );

}
