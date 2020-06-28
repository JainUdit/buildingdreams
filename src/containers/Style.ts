import styled from '@emotion/styled';
import { Grid, Button } from '@material-ui/core';
import background from '../images/Background.jpg';

export const StyledDaytona = styled(Grid)`
    height: 100%;
    width: 100%;
`

export const StyledHeader = styled('div')`
    background-image: url(${background}); 
    width: 100%;
    height: 500px;
    font-size: 18px;
    font-family: serif;

    .marginLeftRight {
        margin: 0px 10px;
        cursor: pointer;
    }

    .logo {
        font-family: "Lucida Console", Monaco, monospace;
        font-size: 20px;
    }

    .topFace {
        height: 50px;
    }

    .midFace {
        height: 400px;
    }

    .search {
        position: relative;
        border-radius: 15px;
        background-color: rgba(0,0,0, 0.4);
        margin-left: 0;
        width: 200px;
        cursor: pointer;
    }
    .searchIcon {
        padding: 10px;
        cursor: pointer;
    }
`

export const StyledButton = styled(Button)`
    text-transform: none !important;
    font-family: serif !important;
    font-size: 18px !important;
    &:hover {
        background-color: rgba(0,0,0,0) !important;
    }
`

export const StyledFooter = styled(Grid)`
    background-color: #F5F5F5;
    color: #333333;
    height: 50px;
    font-family: Georgia, serif;
    font-size: 14px;

    .companyName {
        font-family: "Lucida Console", Monaco, monospace;
        font-weight: 500;
        padding-left: 10px;
    }
`