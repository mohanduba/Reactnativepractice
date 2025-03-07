import { createSlice } from "@reduxjs/toolkit";
import store from "./store";

const initialState={
    data:[
      
    ]
}

export const addUserData=(user)=>{
  return (dispatch)=>{
      fetch("https://jsonplaceholder.typicode.com/users",{
        method:'POST',
        body:JSON.stringify(user)
      }).then(res=>res.json()).then(response=>{
        dispatch(addUser(user))
 
      }).catch(error=>{  
        
        console.log("error",error)
      })
  }
}

export const deleteUserData=(id)=>{
  return (dispatch)=>{
      fetch("https://jsonplaceholder.typicode.com/users/"+id,{
        method:'DELETE',
      }).then(res=>res.json()).then(response=>{
        dispatch(deleteUser(id))
        
      }).catch(error=>{
        console.log("error",error)
      })
  }
}

export const updateUserData=(user)=>{
  return (dispatch)=>{
      fetch("https://jsonplaceholder.typicode.com/users"+user.id,{
        method:'PUT',
        body:JSON.stringify(user)
      }).then(res=>res.json()).then(response=>{
        dispatch(updataUser(user))
        
      }).catch(error=>{
        console.log("error",error)
      })
  }
}

export const getUserData=()=>{
  return (dispatch)=>{
      fetch("https://jsonplaceholder.typicode.com/users",{
        method:'GET',
      }).then(res=>res.json()).then(response=>{
        dispatch(getUser(response))
        
      }).catch(error=>{
        console.log("error",error)
      })
  }
}

const userSlice=createSlice({
   name:'Counter',
   initialState,
   reducers:{
      addUser:(store,actions)=>{
        const newUserId=store.data.length+1
        const newUser={id:newUserId,...actions.payload}
        store.data.push(newUser);
      },
      deleteUser:(store,actions)=>{
        const index=store.data.findIndex((user)=>user.id===actions.payload)
        store.data.splice(index,1)
      },
      
      updataUser:(store,actions)=>{
        const index=store.data.findIndex((user)=>user.id===actions.payload.id)
        store.data[index]=actions.payload
      },
      getUser:(store,actions)=>{
        store.data=[...store.data,...actions.payload]
      }
   }
})

export const {addUser,deleteUser,updataUser,getUser}=userSlice.actions;

export default userSlice.reducer;