import React, {useState, useEffect} from "react";
import { Drawer, Button, ButtonGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Check from '@material-ui/icons/Check'

const useStyles = makeStyles((theme) => ({

    mainGrid: {
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        height: "100%",
        backgroundColor: theme.palette.drawer.main,
        padding: "16px 20px",
    },

    contrastGrid: {
        textAlign: "center",
        flexGrow: 1,

        "& .MuiButtonBase-root:not(form .MuiButtonBase-root), & label": {
            border: "none",
            justifyContent: "start",
            padding: "8px",
            paddingLeft: "30px",
            marginTop: "5px",
            marginBottom: "5px",
            fontFamily: "Atkinson Hyperlegible, sans-serif",
            fontWeight: 400,
            fontSize: "1rem",
            textTransform: "none",
            textAlign: "left"
        },
    },

    flex_row: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingBottom: 12
    },

    d_title: {
        fontFamily: "Atkinson Hyperlegible, sans-serif",
        fontWeight: 700,
        fontSize: "1.25rem",
        color: theme.palette.text.secondary,
        margin: 0
    },
    
    selectVoice: {
        backgroundColor: theme.palette.defaultColor.main,
        border: "1px solid",
        borderColor: theme.palette.grey[500],
        borderRadius: 8,
        width: "247px",
        padding: "12px",
        fontFamily: "Atkinson Hyperlegible, sans-serif",
        fontWeight: 400,
        fontSize: "1rem",
        color: theme.palette.text.secondary,
    },

    formVoice: {
        display: "flex",
        flexDirection: "column",
        alignItems: "start"
    },

    inputRange: {
        width: "100%"
    },

    applyButton: {
        height: 36,
        borderRadius: 9999,
        paddingLeft: 19,
        paddingRight: 19,
        border: "1px solid",
        backgroundColor: theme.palette.primaryButton.main,
        color: theme.palette.primaryButton.text,
        borderColor: theme.palette.primaryButton.border,
        fontSize: "0.875rem",
        textTransform: "uppercase",
        fontWeight: 700,
        marginTop: "22px",

        "&:hover, &:focus, &:focus-visible": {
            backgroundColor: theme.palette.primaryButton.hover,
            color: theme.palette.primaryButton.textHover,
            borderColor: theme.palette.primaryButton.borderHover,
        }
    }
}));

