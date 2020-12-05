import { Menu, MenuItem } from '@material-ui/core';
import React from 'react';

interface MenuDesktopProp {
    anchorEl: HTMLElement | null;
    menuId: string;
    isMenuOpen: boolean;
    handleMenuClose: () => void;
}

const MenuDesktop = (prop: MenuDesktopProp) => {
    return (
        <Menu
            anchorEl={prop.anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={prop.menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={prop.isMenuOpen}
            onClose={prop.handleMenuClose}>
            <MenuItem onClick={prop.handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={prop.handleMenuClose}>My account</MenuItem>
        </Menu>
    );
};

export default MenuDesktop;