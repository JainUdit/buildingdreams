import React, { ReactElement } from 'react';
import { StyledHeader, StyledMenu, StyledMenuItem } from './Style';
import { Grid, InputBase, useMediaQuery, useTheme, IconButton, Fade } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import { HowItWorksPopUp } from './HowItWorksPopUp';

export const Header = (): ReactElement => {
    const theme = useTheme();
    const isXtraSmall = useMediaQuery(theme.breakpoints.down('xs'));

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);


    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const menu = (): ReactElement => {
        return (
            <>
                <IconButton className="marginLeftRight" onClick={handleMenuClick}>
                    <MenuIcon />
                </IconButton>
                <StyledMenu
                    id="fade-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                    anchorOrigin={{ horizontal: "right", vertical: "top" }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                >
                    <StyledMenuItem onClick={handleClose}><HowItWorksPopUp /></StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}><span className="fontFamily marginLeftRight">Join As Pro</span></StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}><span className="fontFamily marginLeftRight">Sign In</span></StyledMenuItem>
                </StyledMenu>
            </>
        );
    }

    return (
        <StyledHeader>
            <Grid container item className="topFace" wrap="nowrap" justify="space-between" alignItems="center">
                <Grid container item md={3} wrap="nowrap" justify="flex-start" alignItems="center">
                    <span className="logo marginLeftRight">Thakarji</span>
                </Grid>
                {isXtraSmall
                    ?
                    <Grid container item md={9} wrap="nowrap" justify="flex-end" alignItems="center">
                        {menu()}
                    </Grid>
                    :
                    <Grid container item md={9} wrap="nowrap" justify="flex-end" alignItems="center">
                        <Grid container item className="paddingRight20" md={6} wrap="nowrap" justify="space-between" alignItems="center">
                            <HowItWorksPopUp />
                            <span className="marginLeftRight">Join As Pro</span>
                            <span className="marginLeftRight">Sign In</span>
                        </Grid>
                    </Grid>
                }
            </Grid>
            <Grid container item direction="row" className="midFace" wrap="nowrap" justify="center" alignItems="center">
                <Grid container item direction="row" className="search" wrap="nowrap">
                    <div className="searchIcon"><SearchIcon /></div>
                    <InputBase placeholder="Search" className="inputBase" />
                </Grid>
            </Grid>
        </StyledHeader>
    );
};