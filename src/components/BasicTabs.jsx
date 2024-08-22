import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import useStore from "../store/zustandStore";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [selectedWidgets, setSelectedWidgets] = React.useState({});

  const categories = useStore((state) => state.dashboard.categories);
  const addWidget = useStore((state) => state.addWidget);
  const removeWidget = useStore((state) => state.removeWidget);

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
    Object.keys(selectedWidgets).forEach((categoryId) => {
      categories
        .find((category) => category.id === categoryId)
        .widgets.forEach((widget) => {
          if (selectedWidgets[categoryId][widget.id]) {
            addWidget(categoryId, widget);
          } else {
            removeWidget(categoryId, widget.id);
          }
        });
    });
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
              {...a11yProps(index)}
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
        <CustomTabPanel key={category.id} value={value} index={index}>
          {renderWidgets(category.id)}
        </CustomTabPanel>
      ))}
    </Box>
  );
}
