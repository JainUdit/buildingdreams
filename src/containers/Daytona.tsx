import React from 'react';
import { Footer } from './Footer';
import { StyledDaytona } from './Style';
import { Header } from './Header';
import { DesignAndPros } from './DesignAndPros';
import { OfferedServices } from './OfferedServices';

const Daytona = () => {
    return (
        <StyledDaytona container item direction="column" alignItems="center" justify="space-between">
            <Header />
            <DesignAndPros />
            <OfferedServices />
            <Footer />
        </StyledDaytona>
    )
}

export default Daytona;
