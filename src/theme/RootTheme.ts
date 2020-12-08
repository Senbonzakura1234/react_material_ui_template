import { createMuiTheme } from "@material-ui/core";

const RootTheme = createMuiTheme({
    palette: {
        primary: {
            light: "#9c4dcc",
            main: "#6a1b9a",
            dark: "#38006b",
            contrastText: "#ffffff"
        },
        secondary: {
            light: "#ffc4ff",
            main: "#ce93d8",
            dark: "#9c64a6",
            contrastText: "#000000"
        },
        success: {
            light: "#5efc82",
            main: "#00c853",
            dark: "#009624",
            contrastText: "#ffffff"
        },
        info: {
            light: "#73e8ff",
            main: "#29b6f6",
            dark: "#0086c3",
            contrastText: "#ffffff"
        },
        error: {
            light: "#f05545",
            main: "#b71c1c",
            dark: "#7f0000",
            contrastText: "#ffffff"
        },
        warning: {
            light: "#ffd149",
            main: "#ffa000",
            dark: "#c67100",
            contrastText: "#000000"
        }
    },
});

export default RootTheme