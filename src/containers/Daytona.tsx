import React from 'react';
import { Footer } from './Footer';
import { StyledDaytona } from './Style';
import { Header } from './Header';

const Daytona = () => {
    return (
        <StyledDaytona container item direction="column" alignItems="center" justify="space-between">
            <Header />
            <Footer />
        </StyledDaytona>
    )
}

export default Daytona;
