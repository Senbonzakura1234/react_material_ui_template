import { Badge, IconButton } from '@material-ui/core';
import {
    AccountCircle, Mail as MailIcon,
    Notifications as NotificationsIcon
} from '@material-ui/icons';
import React from 'react';

interface SectionDesktopProp {
    className: string;
    menuId: string
    handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void
}

const SectionDesktop = (prop: SectionDesktopProp) => {
    return (
        <div className={prop.className}>
            <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="error">
                    <MailIcon />
                </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={17} color="error">
                    <NotificationsIcon />
                </Badge>
            </IconButton>
            <IconButton edge="end" aria-label="account of current user"
                aria-controls={prop.menuId} aria-haspopup="true" color="inherit"
                onClick={prop.handleProfileMenuOpen}>
                <AccountCircle />
            </IconButton>
        </div>
    );
};

export default SectionDesktop;