import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editTask, setEditTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTaskCompletion = (index) => {
    setTasks(tasks.map((task, i) => (i === index ? { ...task, completed: !task.completed } : task)));
  };

  const startEditing = (index) => {
    setEditIndex(index);
    setEditTask(tasks[index].text);
  };

  const updateTask = () => {
    if (editIndex !== null && editTask.trim() !== "") {
      setTasks(tasks.map((task, i) => (i === editIndex ? { ...task, text: editTask } : task)));
      setEditIndex(null);
      setEditTask("");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">To-Do List</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addTask}>
          Add
        </button>
      </div>
      <ul className="list-group">
        <AnimatePresence>
          {tasks.map((task, index) => (
            <motion.li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {editIndex === index ? (
                <motion.div
                  className="d-flex w-100"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <input
                    type="text"
                    className="form-control me-2"
                    value={editTask}
                    onChange={(e) => setEditTask(e.target.value)}
                  />
                  <button className="btn btn-success btn-sm me-2" onClick={updateTask}>
                    Save
                  </button>
                  <button className="btn btn-secondary btn-sm" onClick={() => setEditIndex(null)}>
                    Cancel
                  </button>
                </motion.div>
              ) : (
                <>
                  <motion.span
                    style={{
                      textDecoration: task.completed ? "line-through" : "none",
                      cursor: "pointer",
                    }}
                    onClick={() => toggleTaskCompletion(index)}
                    whileHover={{ scale: 1.1 }}
                  >
                    {task.text}
                  </motion.span>
                  <div>
                    <button className="btn btn-warning btn-sm me-2" onClick={() => startEditing(index)}>
                      Edit
                    </button>
                    <motion.button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteTask(index)}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      Delete
                    </motion.button>
                  </div>
                </>
              )}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default ToDoList;
