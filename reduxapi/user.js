import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getUserByName: builder.query({
            query: () => `posts`,
        }),
        createPosts: builder.mutation({
            query: (newPost) => ({
                url: 'posts',
                method: 'POST',
                body: newPost,
            }),
        }),
        updatePost: builder.mutation({
            query: ({ id, updatedPost }) => ({
                url: `posts/${id}`,
                method: 'PUT',
                body: updatedPost, 
            }),
        }),
        deletePost:builder.mutation({
            query:(id)=>({
                url:`posts/${id}`,
                method:'DELETE',
               
            })
        })
    }),
});

export const { useGetUserByNameQuery, useCreatePostsMutation, useUpdatePostMutation,useDeletePostMutation } = userApi;
