import React from 'react';
import { StyledFooter } from './Style';

export const Footer = () => {
    return (
        <StyledFooter container item wrap="nowrap" justify="center" alignItems="center">
            <span>Powered By</span>
            <span className="companyName">Thakarji.com</span>
        </StyledFooter>
    );
}