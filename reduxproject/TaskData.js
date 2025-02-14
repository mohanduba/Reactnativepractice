// redux/TaskSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const TaskData = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    task: "",
    isEditing: false,
    editingIndex: null,
  },
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
    setTask: (state, action) => {
      state.task = action.payload;
    },
    setEditing: (state, action) => {
      state.isEditing = action.payload.isEditing;
      state.editingIndex = action.payload.index;
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action) => {
      const { task, index } = action.payload;
      state.tasks[index] = { ...state.tasks[index], title: task };
    },
    deleteTask: (state, action) => {
      const index = action.payload;
      state.tasks = state.tasks.filter((_, idx) => idx !== index);
    },
  },
});

export const {
  setTasks,
  setTask,
  setEditing,
  addTask,
  updateTask,
  deleteTask,
} = TaskData.actions;

// Thunks for async operations
export const fetchTasks = () => async (dispatch) => {
  try {
    const response = await axios.get(API_URL);
    
    dispatch(setTasks(response.data));  // Dispatch the fetched tasks to the state
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
};

export const createTask = (task) => async (dispatch) => {
  try {
    const response = await axios.post(API_URL, { title: task });
    dispatch(addTask(response.data));  // Dispatch the new task to the state
  } catch (error) {
    console.error('Error creating task:', error);
  }
};

export const updateTaskById = (task, id, index) => async (dispatch) => {
  try {
    await axios.put(`${API_URL}/${id}`, { title: task });
    dispatch(updateTask({ task, index }));  // Dispatch the updated task
  } catch (error) {
    console.error('Error updating task:', error);
  }
};

export const deleteTaskById = (id, index) => async (dispatch) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    dispatch(deleteTask(index));  // Dispatch the task removal
  } catch (error) {
    console.error('Error deleting task:', error);
  }
};

// Export reducer
export default TaskData.reducer;
