import React, { useState } from "react";
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

const PracticeCrud = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  // Create or Update Task
  const handleTaskSubmit = () => {
    if (task.trim() !== "") {
      if (isEditing) {
        const updatedTasks = tasks.map((t, index) =>
          index === editingIndex ? task : t
        );
       
        setTasks(updatedTasks);
        setIsEditing(false);
        setEditingIndex(null);
      } else {
        setTasks([...tasks, task]);
      }
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
    const newTasks = [...tasks];
    console.log(newTasks,'hello');
    const check=newTasks.splice(index, 1);
    console.log(newTasks,"checking");
    setTasks(newTasks);
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
    width:'90%',
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

export default PracticeCrud;