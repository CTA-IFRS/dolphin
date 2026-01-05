import React, {useState} from "react";
import { Drawer, Button, ButtonGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

    mainGrid: {
        display: "flex",
        flexDirection: "column",
        height: "100%"
    },

    contrastGrid: {
        textAlign: "center",
        flexGrow: 1,
        padding: theme.spacing(3)
    },

    aboutGrid: {
        textAlign: "center",
        padding: theme.spacing(3)
    },

    srOnly: {
        position: "fixed",
        overflow: false,
        width: "1px",
        height: "1px",
        left: "-1000px",
    },

    mb1: {
        marginBottom: "1em"
    },

    dividerMargin: {
        marginBottom: "1.5em",
        marginTop: "1.5em"
    }
}));

export default function DolphinDrawer(props) {
    const classes = useStyles();

    const themeUpdater = props.themeUpdater;

    function changeToDefaultTheme() {
        document.body.classList.remove("body-highContrast", "body-sepia");
        themeUpdater.setTheme("commom");
        props.onClose();
    }

    function changeToHighContrastTheme() {
        document.body.classList.add("body-highContrast");
        document.body.classList.remove("body-sepia");
        themeUpdater.setTheme("highContrast");
        props.onClose();
    }

    function changeToSepiaTheme() {
        document.body.classList.add("body-sepia");
        document.body.classList.remove("body-highContrast");
        themeUpdater.setTheme("sepia");
        props.onClose();
    }

    const filteredProps = Object.keys(props).reduce((obj, key) => {
        if (key !== "themeUpdater") {
            obj[key] = props[key];
        }

        return obj;
    }, {});

    return (
        <Drawer {...filteredProps}>
            <div className={classes.mainGrid}>
                <div className={classes.contrastGrid}>
                    <ButtonGroup orientation="vertical"
                        aria-label="Ajuste de contraste">
                        <Button onClick={changeToDefaultTheme}>
                            Normal
                        </Button>
                        <Button onClick={changeToHighContrastTheme}>
                            Alto contraste
                        </Button>
                        <Button onClick={changeToSepiaTheme}>
                            Sépia
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
        </Drawer>
    );
}