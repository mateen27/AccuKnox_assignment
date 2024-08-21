// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';

// function CustomTabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
//     </div>
//   );
// }

// CustomTabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

// export default function BasicTabs() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           aria-label="basic tabs example"
//           sx={{
//             '& .MuiTabs-indicator': {
//               backgroundColor: 'black', // Indicator color
//             },
//           }}
//         >
//           <Tab
//             label="CSPM"
//             {...a11yProps(0)}
//             sx={{
//               color: 'gray',
//               '&.Mui-selected': {
//                 color: 'black', // Color when selected
//               },
//             }}
//           />
//           <Tab
//             label="CWPP"
//             {...a11yProps(1)}
//             sx={{
//               color: 'gray',
//               '&.Mui-selected': {
//                 color: 'black', // Color when selected
//               },
//             }}
//           />
//           <Tab
//             label="Image"
//             {...a11yProps(2)}
//             sx={{
//               color: 'gray',
//               '&.Mui-selected': {
//                 color: 'black', // Color when selected
//               },
//             }}
//           />
//         </Tabs>
//       </Box>
//       <CustomTabPanel value={value} index={0}>
//   <div className="flex items-center border border-black p-2 mb-2">
//     <input type="checkbox" checked className="w-6 h-6" />
//     <h4 className="ml-2 text-red-600 font-bold text-lg">Widget 1</h4>
//   </div>
//   <div className="flex items-center border border-black p-2">
//     <input type="checkbox" checked className="w-6 h-6" />
//     <h4 className="ml-2 text-red-600 font-bold text-lg">Widget 2</h4>
//   </div>
// </CustomTabPanel>

//       <CustomTabPanel value={value} index={1}>
//       <div className="flex items-center border border-black p-2 mb-2">
//     <input type="checkbox" checked className="w-6 h-6" />
//     <h4 className="ml-2 text-red-600 font-bold text-lg">Widget 3</h4>
//   </div>
//   <div className="flex items-center border border-black p-2">
//     <input type="checkbox" checked className="w-6 h-6" />
//     <h4 className="ml-2 text-red-600 font-bold text-lg">Widget 4</h4>
//   </div>
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={2}>
//       <div className="flex items-center border border-black p-2 mb-2">
//     <input type="checkbox" checked className="w-6 h-6" />
//     <h4 className="ml-2 text-red-600 font-bold text-lg">Widget 5</h4>
//   </div>
//       </CustomTabPanel>
//     </Box>
//   );
// }




// import React from 'react';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';
// import useStore from '../store/zustandStore'; // Import your zustand store

// function CustomTabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
//     </div>
//   );
// }

// CustomTabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

// export default function BasicTabs() {
//   const [value, setValue] = React.useState(0);
//   const categories = useStore((state) => state.dashboard.categories); // Retrieve categories from store

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   // Define tab labels and corresponding categories
//   const tabs = [
//     { label: 'CSPM', category: 'CSPM Executive Dashboard' },
//     { label: 'CWPP', category: 'CDPM Executive Dashboard' },
//     { label: 'Image', category: 'Image Dashboard' }, // Example tab, ensure it matches your data
//   ];

//   // Filter widgets based on the selected tab
//   const filteredWidgets = categories.find(category => category.name === tabs[value].category)?.widgets || [];

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           aria-label="basic tabs example"
//           sx={{
//             '& .MuiTabs-indicator': {
//               backgroundColor: 'black',
//             },
//           }}
//         >
//           {tabs.map((tab, index) => (
//             <Tab
//               key={index}
//               label={tab.label}
//               {...a11yProps(index)}
//               sx={{
//                 color: 'gray',
//                 '&.Mui-selected': {
//                   color: 'black',
//                 },
//               }}
//             />
//           ))}
//         </Tabs>
//       </Box>
//       {tabs.map((tab, index) => (
//         <CustomTabPanel key={index} value={value} index={index}>
//           {filteredWidgets.map((widget, idx) => (
//             <div key={idx} className="flex items-center border border-black p-2 mb-2">
//               <input type="checkbox" checked className="w-6 h-6" />
//               <h4 className="ml-2 text-red-600 font-bold text-lg">{widget.name}</h4>
//             </div>
//           ))}
//         </CustomTabPanel>
//       ))}
//     </Box>
//   );
// }




import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import useStore from '../store/zustandStore'; // Import zustand store

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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [selectedWidgets, setSelectedWidgets] = React.useState({});
  
  const categories = useStore((state) => state.dashboard.categories); // Fetch categories from store
  const addWidget = useStore((state) => state.addWidget);
  const removeWidget = useStore((state) => state.removeWidget);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCheckboxChange = (categoryId, widgetId) => {
    setSelectedWidgets(prevState => ({
      ...prevState,
      [categoryId]: {
        ...prevState[categoryId],
        [widgetId]: !prevState[categoryId]?.[widgetId]
      }
    }));
  };

  const handleConfirm = () => {
    Object.keys(selectedWidgets).forEach(categoryId => {
      categories.find(category => category.id === categoryId).widgets.forEach(widget => {
        if (selectedWidgets[categoryId][widget.id]) {
          addWidget(categoryId, widget); // Add widget if checked
        } else {
          removeWidget(categoryId, widget.id); // Remove widget if unchecked
        }
      });
    });
  };

  const renderWidgets = (categoryId) => {
    return categories.find(category => category.id === categoryId).widgets.map(widget => (
      <div key={widget.id} className="flex items-center border border-grey rounded-md p-2 mb-2">
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
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: 'black', // Indicator color
            },
          }}
        >
          {categories.map((category, index) => (
            <Tab
              key={category.name}
              label={category.id}
              {...a11yProps(index)}
              sx={{
                color: 'gray',
                '&.Mui-selected': {
                  color: 'black', // Color when selected
                },
              }}
            />
            // console.log('dashboard data', category.id)
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

// Above Code working properly


