// // import React from 'react'

// // const Widget = ({ widget }) => {

// //     return (
// //         <div className=''>
// //             <div className='border shadow-sm rounded-lg p-4 bg-gray-50 hover:bg-gray-100 min-h-[150px] transition-colors duration-200'>
// //                 <div className="flex justify-between items-start mb-2">
// //                     <h3 className="text-lg font-medium text-gray-700">{widget.name}</h3>
// //                     <button
// //                         //   onClick={() => removeWidget(widget.categoryId, widget.id)}
// //                         className="text-red-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 rounded-full p-1 transition-colors duration-200"
// //                         aria-label="Remove widget"
// //                     >
// //                         &times;
// //                     </button>
// //                 </div>
// //                 <p className="text-gray-600">{widget.content}</p>
// //             </div>
// //         </div>
// //     )
// // }

// // export default Widget

// import React from 'react';

// const Widget = ({ widget }) => {
//     return (
//         <div className=''>
//             <div className='border shadow-sm rounded-lg p-4 bg-gray-50 hover:bg-gray-100 min-h-[150px] transition-colors duration-200'>

//                 {/* Conditional Rendering based on widget.id */}
//                 {widget.id === 'blank_cloud_account' ? (
//                     <div className='flex justify-center items-center h-full'>
//                         <button className='text-sm text-center flex justify-center items-center h-full rounded-md p-2 border-2'>
//                             + {widget.name}
//                         </button>
//                     </div>
//                 ) : (
//                     <div>
//                         <div className="flex justify-between items-start mb-2">
//                             <h3 className="text-lg font-medium text-gray-700">{widget.name}</h3>
//                             <button
//                                 // onClick={() => removeWidget(widget.categoryId, widget.id)}
//                                 className="text-red-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 rounded-full p-1 transition-colors duration-200"
//                                 aria-label="Remove widget"
//                             >
//                                 &times;
//                             </button>
//                         </div>
//                         <p className="text-gray-600">{widget.content}</p>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default Widget;

// working correctly
// import React from 'react';

// const Widget = ({ widget, onRemove }) => {
//     return (
//             <div className='border shadow-sm rounded-lg p-4 bg-gray-50 hover:bg-gray-100 sm:min-h-[150px] transition-colors duration-200 my-2'>

//                 {/* Conditional Rendering based on widget.id */}
//                 {widget.id === 'blank_cloud_account' ? (
//                     <div className='min-w-[320px] flex justify-center relative'> {/* Added flex and justify-center */}
//                     <button className='text-sm rounded-md p-2 border-2 flex justify-center absolute bottom-0'>
//                         <h4 className='text-center'>+ {widget.name}</h4>
//                     </button>
//                     </div>
//                 ) : (
//                     <div>
//                         <div className="flex justify-between items-start mb-2">
//                             <h3 className="text-lg font-medium text-gray-700">{widget.name}</h3>
//                             <button
//                                 // onClick={() => removeWidget(widget.categoryId, widget.id)}
//                                 className="text-red-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 rounded-full p-1 transition-colors duration-200"
//                                 aria-label="Remove widget"
//                                 onClick={onRemove}
//                             >
//                                 &times;
//                             </button>
//                         </div>
//                         <p className="text-gray-600">{widget.content}</p>
//                     </div>
//                 )}
//             </div>
//     );
// }

// export default Widget;

// import React from 'react';

// const Widget = ({ widget, onRemove }) => {
//     return (
//         <div className='border shadow-sm rounded-lg p-4 bg-gray-50 hover:bg-gray-100 sm:min-h-[150px] sm:min-w-[400px] min-w-[460px] transition-colors duration-200 my-2'>

//             {/* Conditional Rendering based on widget.id */}

//             {widget.id === 'blank_cloud_account' ? (
//                 <div class=" p-5 sm:min-h-[120px] text-center sm:flex sm:justify-center sm:items-center">
//                     <a href="" className='border p-2 rounded-lg shadow-md'>Click Me</a>
//                 </div>
//             ) : (
//                 <div>
//                     <div className="flex justify-between items-start mb-2">
//                         <h3 className="text-lg font-medium text-gray-700">{widget.name}</h3>
//                         <button
//                             // onClick={() => removeWidget(widget.categoryId, widget.id)}
//                             className="text-red-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 rounded-full p-1 transition-colors duration-200"
//                             aria-label="Remove widget"
//                             onClick={onRemove}
//                         >
//                             &times;
//                         </button>
//                     </div>
//                     <p className="text-gray-600">{widget.content}</p>
//                 </div>
//             )}

//         </div>
//     );
// }

// export default Widget;
// import React, { useState } from "react";
// import { Modal, Box, Button, TextField } from "@mui/material";
// import { MdDelete } from 'react-icons/md'; // Import the delete icon

// import useStore from "../store/zustandStore";

