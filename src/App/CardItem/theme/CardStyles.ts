import { createStyles, makeStyles } from "@material-ui/core";
import RootTheme from "../../../theme/RootTheme";
const CardStyles = (makeStyles(() =>
    createStyles({
        root: {
            width: "100%",
        },
        media: {
            height: 0,
            paddingTop: '56.25%',
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: RootTheme.transitions.create('transform', {
                duration: RootTheme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: RootTheme.palette.error.dark,
            color: RootTheme.palette.common.white
        },
    }),
));
export default CardStyles;