export default function DolphinConfigDrawer({
    open,
    onClose,
    themeUpdater,
    selectedVoice,
    setSelectedVoice,
    speechRate,
    setSpeechRate,
    ...drawerProps
}) {
    const classes = useStyles();

    const [voices, setVoices] = useState([]);
    const [voiceDraft, setVoiceDraft] = useState(selectedVoice);
    const [rateDraft, setRateDraft] = useState(speechRate);

    //const themeUpdater = props.themeUpdater;

    function changeToDefaultTheme() {
        document.body.classList.remove("body-highContrast", "body-sepia");
        themeUpdater.setTheme("commom");
        onClose();
    }

    function changeToHighContrastTheme() {
        document.body.classList.add("body-highContrast");
        document.body.classList.remove("body-sepia");
        themeUpdater.setTheme("highContrast");
        onClose();
    }

    function changeToSepiaTheme() {
        document.body.classList.add("body-sepia");
        document.body.classList.remove("body-highContrast");
        themeUpdater.setTheme("sepia");
        onClose();
    }

    /*const filteredProps = Object.keys(props).reduce((obj, key) => {
        if (key !== "themeUpdater") {
            obj[key] = props[key];
        }

        return obj;
    }, {});*/

    const [fontSize, setFontSize] = useState(16);

    useEffect(() => {
        const defaultFontSize = window.getComputedStyle(document.documentElement).fontSize;
        setFontSize(parseInt(defaultFontSize, 10));
    }, []);

    useEffect(() => {
        document.documentElement.style.fontSize = `${fontSize}px`;
    }, [fontSize]);

    const increaseFont = () => setFontSize(prev => prev + 1);
    const decreaseFont = () => setFontSize(prev => prev - 1);
    const resetFont = () => setFontSize(16);

    useEffect(() => {
        function loadVoices() {
            const voices = window.speechSynthesis.getVoices();
            const ptVoices = voices.filter(voice =>
                voice.lang.toLowerCase().startsWith('pt')
            );
            setVoices(ptVoices);

            if (!selectedVoice) {
                const ptVoice = voices.find((voice) => voice.lang === "pt-BR");
                setVoiceDraft(ptVoice);
            }
        }
        loadVoices();
        window.speechSynthesis.onvoiceschanged = loadVoices;
    }, []);

    useEffect(() => {
        setVoiceDraft(selectedVoice);
        setRateDraft(speechRate);
    }, [selectedVoice, speechRate]);

    function applySettings() {
        setSelectedVoice(voiceDraft);
        setSpeechRate(rateDraft);
        localStorage.setItem("speechRate", rateDraft);
        localStorage.setItem("speechVoice", voiceDraft?.name || "");
        onClose();
    }
    
    return (
        <Drawer open={open} onClose={onClose} {...drawerProps}>
            <div className={classes.mainGrid}>
                <div className={classes.flex_row}>
                    <h5 className={classes.d_title}>
                        Configurações
                    </h5>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <div className={classes.contrastGrid}>
                    <ButtonGroup orientation="vertical"
                        aria-label="Ajustes de acessibilidade">
                        <Button onClick={increaseFont} style={{background: "url(font-plus-icon.png) center left no-repeat", backgroundSize: "19px"}}>
                            Aumentar fonte
                        </Button>
                        <Button onClick={resetFont} style={{background: "url(font-equal-icon.png) center left no-repeat", backgroundSize: "19px"}}>
                            Tamanho padrão de fonte
                        </Button>
                        <Button onClick={decreaseFont} style={{background: "url(font-minus-icon.png) center left no-repeat", backgroundSize: "19px"}}>
                            Diminuir fonte
                        </Button>
                        <Button onClick={changeToDefaultTheme} style={{background: "url(no-contrast-icon.png) center left no-repeat", backgroundSize: "19px"}}>
                            Contraste normal
                        </Button>
                        <Button onClick={changeToSepiaTheme} style={{background: "url(sepia-contrast-icon.png) center left no-repeat", backgroundSize: "19px"}}>
                            Sépia
                        </Button>
                        <Button onClick={changeToHighContrastTheme} style={{background: "url(high-contrast-icon.png) center left no-repeat", backgroundSize: "19px"}}>
                            Alto contraste
                        </Button>
                        <form className={classes.formVoice}>
                            <label htmlFor="selectVoice" style={{background: "url(voz-icon.png) center left no-repeat", backgroundSize: "19px"}}>Voz:</label>
                            <select
                                id="selectVoice"
                                className={classes.selectVoice}
                                value={voiceDraft?.name || ""}
                                onChange={(e) =>
                                    setVoiceDraft(
                                        voices.find((voice) => voice.name === e.target.value)
                                    )
                                }
                            >
                                {voices.map((voice) => (
                                    <option key={voice.name} value={voice.name}>
                                        {voice.name}
                                    </option>
                                ))}
                            </select>
                            <label htmlFor="velocidade" style={{background: "url(velocidade-icon.png) center left no-repeat", backgroundSize: "19px"}}>Velocidade de reprodução</label>
                            <input type="range" id="velocidade" min="0.5" max="2" step="0.1" className={classes.inputRange}
                                value={rateDraft}
                                onChange={(e) =>
                                    setRateDraft(Number(e.target.value))
                                }
                            />
                            <Button onClick={applySettings} endIcon={<Check />}className={classes.applyButton}>Aplicar</Button>
                        </form>
                    </ButtonGroup>
                </div>
            </div>
        </Drawer>
    );
}