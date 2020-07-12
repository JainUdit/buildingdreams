import styled from '@emotion/styled';
import { Grid, Button, Menu, MenuItem } from '@material-ui/core';
import background from '../images/Background.jpg';
import pro from '../images/pro.png';
import design from '../images/camera.png';
import architectImage from '../images/architectImage.jpg';
import contractorImage from '../images/contractorImage.jpg';
import electricianIcon from '../images/electricianIcon.png';
import carpenterIcon from '../images/carpenterIcon.png';

export const StyledDaytona = styled(Grid)`
    height: 100%;
    width: 100%;
`

export const StyledHeader = styled('div')`
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 25, 0.8)), url(${background});
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
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
        position: fixed;
        z-index:100;
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
        width: 350px;
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
    background-color: rgb(150, 150, 150);
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
    background-color: rgba(41, 79, 97, 0.6);
    font-size: 14px;
    font-family: "Lucida Console"; 

    .pointer {
        cursor: pointer;
    }
`);

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

export const StyledOfferedServices = styled(Grid)(`
    background-color: #F5F5F5;
    height: 250px;
    .servicesHeader {
        margin: 20px;
        font-size: 22px;
        font-weight: bolder;
        font-family: "sqmarket", "Helvetica", sans-serif !important;
        color: grey;
    }

    .serviceLabels {
        font-famliy: "Helvetica";
        font-size: 18px;
        cursor: pointer;
        margin: 10px 25px;
    }

    .description {
        font-size: 14px;
        margin: 10px 25px;
    }
`)

export const ProsImage = styled(Grid)`
    background-image: url(${pro}); 
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    border: 0px;
    margin: 15px;
    height: 100px;
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

export const ArchitectIcon = styled(Grid)`
    background-image: url(${architectImage}); 
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    border: 0px;
    margin: 25px;
    height: 150px;
    width: 150px;
    cursor: pointer;
`

export const ContractorIcon = styled(Grid)`
    background-image: url(${contractorImage}); 
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    border: 0px;
    margin: 25px;
    height: 150px;
    width: 150px;
    cursor: pointer;
`

export const ElectricianIcon = styled(Grid)`
    background-image: url(${electricianIcon}); 
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    border: 0px;
    margin: 25px;
    height: 100px;
    width: 100px;
    cursor: pointer;
`

export const CarpenterIcon = styled(Grid)`
    background-image: url(${carpenterIcon}); 
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    border: 0px;
    margin: 25px;
    height: 100px;
    width: 100px;
    cursor: pointer;
`