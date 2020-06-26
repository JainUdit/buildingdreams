import React, { ReactElement } from 'react';
import { StyledHeader } from './Style';
import { Grid, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

export const Header = (): ReactElement => {
    return (
        <StyledHeader>
            <Grid container item className="topFace" wrap="nowrap" justify="flex-start" alignItems="center">
                <span>Thakarji</span>
            </Grid>
            <Grid container item direction="row" className="midFace" wrap="nowrap" justify="center" alignItems="center">
                <Grid container item direction="row" className="search" wrap="nowrap">
                    <div className="searchIcon"><SearchIcon /></div>
                    <InputBase placeholder="Search" />
                </Grid>
            </Grid>
        </StyledHeader>
    )
}