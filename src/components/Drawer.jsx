import React, { useState, useEffect } from "react";
import { Drawer, Typography, Button, Box, Tabs, Tab } from "@mui/material";
import useStore from "../store/zustandStore";

const DrawerComponent = ({ isOpen, onClose }) => {
  const [value, setValue] = useState(0);
  const [selectedWidgets, setSelectedWidgets] = useState({});

  const categories = useStore((state) => state.dashboard.categories);
  const addWidget = useStore((state) => state.addWidget);
  const removeWidget = useStore((state) => state.removeWidget);

  useEffect(() => {
    const initialSelectedWidgets = {};
    categories.forEach((category) => {
      initialSelectedWidgets[category.id] = {};
      category.widgets.forEach((widget) => {
        initialSelectedWidgets[category.id][widget.id] = true;
      });
    });
    setSelectedWidgets(initialSelectedWidgets);
  }, [categories]);

  const handleDrawerClose = () => {
    onClose();
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCheckboxChange = (categoryId, widgetId) => {
    setSelectedWidgets((prevState) => ({
      ...prevState,
      [categoryId]: {
        ...prevState[categoryId],
        [widgetId]: !prevState[categoryId]?.[widgetId],
      },
    }));
  };

  const handleConfirm = () => {
    const categoryId = categories[value].id;
    const category = categories.find((category) => category.id === categoryId);

    category.widgets.forEach((widget) => {
      if (selectedWidgets[categoryId]?.[widget.id]) {
        // addWidget(categoryId, widget);    ---> [does not add extra widgets]  for remembering purposes
      } else {
        removeWidget(categoryId, widget.id); //---> removes the widget
      }
    });

    handleDrawerClose();
  };

  const renderWidgets = (categoryId) => {
    return categories
      .find((category) => category.id === categoryId)
      .widgets.map((widget) => (
        <div
          key={widget.id}
          className="flex items-center border border-grey rounded-md p-2 mb-2"
        >
          <input
            type="checkbox"
            checked={selectedWidgets[categoryId]?.[widget.id] || false}
            onChange={() => handleCheckboxChange(categoryId, widget.id)}
            className="w-6 h-6"
          />
          <h4 className="ml-2 text-black font-bold text-lg">{widget.name}</h4>
        </div>
      ));
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
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: "black",
                },
              }}
            >
              {categories.map((category, index) => (
                <Tab
                  key={category.name}
                  label={category.id}
                  sx={{
                    color: "gray",
                    "&.Mui-selected": {
                      color: "black",
                    },
                  }}
                />
              ))}
            </Tabs>
          </Box>
          {categories.map((category, index) => (
            <div
              role="tabpanel"
              hidden={value !== index}
              id={`simple-tabpanel-${index}`}
              aria-labelledby={`simple-tab-${index}`}
              key={category.id}
            >
              {value === index && (
                <Box sx={{ p: 3 }}>{renderWidgets(category.id)}</Box>
              )}
            </div>
          ))}
        </Box>
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
        <Button variant="contained" color="primary" onClick={handleConfirm}>
          Confirm
        </Button>
      </Box>
    </Drawer>
  );
};

export default DrawerComponent;
