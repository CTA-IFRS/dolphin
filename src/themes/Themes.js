
import { createMuiTheme } from "@material-ui/core/styles";

const baseTheme = {
  typography: {
    fontFamily: "Nunito",
  }
};

export function getTheme(name) {
    if (name === "commom") {
        return createMuiTheme({
            ...baseTheme,
            palette: {
                type: "light",

                primary: {
                    100: "#E6F3F6",
                    200: "#96CCD2",
                    300: "#00838F",
                    400: "#006064",
                    500: "#035155",
                    600: "#023032"
                },

                grey: {
                    100: "#F8F9FA",
                    200: "#E9ECEF",
                    300: "#DEE2E6",
                    400: "#CED4DA",
                    500: "#ADB5BD",
                    600: "#6C757D",
                    700: "#495057",
                    800: "#343A40",
                    900: "#212529"
                },

                black: {
                    main: "#000000"
                },

                white: {
                    main: "#FFFFFF"
                },

                text: {
                    primary: "#212529",
                    secondary: "#343A40"
                },

                speakMessages: {
                    main: "#96CCD2",
                    contrastText: "#212529"
                },
        
                listenMessages: {
                    main: "#DEE2E6",
                    contrastText: "#212529"
                },

                defaultColor: {
                    main: "#FFFFFF"
                },

                primaryButton: {
                    main: "#006064",
                    hover: "#023032",
                    text: "#FFFFFF",
                    border: "#006064",
                    textHover: "#FFFFFF",
                    borderHover: "#023032",
                },

                outlineButton: {
                    main: "#006064",
                    textHover: "#FFFFFF",
                },

                messagesList: {
                    main: "#F8F9FA",
                    border: "#F8F9FA"
                },

                playBtn: {
                    contrastText: "#212529"
                },

                inputText: {
                    main: "#F8F9FA",
                    contrastText: "#343A40"
                },

                menuButton: {
                    main: "#E6F3F6",
                    border: "#035155",
                },

                drawer: {
                    main: "#FFFFFF"
                }
            }
        });

    } else if (name === "highContrast"){
        return createMuiTheme({
            ...baseTheme,
            palette: {
                type: "dark",
        
                primary: {
                    main: "#000000",
                    contrastText: "#FFFFFF"
                },
        
                secondary: {
                    main: "#000000",
                    contrastText: "#FFFFFF"
                },

                text: {
                    primary: "#FFFFFF",
                    secondary: "#FFFFFF"
                },

                // background: {
                //     default: "#000000"
                // },
        
                speakMessages: {
                    main: "#212529",
                    contrastText: "#FFFFFF"
                },
        
                listenMessages: {
                    main: "#212529",
                    contrastText: "#FFFFFF"
                },

                defaultColor: {
                    main: "#000000"
                },

                primaryButton: {
                    main: "#000000",
                    hover: "#FFFFFF",
                    text: "#FFFFFF",
                    border: "#FFFFFF",
                    textHover: "#000000",
                    borderHover: "#000000",
                },

                outlineButton: {
                    main: "#FFFFFF",
                    textHover: "#000000",
                },

                messagesList: {
                    main: "#000000",
                    border: "#FFFFFF"
                },

                playBtn: {
                    contrastText: "#FFFFFF"
                },

                inputText: {
                    main: "#000000",
                    contrastText: "#FFFFFF"
                },

                menuButton: {
                    main: "#000000",
                    border: "#FFFFFF",
                },

                drawer: {
                    main: "#212529"
                },

                contrastThreshold: 7,
                tonalOffset: 0
            }
        });

    } else if (name === "sepia") {
        return createMuiTheme({
            ...baseTheme,
            palette: {
                type: "light",
        
                primary: {
                    main: "#ffebcd",
                    contrastText: "#000000"
                },
        
                secondary: {
                    main: "#ffebcd",
                    contrastText: "#000000"
                },

                background: {
                    paper: "#ffebcd",
                    default: "#ffebcd"
                },

                text: {
                    primary: "#212529",
                    secondary: "#343A40"
                },

                // action: {
                //     focus: "#000000",
                //     hover: "#000000",
                //     active: "#000000",
                //     selected: "#000000"
                // },
        
                speakMessages: {
                    main: "#96CCD2",
                    contrastText: "#212529"
                },
        
                listenMessages: {
                    main: "#DEE2E6",
                    contrastText: "#212529"
                },

                defaultColor: {
                    main: "#ffebcd"
                },
                
                primaryButton: {
                    main: "#495057",
                    hover: "#343A40",
                    text: "#FFFFFF",
                    border: "#495057",
                    textHover: "#FFFFFF",
                    borderHover: "#343A40",
                },

                outlineButton: {
                    main: "#343A40",
                    textHover: "#FFFFFF",
                },

                messagesList: {
                    main: "#ffebcd",
                    border: "#ADB5BD"
                },

                playBtn: {
                    contrastText: "#212529"
                },

                inputText: {
                    main: "#ffebcd",
                    contrastText: "#343A40"
                },

                menuButton: {
                    main: "#E6F3F6",
                    border: "#035155",
                },

                drawer: {
                    main: "#ffebcd"
                },
        
                contrastThreshold: 7,
                tonalOffset: 0
            }
        });
    }
}