// const Widget = ({ widget, onRemove, categoryId }) => {
//   const [open, setOpen] = useState(false);
//   const [newWidgetName, setNewWidgetName] = useState("");
//   const [newWidgetDescription, setNewWidgetDescription] = useState("");
//   const addWidget = useStore((state) => state.addWidget);

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const handleSubmit = () => {
//     if (widget.id === "blank_cloud_account") {
//       addWidget(categoryId, {
//         id: `widget_${Date.now()}`,
//         name: newWidgetName,
//         content: newWidgetDescription,
//       });
//     }
//     handleClose();
//   };

//   return (
//     <div className="p-4">
//       <div className={`border shadow-sm rounded-lg p-4 bg-gray-50 hover:bg-gray-100 min-h-[150px] min-w-[200px] transition-colors duration-200 flex ${widget.id === "blank_cloud_account" ? 'items-center justify-center' : 'flex-col'}`}>
//         {widget.id === "blank_cloud_account" ? (
//           <Button variant="contained" onClick={handleOpen} className="text-center">
//             + Add Widget
//           </Button>
//         ) : (
//           <div>
//             <div className="flex justify-between items-center mb-2">
//               <h3 className="text-lg font-bold text-gray-700 mt-2">
//                 {widget.name}
//               </h3>
//               <button
//                 className="text-red-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 rounded-full p-1 transition-colors duration-200"
//                 aria-label="Remove widget"
//                 onClick={onRemove}
//               >
//                 <MdDelete className="w-6 h-6" />
//               </button>
//             </div>
//             <p className="text-gray-600">{widget.content}</p>
//           </div>
//         )}
//       </div>

//       {/* MUI Modal */}
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-title"
//         aria-describedby="modal-description"
//       >
//         <Box
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: 400,
//             bgcolor: "background.paper",
//             boxShadow: 24,
//             p: 4,
//             borderRadius: "8px",
//           }}
//         >
//           <div className="flex justify-between items-center mb-5">
//             <h2 id="modal-title" className="text-xl font-semibold">Add Widget Details</h2>
//             <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
//             ❌
//             </button>
//           </div>
//           <TextField
//             fullWidth
//             label="Widget Name"
//             variant="outlined"
//             value={newWidgetName}
//             onChange={(e) => setNewWidgetName(e.target.value)}
//             sx={{ mb: 2 }}
//           />
//           <TextField
//             fullWidth
//             label="Widget Description"
//             variant="outlined"
//             value={newWidgetDescription}
//             onChange={(e) => setNewWidgetDescription(e.target.value)}
//             sx={{ mb: 2 }}
//           />
//           <Button variant="contained" onClick={handleSubmit}>
//             Add Widget
//           </Button>
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default Widget;

// Above Code is working


import React, { useState } from "react";
import { Modal, Box, Button, TextField } from "@mui/material";
import { MdDelete } from 'react-icons/md'; // Import the delete icon

import useStore from "../store/zustandStore";

const Widget = ({ widget, onRemove, categoryId }) => {
  const [open, setOpen] = useState(false);
  const [newWidgetName, setNewWidgetName] = useState("");
  const [newWidgetDescription, setNewWidgetDescription] = useState("");
  const addWidget = useStore((state) => state.addWidget);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    if (widget.id === "blank_cloud_account") {
      addWidget(categoryId, {
        id: `widget_${Date.now()}`,
        name: newWidgetName,
        content: newWidgetDescription,
      });
    }
    handleClose();
  };

  return (
    <div className="p-4">
      <div className={`border shadow-sm rounded-lg p-4 bg-gray-50 hover:bg-gray-100 min-h-[180px] min-w-[250px] transition-colors duration-200 flex ${widget.id === "blank_cloud_account" ? 'items-center justify-center' : 'flex-col'}`}>
        {widget.id === "blank_cloud_account" ? (
          <Button variant="contained" onClick={handleOpen} className="text-center">
            + Add Widget
          </Button>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-bold text-gray-700 mt-2">
                {widget.name}
              </h3>
              <button
                className="text-red-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 rounded-full p-1 transition-colors duration-200"
                aria-label="Remove widget"
                onClick={onRemove}
              >
                <MdDelete className="w-6 h-6" />
              </button>
            </div>
            <div className="flex justify-between items-center">
              {widget?.dashboardImage == null && widget.dashboardImage == undefined ? (
                <p className="text-gray-600">{widget.content}</p>
              ) : (
                <div className="flex items-center">
                  <img src={widget.dashboardImage} alt="Dashboard Image" className="w-28 h-20 rounded-lg mr-4 object-contain" />
                  <p className="text-gray-600">{widget.content}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* MUI Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: "8px",
          }}
        >
          <div className="flex justify-between items-center mb-5">
            <h2 id="modal-title" className="text-xl font-semibold">Add Widget Details</h2>
            <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
              ❌
            </button>
          </div>
          <TextField
            fullWidth
            label="Widget Name"
            variant="outlined"
            value={newWidgetName}
            onChange={(e) => setNewWidgetName(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Widget Description"
            variant="outlined"
            value={newWidgetDescription}
            onChange={(e) => setNewWidgetDescription(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button variant="contained" onClick={handleSubmit}>
            Add Widget
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Widget;
