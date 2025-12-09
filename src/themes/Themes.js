
import { createTheme } from "@material-ui/core/styles";

const baseTheme = {
  typography: {
    fontFamily: "Nunito",
  }
};

export function getTheme(name) {
    if (name === "commom") {
        return createTheme({
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
                    scondary: "#6C757D"
                },

                speakMessages: {
                    main: "#96CCD2",
                    contrastText: "#212529"
                },
        
                listenMessages: {
                    main: "#DEE2E6",
                    contrastText: "#212529"
                },

                talkerActive: {
                    main: "#212529"
                },

                talkerNotActive: {
                    main: "#212529"
                },
            }
        });

    } else if (name === "highContrast"){
        return createTheme({
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
                    scondary: "#FFFFFF"
                },

                // background: {
                //     default: "#000000"
                // },
        
                speakMessages: {
                    main: "#025A64",
                    contrastText: "#FFFFFF"
                },
        
                listenMessages: {
                    main: "#005D85",
                    contrastText: "#FFFFFF"
                },

                talkerActive: {
                    main: "#00FF00"
                },

                talkerNotActive: {
                    main: "#FFFFFF"
                },

                contrastThreshold: 7,
                tonalOffset: 0
            }
        });

    } else if (name === "sepia") {
        return createTheme({
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
                    primary: "#000000",
                    scondary: "#000000"
                },

                // action: {
                //     focus: "#000000",
                //     hover: "#000000",
                //     active: "#000000",
                //     selected: "#000000"
                // },
        
                speakMessages: {
                    main: "#98DAE1",
                    contrastText: "#FFFFFF"
                },
        
                listenMessages: {
                    main: "#52A7CB",
                    contrastText: "#FFFFFF"
                },

                talkerActive: {
                    main: "#00AA00"
                },

                talkerNotActive: {
                    main: "#000000"
                },
        
                contrastThreshold: 7,
                tonalOffset: 0
            }
        });
    }
}
