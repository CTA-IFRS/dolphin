
import React, { useState } from 'react';

import { Box, Paper } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";

import DolphinAppBar from "./components/DolphinAppBar";
import DolphinContent from "./components/DolphinContent";
import { useTalkerMonitor } from "./components/hooks/Hooks";
import { getTheme } from "./themes/Themes";


function App() {
    const talkerMonitor = useTalkerMonitor(false, true);
    const [themeName, setTheme] = useState("commom");

    const themeUpdater = {
        themeName,
        setTheme
    };

    return (
        <MuiThemeProvider theme={getTheme(themeName)}>
            <Paper elevation={0} square={true}>
                <DolphinAppBar talkerMonitor={talkerMonitor} 
                                themeUpdater={themeUpdater} />
                <Box style={{marginTop: "3.5em"}}>
                    <DolphinContent talkerMonitor={talkerMonitor} />
                </Box>
            </Paper>
        </MuiThemeProvider>
    );
}

export default App;
