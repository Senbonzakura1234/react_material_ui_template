import { IconButton } from '@material-ui/core';
import { More as MoreIcon } from '@material-ui/icons';
import React from 'react';

interface SectionMobileProp {
    className: string;
    mobileMenuId: string;
    handleMobileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
}

const SectionMobile = (prop: SectionMobileProp) => {
    return (
        <div className={prop.className}>
            <IconButton
                aria-label="show more"
                aria-controls={prop.mobileMenuId}
                aria-haspopup="true"
                onClick={prop.handleMobileMenuOpen}
                color="inherit"
            >
                <MoreIcon />
            </IconButton>
        </div>
    );
};

export default SectionMobile;