import { useRef } from "react";

import { Grid, TextField, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
    pad: {
        padding: "0em 1em"
    },

    root: {
        "& .Mui-focused": {
            color: theme.palette.text.primary,
        }, 

        "& .MuiInputLabel-root": {
            color: theme.palette.text.primary
        }
        
    }
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

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container>
                    <Grid item xs={8} className={classes.pad}>
                        <TextField id="input-message" label="Digite sua mensagem"
                            fullWidth inputRef={inputMsgRef}
                            className={classes.root}/>
                    </Grid>
                    <Grid item xs={4} className={classes.pad}>
                        <Button fullWidth variant="text" size="large"
                            startIcon={<SendIcon />}
                            onClick={onAction}>
                            Falar
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}