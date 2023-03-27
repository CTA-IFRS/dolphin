import React, {useState} from "react";
import { Drawer, Button, ButtonGroup, Typography, Link, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DolphinAboutDialog from "./DolphinAboutDialog";

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
    const [logoSrc, changeLogoSrc] = useState("logo-cta.png");

    const themeUpdater = props.themeUpdater;

    function changeToDefaultTheme() {
        themeUpdater.setTheme("commom");
        changeLogoSrc("logo-cta.png");
        props.onClose();
    }

    function changeToHighContrastTheme() {
        themeUpdater.setTheme("highContrast");
        changeLogoSrc("logo-cta-contraste.png");
        props.onClose();
    }

    function changeToSepiaTheme() {
        themeUpdater.setTheme("sepia");
        changeLogoSrc("logo-cta.png");
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

                <div className={classes.aboutGrid}>
                    <div className={classes.mb1}>
                        <DolphinAboutDialog/>
                    </div>
                    <Divider className={classes.mb1}/>
                    <Typography >
                        <Link href="https://cta.ifrs.edu.br/"
                            color="textPrimary"> 
                            <img src={logoSrc} width={160} alt="Logo do Centro Tecnológico de Acessibilidade"/>
                        </Link>
                    </Typography>
                </div>
            </div>
        </Drawer>
    );
}