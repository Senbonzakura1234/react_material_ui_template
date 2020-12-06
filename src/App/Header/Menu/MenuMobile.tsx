import { Badge, IconButton, Menu, MenuItem } from '@material-ui/core';
import {
    AccountCircle, Mail as MailIcon,
    Notifications as NotificationsIcon,
} from "@material-ui/icons";
import React from 'react';

interface MenuMobileProp {
    mobileMoreAnchorEl: HTMLElement | null;
    mobileMenuId: string;
    isMobileMenuOpen: boolean;
    handleMobileMenuClose: () => void;
    handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
}

const MenuMobile = (prop: MenuMobileProp) => {
    return (
        <Menu
            anchorEl={prop.mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            getContentAnchorEl={null}
            id={prop.mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={prop.isMobileMenuOpen}
            onClose={prop.handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={11} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={prop.handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );
};

export default MenuMobile;