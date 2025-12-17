import React, {useState} from "react";
import { Drawer, Link, } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DolphinAboutDialog from "./DolphinAboutDialog";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({

    mainGrid: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        textAlign: "center",
        width: 212
    },

    srOnly: {
        position: "fixed",
        overflow: false,
        width: "1px",
        height: "1px",
        left: "-1000px",
    },

    menu: {
        display: "flex",
        flexDirection: "column",
        gap: 14,
    },

    manualButton: {
        color: theme.palette.grey[800],
        fontFamily: "Atkinson Hyperlegible, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        borderLeft: "2px solid transparent",
        padding: "10px",
        paddingLeft: "14px",
        textDecoration: "none",
        textAlign: "left",

        "&:hover, &:focus, &:focus-visible": {
            backgroundColor: theme.palette.primary[100],
            borderColor: theme.palette.primary[500],
            outline: "none",
        }
    },

    flex_row: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 16,
        paddingTop: 12,
        paddingBottom: 12
    },

    d_title: {
        fontFamily: "Atkinson Hyperlegible, sans-serif",
        fontWeight: 700,
        fontSize: 20,
        color: theme.palette.grey[800],
        margin: 0
    },

    logo_cta: {
        margin: "auto",
        marginBottom: 24
    }
}));

export default function DolphinDrawer({onClose, ...props }) {
    const classes = useStyles();

    return (
        <Drawer {...props} onClose={onClose}>
            <div className={classes.mainGrid}>
                <div className={classes.flex_row}>
                    <h5 className={classes.d_title}>
                        Menu
                    </h5>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <div className={classes.menu}>
                    <DolphinAboutDialog/>
                    <a className={classes.manualButton} href="https://cta-ifrs.github.io/dolphin/manual/index.html">Manual (link externo)</a>
                </div>
                <Link href="https://cta.ifrs.edu.br/" className={classes.logo_cta}> 
                    <img src="logo-cta.png" width={160} alt="Logo do Centro Tecnológico de Acessibilidade"/>
                </Link>
            </div>
        </Drawer>
    );
}