import React, { ReactElement, useState } from "react";
import { Dialog, DialogTitle, ListItem } from "@material-ui/core";
import { StyledButton } from "./Style";

export const HowItWorksPopUp = (): ReactElement => {
    const [open, setOpen] = useState<boolean>(false);

    const handleButtonClick = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            <StyledButton onClick={handleButtonClick} disableRipple>How It Works</StyledButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle id="dialogTitle">How It Works</DialogTitle>
                <ListItem>1. Select the work to be done.</ListItem>
                <ListItem>2. Search for matching professionals</ListItem>
                <ListItem>3. Problem Solved </ListItem>
            </Dialog>
        </>
    )
}