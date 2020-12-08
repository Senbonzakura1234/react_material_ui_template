import React from 'react';
import { AppBar, Button, IconButton, Switch as SwitchInput, Toolbar, Typography } from '@material-ui/core';
import { Home as HomeIcon } from '@material-ui/icons';
import HeaderStyles from './theme/HeaderStyles';
import MenuDesktop from './Menu/MenuDesktop';
import MenuMobile from './Menu/MenuMobile';
import SectionDesktop from './Section/SectionDesktop';
import SectionMobile from './Section/SectionMobile';
import SearchBox from './SearchBox/SearchBox';
import { Link } from 'react-router-dom';



const Header = () => {
    const classes = HeaderStyles(), [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null),
        [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl), isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);

    const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

    const handleMenuClose = () => { setAnchorEl(null); handleMobileMenuClose(); };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => setMobileMoreAnchorEl(event.currentTarget);

    const menuId = 'primary-search-account-menu', mobileMenuId = 'primary-search-account-menu-mobile';

    const renderMenu = (<MenuDesktop anchorEl={anchorEl} menuId={menuId}
        isMenuOpen={isMenuOpen} handleMenuClose={handleMenuClose} />);

    const renderMobileMenu = (<MenuMobile mobileMoreAnchorEl={mobileMoreAnchorEl}
        mobileMenuId={mobileMenuId} isMobileMenuOpen={isMobileMenuOpen}
        handleMobileMenuClose={handleMobileMenuClose}
        handleProfileMenuOpen={handleProfileMenuOpen} />);

    return (
        <div className={classes.grow}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton edge="start" className={classes.homeButton}
                        color="inherit" aria-label="Home" component={Link} to="/">
                        <HomeIcon />
                    </IconButton>
                    <Typography className={classes.title}
                        variant="h6" noWrap>
                        Material-UI
                    </Typography>
                    <SearchBox classes={classes} />
                    <div className={classes.grow} />
                    <SectionDesktop className={classes.sectionDesktop}
                        menuId={menuId} handleProfileMenuOpen={handleProfileMenuOpen} />
                    <SectionMobile className={classes.sectionMobile}
                        handleMobileMenuOpen={handleMobileMenuOpen}
                        mobileMenuId={mobileMenuId} />
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}

export default Header