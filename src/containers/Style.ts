import styled from '@emotion/styled';
import { Grid } from '@material-ui/core';
import background from '../images/Background.jpg';

export const StyledDaytona = styled(Grid)`
    height: 100%;
    width: 100%;
`

export const StyledHeader = styled('div')`
    background-image: url(${background}); 
    width: 100%;
    height: 400px;
    font-size: 16px;
    font-family: "Lucida Console", Monaco, monospace;

    .topFace {
        height: 50px;
        margin: 10px;
    }

    .midFace {
        height: 300px;
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