import { createStyles, makeStyles } from "@material-ui/core";
import RootTheme from "../../theme/RootTheme";
const AppStyles = (makeStyles(() =>
    createStyles({
        root: {
            [RootTheme.breakpoints.down('xs')]: {
                paddingTop: `3.5em`,
            },
            [RootTheme.breakpoints.up('sm')]: {
                paddingTop: `4em`,
            },
            height: "100%",
            backgroundColor: RootTheme.palette.common.black
        },
        boxContainer: {
            height: "100%",
            width: "100%",
            overflowY: "auto",
            paddingTop: RootTheme.spacing(4),
            paddingBottom: RootTheme.spacing(4),
        },
    })
));
export default AppStyles;