import { createStyles, makeStyles, Theme } from "@material-ui/core";
const CardStyles = (makeStyles((theme: Theme) =>
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
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: theme.palette.error.dark,
            color: theme.palette.common.white
        },
    }),
));
export default CardStyles;