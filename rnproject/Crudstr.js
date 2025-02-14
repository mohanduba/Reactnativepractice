import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage

const Crudstr = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  // Load tasks from AsyncStorage
  const loadTasks = async () => {
    try {
      const savedTasks = await AsyncStorage.getItem("tasks");
      if (savedTasks) {
        setTasks(JSON.parse(savedTasks)); // Parse and set tasks from storage
      }
    } catch (error) {
      console.error("Error loading tasks:", error);
    }
  };

  // Save tasks to AsyncStorage
  const saveTasks = async (newTasks) => {
    try {
      await AsyncStorage.setItem("tasks", JSON.stringify(newTasks)); // Save tasks as JSON string
    } catch (error) {
      console.error("Error saving tasks:", error);
    }
  };

  // Run loadTasks on component mount
  useEffect(() => {
    loadTasks();
  }, []);

  // Create or Update Task
  const handleTaskSubmit = () => {
    if (task.trim() !== "") {
      let updatedTasks;
      if (isEditing) {
        updatedTasks = tasks.map((t, index) => (index === editingIndex ? task : t));
        setIsEditing(false);
        setEditingIndex(null);
      } else {
        updatedTasks = [...tasks, task];
      }
      setTasks(updatedTasks);
      saveTasks(updatedTasks); // Save updated tasks to AsyncStorage
      setTask("");
    }
  };

  // Edit Task
  const editTask = (index) => {
    setTask(tasks[index]);
    setIsEditing(true);
    setEditingIndex(index);
  };

  // Delete Task
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, idx) => idx !== index);
    console.log(newTasks,'deleted');
    setTasks(newTasks);
    saveTasks(newTasks); // Save updated tasks to AsyncStorage
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
          <View key={index} style={styles.taskItem}>
            <Text style={styles.taskText}>{item}</Text>
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
  },
  taskActions: {
    flexDirection: "row",
    gap: 15,
  },
});

export default Crudstr;
