import React, { useEffect, useState } from "react";
import API from "./config/api";
import CourseCard from "./CourseCard";

const Courses = () => {
  let [data, setData] = useState([]);
  const getCourses = async () => {
    try {
      let res = await API.get("/courses");
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log("Couldn't get", error);
    }
  };
  const handleDelete = async (id) => {
    try {
      await API.delete(`/courses/${id}`);
    } catch (error) {
      console.log("Couldn't delete", error);
    }
  };
  useEffect(() => {
    getCourses();
  }, []);
  return (
    <div>
      {data.map((ele) => (
        <CourseCard key={ele.id} {...ele} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default Courses;
