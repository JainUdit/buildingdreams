import React, { ReactElement } from 'react';
import { StyledOfferedServices, ArchitectIcon, ContractorIcon, ElectricianIcon, CarpenterIcon } from './Style';
import { Grid } from '@material-ui/core';

export const OfferedServices = (): ReactElement => {
    return (
        <>
            <StyledOfferedServices container item direction="column" wrap="nowrap" justify="space-around" alignItems="center">
                <Grid container direction="row" item wrap="nowrap" justify="center" alignItems="center">
                    <span className="servicesHeader">Services We Provide</span>
                </Grid>
                <Grid container md={12} direction="row" item wrap="nowrap" justify="space-evenly" alignItems="center">
                    <Grid container item direction="row" md={6} wrap="nowrap" justify="center" alignItems="center">
                        <ArchitectIcon />
                        <Grid item direction="column" alignItems="center" justify="center">
                            <Grid className="serviceLabels">Architect</Grid>
                            <Grid className="description">Person to fulfill your plans and designs need in construction of the building.</Grid>
                        </Grid>
                    </Grid>
                    <Grid container item direction="row" md={6} wrap="nowrap" justify="center" alignItems="center">
                        <ContractorIcon />
                        <Grid item direction="column" alignItems="center" justify="center">
                            <Grid className="serviceLabels">Contractor</Grid>
                            <Grid className="description">Person to provide materials, labor, equipment and services necessary for construction project.</Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/* <Grid container md={12} direction="row" item wrap="nowrap" justify="space-evenly" alignItems="center">
                    <Grid container item direction="row" md={4} wrap="nowrap" justify="center" alignItems="center">
                        <CarpenterIcon />
                        <span className="serviceLabels">Carpenter</span>
                    </Grid>
                    <Grid container item direction="row" md={4} wrap="nowrap" justify="center" alignItems="center">
                        <ElectricianIcon />
                        <span className="serviceLabels">Electrician</span>
                    </Grid>
                </Grid> */}
            </StyledOfferedServices>
        </>
    );
}