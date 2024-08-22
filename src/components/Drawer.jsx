import React from "react";
import { Drawer, Typography, Button, Box } from "@mui/material";
import BasicTabs from "./BasicTabs";

const DrawerComponent = ({ isOpen, onClose }) => {
  const handleDrawerClose = () => {
    onClose();
  };

  const handleConfirm = () => {
    console.log("Confirm button clicked");
    handleDrawerClose();
  };

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={handleDrawerClose}
      sx={{
        width: 400,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 400,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <div className="p-3 bg-blue-900 flex justify-between items-center">
        <Typography variant="h6" gutterBottom className="text-white">
          Add Widget
        </Typography>
        <button
          onClick={handleDrawerClose}
          className="text-white bg-transparent border-none cursor-pointer"
        >
          ❌
        </button>
      </div>
      <div className="p-3 flex-grow">
        <h4 className="p-2 text-sm font-semibold">
          Personalize your dashboard by adding the following widget.
        </h4>
        <div className="ml-2">
          <BasicTabs />
        </div>
      </div>
      <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleDrawerClose}
          sx={{ mr: 1 }}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            BasicTabs.handleConfirm();
            handleDrawerClose();
          }}
        >
          Confirm
        </Button>
      </Box>
    </Drawer>
  );
};

export default DrawerComponent;
