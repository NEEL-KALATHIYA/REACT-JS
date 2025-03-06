import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editTask, setEditTask] = useState("");

  // Add new task
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  // Delete task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Toggle task completion
  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  // Start Editing
  const startEditing = (index) => {
    setEditIndex(index);
    setEditTask(tasks[index].text);
  };

  // Update Task
  const updateTask = () => {
    if (editTask.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex].text = editTask;
      setTasks(updatedTasks);
      setEditIndex(null);
      setEditTask("");
    }
  };

  // Cancel Editing
  const cancelEditing = () => {
    setEditIndex(null);
    setEditTask("");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">To-Do List</h2>

      {/* Input Field & Add Button */}
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

      {/* Task List with Animations */}
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
                // Edit Mode with Animation
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
                  <button className="btn btn-secondary btn-sm" onClick={cancelEditing}>
                    Cancel
                  </button>
                </motion.div>
              ) : (
                // Normal Mode with Animations
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
