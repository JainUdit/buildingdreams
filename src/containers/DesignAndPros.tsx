import React, { ReactElement } from "react";
import { Grid } from "@material-ui/core";
import { ArchitectImage, StyledDesignAndPros, DesignImage } from "./Style";

export const DesignAndPros = (): ReactElement => {
    return (
        <>
            <StyledDesignAndPros container item wrap="nowrap" justify="space-around" alignItems="center">
                <Grid container direction="column" xs={6} md={6} item wrap="nowrap" justify="center" alignItems="center">
                    <DesignImage className="pointer"/>
                    <span className="pointer">Go for Design</span>
                </Grid>
                <Grid container direction="column" xs={6} md={6} item wrap="nowrap" justify="center" alignItems="center">
                    <ArchitectImage className="pointer"/>
                    <span className="pointer">Have a Look for Pro's</span>
                </Grid>
            </StyledDesignAndPros>

        </>
    )
}