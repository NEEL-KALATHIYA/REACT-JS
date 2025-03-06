import { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import API from "./Config/Api";

export const Form = ({ intialData = {} }) => {
  const [course, setcourse] = useState({
    title: intialData.title ? intialData.title : "",
    fees: intialData.fees ? intialData.fees : "",
    duration: intialData.duration ? intialData.duration : "",
  });

  const handleinuptchange = (e) => {
    const { name, value } = e.target;
    setcourse({ ...course, [name]: value });
  };

  const createCourse = async () => {
    if (intialData?.id) {
      await API.patch(`/courses/${intialData.id}`, course);
    } else {
      await API.post("/courses", course);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createCourse();
    setcourse({ title: "", fees: "", duration: "" });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to right, #1e3c72, #2a5298)",
        padding: 3,
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          width: "400px",
          padding: 4,
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
          border: "1px solid #e0e0e0",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#1e3c72",
            marginBottom: 2,
          }}
        >
          Course Form
        </Typography>
        <TextField
          label="Course Name"
          variant="outlined"
          name="title"
          value={course.title}
          onChange={handleinuptchange}
          fullWidth
        />
        <TextField
          label="Course Fees"
          type="number"
          variant="outlined"
          name="fees"
          value={course.fees}
          onChange={handleinuptchange}
          fullWidth
        />
        <TextField
          label="Course Duration"
          type="number"
          variant="outlined"
          name="duration"
          value={course.duration}
          onChange={handleinuptchange}
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{
            padding: "12px",
            fontSize: "16px",
            fontWeight: "bold",
            textTransform: "none",
            backgroundColor: "#1e3c72",
            "&:hover": {
              backgroundColor: "#163057",
            },
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};
