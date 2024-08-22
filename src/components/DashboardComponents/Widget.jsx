import React, { useState } from "react";
import { Modal, Box, Button, TextField, Typography } from "@mui/material";
import { MdDelete } from "react-icons/md";
import useStore from "../../store/zustandStore";
import CircularProgressBar from "../BarsComponent/CircularProgressBar";
import PieChartBar from "../BarsComponent/PieChartBar";
import bar from "../../assets/bar.png";
import LineChartBar from "../BarsComponent/LineChartBar";

const Widget = ({ widget, onRemove, categoryId }) => {
  const [open, setOpen] = useState(false);
  const [newWidgetName, setNewWidgetName] = useState("");
  const [newWidgetDescription, setNewWidgetDescription] = useState("");
  const [error, setError] = useState("");
  const addWidget = useStore((state) => state.addWidget);

  const handleOpen = () => {
    setError("");
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    // Validating that the fields are not empty
    if (!newWidgetName.trim() || !newWidgetDescription.trim()) {
      setError("Widget Name and Description cannot be empty.");
      return;
    }

    if (widget.id === "blank_cloud_account") {
      addWidget(categoryId, {
        id: `widget_${Date.now()}`,
        name: newWidgetName,
        content: newWidgetDescription,
      });
    }

    setNewWidgetName("");
    setNewWidgetDescription("");
    handleClose();
  };

  return (
    <div className="p-4">
      <div
        className={`border shadow-sm rounded-lg p-4 bg-gray-50 hover:bg-gray-100 min-h-[205px] min-w-[250px] transition-colors duration-200 flex ${
          widget.id === "blank_cloud_account"
            ? "items-center justify-center"
            : "flex-col"
        }`}
      >
        {widget.id === "blank_cloud_account" ? (
          <Button
            variant="contained"
            onClick={handleOpen}
            className="text-center"
          >
            + Add Widget
          </Button>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-bold text-gray-700 mt-2">
                {widget.name}
              </h3>
              <button
                className="mt-1 text-red-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 rounded-full p-1 transition-colors duration-200"
                aria-label="Remove widget"
                onClick={onRemove}
              >
                <MdDelete className="w-6 h-6" />
              </button>
            </div>
            <div className="flex justify-between items-center">
              {widget?.id === "card_one" || widget?.id === "card_two" ? (
                <div className="items center">
                  <img
                    src={bar}
                    alt="bar-image"
                    className="object-contain"
                    width={50}
                    height={50}
                  />
                  <p className="text-gray-600 mt-4">{widget.content}</p>
                </div>
              ) : (
                <div className="flex items-center">
                  {widget.graphType === "circular" ? (
                    <CircularProgressBar data={widget.data} />
                  ) : widget.graphType === "pie" ? (
                    <PieChartBar
                      data={widget.data}
                      color={widget.color}
                      value={widget.value}
                    />
                  ) : widget.graphType === "line" ? (
                    <div>
                      <p className="text-red-900 text-lg mb-2">
                        {widget?.content}
                      </p>
                      <LineChartBar data={widget.data} />
                    </div>
                  ) : (
                    <p className="text-md font-medium">{widget.content}</p>
                  )}
                  <div className="flex-col">
                    {widget.data && widget.data.length > 0
                      ? widget.data.map((item, index) => (
                          <div key={index}>
                            <p
                              style={{ color: widget.color[index] }}
                              className="text-gray-60 ml-10 sm:text-md sm:w-[200px]"
                            >
                              {item}
                            </p>
                          </div>
                        ))
                      : null}
                  </div>
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
            <h2 id="modal-title" className="text-xl font-semibold">
              Add Widget Details
            </h2>
            <button
              onClick={handleClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ❌
            </button>
          </div>
          {error && (
            <Typography color="error" className="mb-6">
              {error}
            </Typography>
          )}
          <TextField
            fullWidth
            label="Widget Name"
            variant="outlined"
            value={newWidgetName}
            onChange={(e) => setNewWidgetName(e.target.value)}
            sx={{ mb: 2 }}
            error={!newWidgetName.trim()}
          />
          <TextField
            fullWidth
            label="Widget Description"
            variant="outlined"
            value={newWidgetDescription}
            onChange={(e) => setNewWidgetDescription(e.target.value)}
            sx={{ mb: 2 }}
            error={!newWidgetDescription.trim()}
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
