import { createSlice } from "@reduxjs/toolkit";
import store from "./store";

const initialState={
    count:0
}
const counterSlice=createSlice({
   name:'Counter',
   initialState,
   reducers:{
     increment:(store)=>{
          store.count+=1
    },
    decrement:(store)=>{
        if(store.count>0){
          store.count-=1
        }
    },
    increaseByValue:(store,actions)=>{
        store.count+=actions.payload
    }
   }
})

export const {increment,decrement,increaseByValue}=counterSlice.actions;

export default counterSlice.reducer;