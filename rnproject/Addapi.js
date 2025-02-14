
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import axios from 'axios';
import { date } from 'yup';

const Addapi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newPost, setNewPost] = useState({ title: '', body: '' });
  const [editPost, setEditPost] = useState(null); // Track the post being edited

  // Fetch posts
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  // Create post
  const handleCreate = async () => {
    if (!newPost.title || !newPost.body) {
      alert('Please fill out all fields');
      return;
    }
    setLoading(true);
    axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
      .then((response) => {
        setData([response.data, ...data]); // Add new post to state
        setNewPost({ title: '', body: '' }); // Reset inputs
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  // Delete post
  const handleDelete = (id) => {
    setLoading(true);
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(() => {
        setData(data.filter((item) => item.id !== id)); // Remove deleted post
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  // Update post with input data
  const handleUpdate = (id) => {
    if (!editPost?.title || !editPost?.body) {
      alert('Please fill out all fields');
      return;
    }
    setLoading(true);
    axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      title: editPost.title,
      body: editPost.body,
    })
      .then((response) => {
        setData(data.map((item) =>
          item.id === id ? { ...item,...response.data} : item
        ));
        setEditPost(null); // Exit edit mode
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  if (loading) {
    return <ActivityIndicator size="large" style={{ marginTop: '40%' }} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.createSection}>
        <Text style={styles.subHeader}>Create Post</Text>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={newPost.title}
          onChangeText={(text) => setNewPost({ ...newPost, title: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Body"
          value={newPost.body}
          onChangeText={(text) => setNewPost({ ...newPost, body: text })}
        />
        <TouchableOpacity style={styles.button} onPress={handleCreate}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {data.map((item) => (
          <View key={item.id} style={[styles.postItem,{marginBottom:item.id===data.length?'200':'20'}]}>
            {editPost?.id === item.id ? (
              <>
                <TextInput
                  style={styles.input}
                  value={editPost.title}
                  onChangeText={(text) => setEditPost({ ...editPost, title: text })}
                  placeholder="Edit Title"
                />
                <TextInput
                  style={styles.input}
                  value={editPost.body}
                  onChangeText={(text) => setEditPost({ ...editPost, body: text })}
                  placeholder="Edit Body"
                />
                <TouchableOpacity
                  style={[styles.button, styles.updateButton]}
                  onPress={() => handleUpdate(item.id)}>
                  <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.deleteButton]}
                  onPress={() => setEditPost(null)}>
                  <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Text style={styles.postTitle}>{item.id}.{item.title}</Text>
                <Text style={styles.postBody}>{item.body}</Text>
                <View style={styles.buttonGroup}>
                  <TouchableOpacity
                    style={[styles.button, styles.updateButton]}
                    onPress={() => setEditPost({ id: item.id, title: item.title, body: item.body })}>
                    <Text style={styles.buttonText}>Edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.button, styles.deleteButton]}
                    onPress={() => handleDelete(item.id)}>
                    <Text style={styles.buttonText}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    header: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
    },
    subHeader: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
    },
    createSection: {
      marginBottom: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
    },
    button: {
      backgroundColor: "#007BFF",
      padding: 10,
      borderRadius: 5,
      alignItems: "center",
    },
    buttonText: {
      color: "#fff",
      fontWeight: "bold",
    },
    postsSection: {
      marginTop: 20,
    },
    postItem: {
    
      
      padding: 15,
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      // backgroundColor: "yellow"
    },
    postTitle: {
      fontSize: 16,
      fontWeight: "bold",
    },
    postBody: {
      fontSize: 14,
      marginBottom: 10,
    },
    buttonGroup: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    updateButton: {
      backgroundColor: "#28a745",
    },
    deleteButton: {
      backgroundColor: "#dc3545",
    },
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
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
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
  

export default Addapi;