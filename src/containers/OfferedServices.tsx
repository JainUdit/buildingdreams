import React, { ReactElement } from 'react';
import { StyledOfferedServices, ArchitectIcon, ContractorIcon, ElectricianIcon } from './Style';
import { Grid } from '@material-ui/core';

export const OfferedServices = (): ReactElement => {
    return (
        <>
            <StyledOfferedServices container item direction="column" wrap="nowrap" justify="space-around" alignItems="center">
                <Grid container direction="row" item wrap="nowrap" justify="center" alignItems="center">
                    <span className="servicesHeader">Services We Provide</span>
                </Grid>
                <Grid container md={12} direction="row" item wrap="nowrap" justify="space-evenly" alignItems="center">
                    <Grid container item direction="column" md={4} wrap="nowrap" justify="center" alignItems="center">
                        <ArchitectIcon />
                        <span className="serviceLabels">Architect</span>
                    </Grid>
                    <Grid container item direction="column" md={4} wrap="nowrap" justify="center" alignItems="center">
                        <ContractorIcon />
                        <span className="serviceLabels">Contractor</span>
                    </Grid>
                    <Grid container item direction="column" md={4} wrap="nowrap" justify="center" alignItems="center">
                        <ElectricianIcon />
                        <span className="serviceLabels">Electrician</span>
                    </Grid>

                </Grid>
            </StyledOfferedServices>
        </>
    );
}