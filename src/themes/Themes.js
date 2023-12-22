
import { createMuiTheme } from "@material-ui/core/styles";

export function getTheme(name) {
    if (name === "commom") {
        return createMuiTheme({
            palette: {
                type: "light",

                primary: {
                    main: "#006064"
                },

                text: {
                    primary: "#000000",
                    scondary: "#000000"
                },

                speakMessages: {
                    main: "#00ABBD",
                    contrastText: "#000000"
                },
        
                listenMessages: {
                    main: "#00A4EB",
                    contrastText: "#FFFFFF"
                },

                talkerActive: {
                    main: "#00FF00"
                },

                talkerNotActive: {
                    main: "#FFFFFF"
                },

                dolphinLogoColor: {
                    color: 'white'
                }
            }
        });

    } else if (name === "highContrast"){
        return createMuiTheme({
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

                dolphinLogoColor: {
                    color: 'white'
                },
        

                contrastThreshold: 7,
                tonalOffset: 0
            }
        });

    } else if (name === "sepia") {
        return createMuiTheme({
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

                dolphinLogoColor: {
                    color: 'black'
                },
        
                contrastThreshold: 7,
                tonalOffset: 0
            }
        });
    }
}
