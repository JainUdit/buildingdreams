import styled from '@emotion/styled';
import { Grid, Button, Menu, MenuItem } from '@material-ui/core';
import background from '../images/Background.jpg';
import architect from '../images/architect.png';
import design from '../images/camera.png';

export const StyledDaytona = styled(Grid)`
    height: 100%;
    width: 100%;
`

export const StyledHeader = styled('div')`
    background-image: url(${background}); 
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #F5F5F5;
    position: relative;

    width: 100%;
    height: 500px;
    font-size: 18px;
    font-family: serif;

    .marginLeftRight {
        margin: 0px 10px;
    }

    .paddingRight20 {
        padding-right: 20px;
    }

    .logo {
        font-family: "Lucida Console", Monaco, monospace;
        font-size: 20px;
    }

    .topFace {
        height: 50px;
        background-color: rgba(0,0,0, 0.2);
    }

    .midFace {
        height: 400px;
        text-align: center;
        position: absolute;
    }

    .search {
        position: relative;
        border-radius: 15px;
        background-color: rgba(0,0,0, 0.4);
        color: #F5F5F5;
        margin-left: 0;
        width: 200px;
        cursor: pointer;
    }

    .inputBase {
        color: #F5F5F5;
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

export const StyledDesignAndPros = styled(Grid)(`
    width: 100%;
    height: 200px;
    background-color: #294F61;
    font-size: 14px;
    font-family: "Lucida Console"; 

    .pointer {
        cursor: pointer;
    }
`);

export const ArchitectImage = styled(Grid)`
    background-image: url(${architect}); 
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    border: 0px;
    margin: 15px;
    height:100px;
    width: 100px;
`

export const DesignImage = styled(Grid)`
    background-image: url(${design}); 
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    border: 0px;
    margin: 25px;
    height: 80px;
    width: 80px;
`

export const StyledMenu = styled(Menu)(`

    & .MuiList-root {
        background-color: #294F61;
    }

    .marginLeftRight {
        margin: 0px 10px;
    }
`)

export const StyledMenuItem = styled(MenuItem)(`

    & .MuiButton-label {
        font-size: 16px;
    }
    .fontFamily {
        font-family: serif;
        font-size: 16px;
    }

    .marginLeftRight {
        margin: 0px 10px;
    }
`)