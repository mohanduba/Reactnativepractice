import React, { useState } from 'react';
import { View, Text, ActivityIndicator, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useCreatePostsMutation, useGetUserByNameQuery, useUpdatePostMutation, useDeletePostMutation } from './user';

const UserComponent = () => {
    const [post, setPost] = useState({ id: null, title: '' });
    const { data: fetchedPosts = [], error, isLoading } = useGetUserByNameQuery();
    const [createPost, { isLoading: isPosting }] = useCreatePostsMutation();
    const [updatePost, { isLoading: isUpdating }] = useUpdatePostMutation();
    const [deletePost, { isLoading: isDeleting }] = useDeletePostMutation();
              
    const [localPosts, setLocalPosts] = useState([]);
    const allPosts = [...fetchedPosts, ...localPosts];

    const handlePost = async () => {
        if (post.id) {
            // Update existing post using PUT
            const updatedPost = { id: post.id, title: post.title }; 
            setLocalPosts(localPosts.map(p => (p.id === post.id ? updatedPost : p)));
            await updatePost({ id: post.id, updatedPost });
        } else { 
            // Create new post
            const newPost = { id: allPosts.length + 1, title: post.title };
            setLocalPosts([...localPosts, newPost]);
            await createPost(newPost);
        }
        setPost({ id: null, title: '' });
    };  

    const handleDelete = async (id) => {
        setLocalPosts(localPosts.filter(p => p.id !== id)); // Remove from local state
        await deletePost(id); // Remove from backend
    };

    if (isLoading) return <ActivityIndicator size="large" color="#0000ff" />;
    if (error) return <Text>Error fetching data</Text>;

    return (
        <View style={{ marginHorizontal: 20, marginTop: 50, marginBottom: 100 }}>
            <TextInput 
                placeholder="Enter post title"
                value={post.title}
                style={{ borderWidth: 1, padding: 5, marginBottom: 10 }} 
                onChangeText={(text) => setPost(prev => ({ ...prev, title: text }))}
            />
            <TouchableOpacity 
                style={{ padding: 8, marginVertical: 5, backgroundColor: 'orange', alignItems: 'center' }} 
                onPress={handlePost}
            >
                <Text>{isPosting || isUpdating ? "Processing..." : post.id ? "Update Post" : "Create Post"}</Text>
            </TouchableOpacity>
            
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    {allPosts.map((item) => (
                        <View key={item.id} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5,flexWrap:'wrap' }}>
                            <Text>{item.id}. {item.title}</Text>
                            <TouchableOpacity 
                                style={{ marginLeft: 10, backgroundColor: 'lightblue', padding: 5 }}
                                onPress={() => setPost({ id: item.id, title: item.title })}
                            >
                                <Text>Edit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={{ marginLeft: 10, backgroundColor: 'red', padding: 5 }}
                                onPress={() => handleDelete(item.id)}
                            >
                                <Text style={{ color: 'white' }}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default UserComponent;
