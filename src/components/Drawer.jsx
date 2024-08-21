import React from "react";
import { Drawer, Typography, Button, Box } from "@mui/material";
import BasicTabs from "./BasicTabs";
import useStore from "../store/zustandStore";
// import ColorTabs from "./BasicTabs";

const DrawerComponent = ({ isOpen, onClose }) => {

    const handleDrawerClose = () => {
        onClose(); // Call the onClose function passed as props
    };

    const handleConfirm = () => {
        // Add your confirm action logic here
        console.log("Confirm button clicked");
        handleDrawerClose(); // Close the drawer on confirm
    };

    return (
        <Drawer
            anchor="right"
            open={isOpen} // Use isOpen from props
            onClose={handleDrawerClose}
            sx={{
                width: 400, // Set the desired width in pixels
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: 400, // Match width of drawer content
                    boxSizing: "border-box",
                    display: 'flex',
                    flexDirection: 'column',
                },
            }}
        >
            {/* Content of the drawer */}
            <div className="p-3 bg-blue-900 flex justify-between items-center">
                {/* Header of the drawer */}
                <Typography variant="h6" gutterBottom className="text-white">
                    Add Widget
                </Typography>
                <button onClick={handleDrawerClose} className="text-white bg-transparent border-none cursor-pointer">
                    ❌
                </button>
            </div>
            <div className="p-3 flex-grow">
                {/* Your drawer content here */}
                <h4 className="p-2 text-sm font-semibold">Personalize your dashboard by adding the following widget.</h4>
                <div className="ml-2">
                    <BasicTabs />
                </div>
            </div>
            <Box sx={{ p: 2,display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="outlined" color="primary" onClick={handleDrawerClose} sx={{ mr: 1 }}>
                    Cancel
                </Button>
                {/* <Button variant="contained" color="primary" onClick={handleConfirm}>
                    Confirm
                </Button> */}
                <Button variant="contained" color="primary" onClick={() => {
                    BasicTabs.handleConfirm(); // Call the confirm function
                    handleDrawerClose(); // Close the drawer
                }}>
                    Confirm
                </Button>
            </Box>
        </Drawer>
    );
};

export default DrawerComponent;


// Above Code working
