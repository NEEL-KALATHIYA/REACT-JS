import { Box, Button, Modal } from "@mui/material";
import React, { useState } from "react";
import Form from "./Form";

const CourseCard = ({ title, fee, duration, onDelete, id }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <h1>{title}</h1>
      <h3>{fee}</h3>
      <p>{duration} : months</p>
      <button onClick={() => onDelete(id)}>delete</button>
      <button onClick={handleOpen}>open</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Form initialData={{ title, fee, duration, onDelete, id }} />
      </Modal>
    </div>
  );
};

export default CourseCard;
