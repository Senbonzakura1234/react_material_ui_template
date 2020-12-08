import { createStyles, makeStyles, Theme } from "@material-ui/core";
const AppStyles = (makeStyles((theme: Theme) =>
    createStyles({
        root: {
            [theme.breakpoints.down('xs')]: {
                paddingTop: `3.5em`,
            },
            [theme.breakpoints.up('sm')]: {
                paddingTop: `4em`,
            },
            height: "100%",
            background: 
            // theme.palette.type === "dark" ?
                theme.palette.common.black 
                // theme.palette.common.white
        },
        boxContainer: {
            height: "100%",
            width: "100%",
            overflowY: "auto",
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
        },
    }),
));
export default AppStyles;