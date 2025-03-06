import "./App.css";
import { Course } from "./Course";
import { Form } from "./Form";

const App = () => {
  return (
    <div>
      <Form />
      <h1>Course Details</h1>
      <Course />
    </div>
  );
};

export default App;
