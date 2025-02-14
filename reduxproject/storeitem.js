// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import TaskReducer from './TaskData';  // Import TaskReducer from TaskSlice

const storeitem = configureStore({
  reducer: {
    tasks: TaskReducer,  // Assign the TaskReducer here
  },
});

export default storeitem;
