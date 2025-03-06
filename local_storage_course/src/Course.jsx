import { useEffect, useState } from "react";
import API from "./Config/Api";
import { Course_List } from "./Course_List";

export const Course = () => {
  const [data, setdata] = useState([]);

  const getCourse = async () => {
    let res = await API.get("/courses");
    setdata(res.data);
  };

  const deleteCourse = async (id) => {
    let res = await API.delete(`/courses/${id}`);
  };

  useEffect(() => {
    getCourse();
  }, [deleteCourse]);

  return (
    <div id="main">
      {data.map((ele) => (
        <Course_List key={ele.id} {...ele} ondelete={deleteCourse} />
      ))}
    </div>
  );
};
