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
            height: "100%"
        },
        card: {
            height: "100%",
            width: "100%",
            overflowY: "auto",
        },
        box: {
            height: "300em",
            width: "100%",
        }
    }),
));
export default AppStyles;