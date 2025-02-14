import React, { useState } from 'react'
import { Button, StatusBar, TextInput, View,Text } from 'react-native'
import GoalItem from './GoalItem';

const Goal = () => {
    const [goal,setGoal]=useState('');
    const [addGoal,setAddGoal]=useState([]);
    const handleGoalSubmit=(goal)=>{
        
        setGoal(goal);   
    }
    const handleSubmit=()=>{
        setAddGoal((addNewGoal)=>[...addNewGoal,goal]); 
        
    }
    
    const deleteHandler=(i)=>{
        setAddGoal(addNewGoal=>{
            return addNewGoal.filter((item,index)=>i!==index)   
        })
    }
  return (
    <View style={{marginTop:StatusBar.currentHeight,padding:30}}>
        <View style={{flexDirection:'row',gap:10}}>
            <TextInput placeholder='Enter a message' style={{borderWidth:1,width:'70%'}} onChangeText={handleGoalSubmit}/>
            <Button title='add goal' onPress={handleSubmit}/>
        </View>
        <View>
            {
                addGoal.map((item,index)=>
                    <GoalItem key={index} props={item} index={index} onDeleteItem={deleteHandler}/>
                )
            }
        </View>
    </View>
  )
}

export default Goal