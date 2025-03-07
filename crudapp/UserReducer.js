import { createSlice } from '@reduxjs/toolkit';
import { userList } from './Data';


const userSlice = createSlice({
    name: 'users',
    initialState: userList, 
    reducers: {
        addUserList: (state, action) => {
            state.push(action.payload); 
        },
        deleteUserList:(state,action) => {
            const index=state.findIndex((user)=>user.id===action.payload)
            state.splice(index,1)
        },
        updateUserList:(state,action) => {
            const index=state.findIndex((user)=>user.id===action.payload.id)
            state[index]=action.payload
        }
    },
});

export const { addUserList,deleteUserList,updateUserList } = userSlice.actions;
export default userSlice.reducer;
