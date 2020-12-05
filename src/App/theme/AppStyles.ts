import { createStyles, makeStyles, Theme } from "@material-ui/core";
const AppStyles = (makeStyles((theme: Theme) =>
    createStyles({
        root: {
            paddingTop: `64px`,
            height: "100%" 
        },
        card: {
            height: "100%",
            width: "100%",
            overflowY: "auto",
        },
        box: {
            height: "3000px",
            width: "100%",
        }
    }),
));
export default AppStyles;