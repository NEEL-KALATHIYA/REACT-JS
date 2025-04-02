import {
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
} from "firebase/firestore";
import { fireStoreDB } from "./config/config";

export const addTask = async (taskData) => {
  const { userId, ...taskInfo } = taskData;
  try {
    const docRef = await addDoc(
      collection(fireStoreDB, "tasks", userId, "userTasks"),
      {
        ...taskInfo,
      }
    );
    console.log("Task added with ID:", docRef.id);
  } catch (error) {
    console.error("Error adding task:", error);
  }
};

export const updateTaskStatus = async (userId, taskId, status) => {
  const taskRef = doc(fireStoreDB, "tasks", userId, "userTasks", taskId);
  try {
    await updateDoc(taskRef, { status });
    console.log("Task status updated to:", status);
  } catch (error) {
    console.error("Error updating task status:", error);
  }
};

export const deleteTask = async (userId, taskId) => {
  const taskRef = doc(fireStoreDB, "tasks", userId, "userTasks", taskId);
  try {
    await deleteDoc(taskRef);
    console.log("Task deleted successfully");
  } catch (error) {
    console.error("Error deleting task:", error);
  }
};

export const listenForTasks = (userId, onTasksUpdate) => {
  const q = query(
    collection(fireStoreDB, "tasks", userId, "userTasks") // Update path
  );
  return onSnapshot(q, (snapshot) => {
    const tasks = [];
    snapshot.forEach((doc) => tasks.push({ id: doc.id, ...doc.data() }));
    onTasksUpdate(tasks);
  });
};
