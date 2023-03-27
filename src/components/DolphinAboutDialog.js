import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MicIcon from '@material-ui/icons/Mic';

function DolphinAboutDialog() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => { setOpen(true); };

    const handleClose = () => { setOpen(false); };

    return (
    <div>
        <Button variant="outlined" fullWidth={true} onClick={handleClickOpen}>
            Sobre
        </Button>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description" >
        <DialogTitle id="alert-dialog-title">
            {"Sobre o Dolphin"}
        </DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description" color="textPrimary">
                <p>
                    Esta é uma ferramenta para facilitar a comunicação de 
                    pessoas com comprometimento na fala e/ou pessoas surdas.
                </p>
                <ul>
                    <li>
                        Para a conversão de texto para fala, digite o texto na caixa de mensagem e pressione a tecla "enter"
                        ou ative o botão "Falar".
                    </li>
                    <li>
                        Para conversão de fala para texto, ative a opção do Microfone(<MicIcon />).
                    </li>
                </ul>
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}  autoFocus>
                Fechar
            </Button>
        </DialogActions>
        </Dialog>
    </div>
    );
}

export default DolphinAboutDialog;