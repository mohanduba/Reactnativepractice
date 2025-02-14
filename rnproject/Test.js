import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import axios from "axios"; // Import axios for API calls

const Test = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  // Define the API base URL
  const API_URL = "https://jsonplaceholder.typicode.com/posts"; // Replace with your actual API URL

  // Fetch tasks from the API on component mount (only first 10 posts)
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(API_URL); // Fetch all tasks from the API
        const firstTenPosts = response.data.slice(0, 10); // Slice the first 10 posts
        setTasks(firstTenPosts); // Set the tasks state with first 10 posts
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  // Create or Update Task
  const handleTaskSubmit = async () => {
    if (task.trim() !== "") {
      try {
        if (isEditing) {
          // Update the task via PUT request
          const updatedTask = { title: task }; // Change to 'title' to match API format
          await axios.put(`${API_URL}/${tasks[editingIndex].id}`, updatedTask); // Update task by ID
          
          // Update the state
          const updatedTasks = tasks.map((t, index) =>
            index === editingIndex ? { ...t, title: task } : t // Update only the modified task
          );
          setTasks(updatedTasks);
          setIsEditing(false);
          setEditingIndex(null);
        } else {
          // Create new task via POST request
          const newTask = { title: task }; // Change to 'title' to match API format
          const response = await axios.post(API_URL, newTask); // Create task
          
          // Debug the response data
          console.log("Task created:", response.data);

          // Add new task to state
          setTasks([...tasks, response.data]); // Add new task to state
        }
        setTask(""); // Clear the input field
      } catch (error) {
        console.error("Error submitting task:", error);
      }
    }
  };

  // Edit Task
  const editTask = (index) => {
    setTask(tasks[index].title); // Assuming task has a 'title' field
    setIsEditing(true);
    setEditingIndex(index);
  };

  // Delete Task
  const deleteTask = async (index) => {
    try {
      const taskToDelete = tasks[index];
      await axios.delete(`${API_URL}/${taskToDelete.id}`); // Delete task via API 

      // Remove the task from the state
      const updatedTasks = tasks.filter((_, idx) => idx !== index);
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add or edit a task..."
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={handleTaskSubmit}>
          <FontAwesome5
            name={isEditing ? "edit" : "plus"}
            size={24}
            color={isEditing ? "blue" : "green"}
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.tasks}>
        {tasks.map((item, index) => (
          <View key={index} style={[styles.taskItem, { marginBottom: index === tasks.length - 1 ? 120 : 4 }]}>
            {/* Ensure item.title exists before rendering */}
            <Text style={styles.taskText}>{item.title || "No task name"}</Text>
            <View style={styles.taskActions}>
              <TouchableOpacity onPress={() => editTask(index)}>
                <FontAwesome5 name="edit" size={20} color="blue" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteTask(index)}>
                <FontAwesome5 name="trash" size={20} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#777",
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
  tasks: {
    marginTop: 10,
  },
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
  },
  taskText: {
    fontSize: 16,
    color: "#333",
    width: "50%",
  },
  taskActions: {
    flexDirection: "row",
    gap: 15,
  },
});

export default Test;
