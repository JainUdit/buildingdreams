import React, { ReactElement } from 'react';
import { StyledHeader } from './Style';
import { Grid, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { HowItWorksPopUp } from './HowItWorksPopUp';

export const Header = (): ReactElement => {
    return (
        <StyledHeader>
            <Grid container item className="topFace" wrap="nowrap" justify="space-between" alignItems="center">
                <Grid container item md={3} wrap="nowrap" justify="flex-start" alignItems="center">
                    <span className="logo marginLeftRight">Thakarji</span>
                </Grid>
                <Grid container item md={9} wrap="nowrap" justify="flex-end" alignItems="center">
                    <Grid container item md={6} wrap="nowrap" justify="space-between" alignItems="center">
                        <HowItWorksPopUp />
                        <span className="marginLeftRight">Join As Pro</span>
                        <span className="marginLeftRight">Sign In</span>
                    </Grid>
                </Grid>
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