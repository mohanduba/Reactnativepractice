// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './storeitem';  // Correct import for store
import TaskComponent from './TaskComponent';  // Your main component

export default function App() {
  return (
    <Provider store={store}>
      <TaskComponent/>
    </Provider>
  );
}
