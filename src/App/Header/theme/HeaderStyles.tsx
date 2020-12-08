import { createStyles, fade, makeStyles } from "@material-ui/core";
import RootTheme from "../../../theme/RootTheme";

const HeaderStyles = makeStyles(() =>
    createStyles({
        grow: {
            flexGrow: 1,
        },
        homeButton: {
            '&:forcus > span': {
                color: RootTheme.palette.common.white
            },
            '&:hover > span': {
                color: RootTheme.palette.common.white
            },
            marginRight: RootTheme.spacing(2),
        },
        title: {
            display: 'none',
            [RootTheme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
        search: {
            position: 'relative',
            borderRadius: RootTheme.shape.borderRadius,
            backgroundColor: fade(RootTheme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(RootTheme.palette.common.white, 0.25),
            },
            marginRight: RootTheme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [RootTheme.breakpoints.up('sm')]: {
                marginLeft: RootTheme.spacing(3),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: RootTheme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: RootTheme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${RootTheme.spacing(4)}px)`,
            transition: RootTheme.transitions.create('width'),
            width: '100%',
            [RootTheme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
        sectionDesktop: {
            display: 'none',
            [RootTheme.breakpoints.up('md')]: {
                display: 'flex',
            },
        },
        sectionMobile: {
            display: 'flex',
            [RootTheme.breakpoints.up('md')]: {
                display: 'none',
            },
        },
    }),
);
export default HeaderStyles;