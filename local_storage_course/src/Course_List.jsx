import React from "react";
import { Form } from "./Form";
import { Modal, Box, Typography, Button, Grid, Paper } from "@mui/material";
import { Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";

export const Course_List = ({ title, fees, duration, id, ondelete }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Paper
        id="box"
        sx={{
          borderRadius: "16px",
          padding: 3,
          marginBottom: 2,
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#f9f9f9",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: "#2c3e50", marginBottom: 1 }}
        >
          {title}
        </Typography>

        <Box
          sx={{
            width: "100%",
            borderBottom: "2px solid #ddd",
            marginBottom: 2,
          }}
        />

        <Grid container spacing={2} sx={{ marginBottom: 2 }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" sx={{ color: "#34495e" }}>
              <strong>Fees : </strong> ₹ {fees}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" sx={{ color: "#34495e" }}>
              <strong>Duration : </strong> {duration} months
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" sx={{ color: "#7f8c8d" }}>
              <strong>ID :</strong> {id}
            </Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Button
            variant="outlined"
            color="error"
            onClick={() => ondelete(id)}
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: 1,
              "&:hover": {
                backgroundColor: "#e74c3c",
                color: "#fff",
              },
            }}
          >
            <DeleteIcon /> Delete
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpen}
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: 1,
              "&:hover": {
                backgroundColor: "#2980b9",
              },
            }}
          >
            <EditIcon /> Update
          </Button>
        </Box>
      </Paper>

      {/* Modal with Increased Form Width */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px", // Increased width of the form
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            borderRadius: "12px",
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ marginBottom: 2, textAlign: "center", fontWeight: "bold" }}
          >
            Update Course
          </Typography>
          <Form intialData={{ title, fees, duration, id }} />
        </Box>
      </Modal>
    </>
  );
};
