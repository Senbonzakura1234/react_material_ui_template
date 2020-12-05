import React from 'react';
import { Search as SearchIcon } from '@material-ui/icons';
import { InputBase } from '@material-ui/core';

interface SearchBoxProp {
    classes: {
        search: string; searchIcon: string;
        inputRoot: string; inputInput: string;
    };

}

const SearchBox = (prop: SearchBoxProp) => {
    return (
        <div className={prop.classes.search}>
            <div className={prop.classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase placeholder="Search…"
                classes={{ root: prop.classes.inputRoot,
                    input: prop.classes.inputInput }}
                inputProps={{ 'aria-label': 'search' }}
            />
        </div>
    );
};

export default SearchBox;