import React, { useEffect } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, setTask, setEditing, createTask, updateTaskById, deleteTaskById } from "./TaskData";

const TaskComponent = () => {
  const dispatch = useDispatch();
  const { tasks, task, isEditing, editingIndex } = useSelector(state => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());  // Fetch tasks when component mounts
  }, [dispatch]);

  // Handle submitting task (either create or update)
  const handleTaskSubmit = async () => {
    if (task.trim() !== "") {
      if (isEditing) {
        // Update task
        const taskToUpdate = tasks[editingIndex];
        await dispatch(updateTaskById(task, taskToUpdate.id, editingIndex));
        // Reset editing state after updating
        dispatch(setEditing({ isEditing: false, index: null }));
      } else {
        // Create new task
        await dispatch(createTask(task));
        // After adding a new task, reset the task state
        dispatch(setEditing({ isEditing: false, index: null }));
      }
      dispatch(setTask('')); // Clear input after submit
    }
  };

  // Handle editing task
  const editTask = (index) => {
    const selectedTask = tasks[index];
    dispatch(setTask(selectedTask.title));  // Set the task value for editing
    dispatch(setEditing({ isEditing: true, index }));
  };

  // Handle deleting task
  const deleteTask = async (index) => {
    const taskToDelete = tasks[index];
    await dispatch(deleteTaskById(taskToDelete.id, index));  // Delete task
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add or edit a task..."
          value={task}
          onChangeText={(text) => dispatch(setTask(text))}
        />
        <TouchableOpacity onPress={handleTaskSubmit}>
          <FontAwesome5
            name={isEditing ? "edit" : "plus"}  // Change icon based on isEditing state
            size={24}
            color={isEditing ? "blue" : "green"}
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.tasks}>
        {tasks.map((item, index) => (
          <View key={index} style={[styles.taskItem, { marginBottom: index === tasks.length - 1 ? 120 : 4 }]}>
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

export default TaskComponent;
