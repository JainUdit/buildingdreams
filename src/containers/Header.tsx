import React, { ReactElement } from 'react';
import { StyledHeader } from './Style';
import { Grid } from '@material-ui/core';

export const Header = (): ReactElement => {
    return (
        <StyledHeader>
            <Grid container item className="topFace" wrap="nowrap" justify="flex-start" alignItems="center">
                <span>Thakarji</span>
            </Grid>
            <Grid container item className="midFace" wrap="nowrap" justify="center" alignItems="center">
                <span>U can do it!!!</span>
            </Grid>
        </StyledHeader>
    )
}