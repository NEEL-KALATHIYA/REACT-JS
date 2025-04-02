import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  // Fetch todos from Firestore
  useEffect(() => {
    const q = query(collection(db, "todos"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const todoList = [];
      querySnapshot.forEach((doc) => {
        todoList.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setTodos(todoList);
    });
    return () => unsubscribe();
  }, []);

  // Add a new todo
  const addTodo = async (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    try {
      await addDoc(collection(db, "todos"), {
        text: newTodo,
        completed: false,
        createdAt: serverTimestamp(),
      });
      setNewTodo("");
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  };

  // Toggle todo completion status
  const toggleComplete = async (id, completed) => {
    try {
      await updateDoc(doc(db, "todos", id), {
        completed: !completed,
      });
    } catch (err) {
      console.error("Error updating document: ", err);
    }
  };

  // Start editing a todo
  const startEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditId(null);
    setEditText("");
  };

  // Save edited todo
  const saveEdit = async (id) => {
    if (!editText.trim()) return;
    try {
      await updateDoc(doc(db, "todos", id), {
        text: editText,
      });
      setEditId(null);
      setEditText("");
    } catch (err) {
      console.error("Error updating document text: ", err);
    }
  };

  // Delete a todo
  const deleteTodo = async (id) => {
    try {
      await deleteDoc(doc(db, "todos", id));
    } catch (err) {
      console.error("Error deleting document: ", err);
    }
  };

  return (
    <div className="todo-container">
      <h2>My Todo List</h2>
      
      {/* Create form */}
      <form onSubmit={addTodo} className="todo-form">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
          className="todo-input"
        />
        <button type="submit" className="add-button">
          Add
        </button>
      </form>
      
      {/* Todo list with CRUD operations */}
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <input
              type="checkbox"
              checked={todo.completed || false}
              onChange={() => toggleComplete(todo.id, todo.completed)}
            />
            
            {editId === todo.id ? (
              <div className="edit-container">
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="edit-input"
                  autoFocus
                />
                <div className="edit-buttons">
                  <button onClick={() => saveEdit(todo.id)} className="save-button">
                    Save
                  </button>
                  <button onClick={cancelEdit} className="cancel-button">
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <span className="todo-text">{todo.text}</span>
                <div className="todo-actions">
                  <button onClick={() => startEdit(todo.id, todo.text)} className="edit-button">
                    Edit
                  </button>
                  <button onClick={() => deleteTodo(todo.id)} className="delete-button">
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
      
      {todos.length === 0 && <p className="empty-list">No todos yet! Add one above.</p>}
    </div>
  );
}

export default TodoList;