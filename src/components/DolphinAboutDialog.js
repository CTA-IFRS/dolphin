import React, {useState} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({

    aboutButton: {
        textTransform: "none",
        backgroundColor: "transparent",
        color: theme.palette.text.secondary,
        fontFamily: "Atkinson Hyperlegible, sans-serif",
        fontWeight: 400,
        fontSize: "1rem",
        textAlign: "left",
        justifyContent: "left",
        borderRadius: 0,
        border: 0,
        borderLeft: "2px solid transparent",
        padding: "10px",
        paddingLeft: "14px",
        width: "100%",
        cursor: "pointer",

        "&:hover, &:focus, &:focus-visible": {
            backgroundColor: theme.palette.menuButton.main,
            borderColor: theme.palette.menuButton.border,
            outline: "none",
        }
    },

    d_header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 24px"
    },
    
    d_title: {
        fontFamily: "Atkinson Hyperlegible, sans-serif",
        fontWeight: 700,
        fontSize: "1.5rem",
        margin: 0
    },

    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.text.secondary,
    },
    
    d_content: {
        margin: "0 24px",
        padding: 0,
        borderTop: "1px solid",
        borderBottom: "1px solid",
        borderTopColor: theme.palette.grey[400],
        borderBottomColor: theme.palette.grey[400],
    },

    d_text: {
        fontFamily: "Nunito",
        fontWeight: 400,
        fontSize: "1rem",
        lineHeight: "28px",
        margin: 0,
        color: theme.palette.text.primary,

        '& ul': {
            display: "flex",
            flexDirection: "column",
            gap: "16px"
        }
    },
    
    d_footer: {
        display: "flex",
        justifyContent: "center",
        gap: "24px",
        padding: "24px",
        '@media (max-width:600px)': {
            flexDirection: "column"
        },
    },

    d_body: {
        "& .MuiPaper-root ": {
            backgroundColor: theme.palette.drawer.main
        }
    }

}));

function DolphinAboutDialog() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => { setOpen(true); };

    const handleClose = () => { setOpen(false); };

    const classes = useStyles();

    return (
    <div>
        <button fullWidth={true} onClick={handleClickOpen} className={classes.aboutButton}>
            Sobre
        </button>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description" 
            className={classes.d_body}
        >
            <div className={classes.d_header}>
                <h2 className={classes.d_title}>
                    Sobre o Dolphin
                </h2>
                <IconButton onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </div>
            <DialogContent className={classes.d_content}>
                <DialogContentText id="alert-dialog-description" className={classes.d_text}>
                    <p>
                        Esta é uma ferramenta para facilitar a comunicação de pessoas com comprometimento na fala e/ou pessoas surdas.
                    </p>
                    <ul>
                        <li>
                            Para a conversão de texto para fala, digite o texto na caixa de mensagem e pressione a tecla "enter" ou clique no botão "Enviar".
                        </li>
                        <li>
                            Para conversão de fala para texto, ative a opção do "Enviar fala".
                        </li>
                    </ul>
                </DialogContentText>
            </DialogContent>
            <DialogActions className={classes.d_footer}>
                <a href="https://cta.ifrs.edu.br">
                    <img src="/logo-cta.png" height="55px" style={{backgroundColor: "white", padding: "12px", borderRadius: "8px"}} alt="Logo do CTA - Centro Tecnológico de Acessibilidade do IFRS"/>
                </a>
                <a href="https://ifrs.edu.br">
                    <img src="/logo-ifrs.png" height="55px" style={{backgroundColor: "white", padding: "12px", borderRadius: "8px"}} alt="Logo do IFRS - Instituto Federal de Educação Ciência e Tecnologia do Rio Grande do Sul"/>
                </a>
            </DialogActions>
        </Dialog>
    </div>
    );
}

export default DolphinAboutDialog;