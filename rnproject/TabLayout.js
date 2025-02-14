import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const TabLayout = () => {
    const [activeTab,setActiveTab] = useState('All');
    const tab=[
        {
            title:'One',
            progress:'Completed'
        },
        {
            title:'Two',
            progress:'Progress'
        },
        {
            title:'Three',
            progress:'Completed'
        },
        {
            title:'Four',
            progress:'Incomplete'
        }, 
        {
            title:'Five',
            progress:'Progress'
        },
    ]

    const filteredData=activeTab==='All'?tab:tab.filter((item)=>item.progress===activeTab);
  return (
    
    <View style={{marginTop:40,marginHorizontal:20}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection:'row',gap:20}}>
            <TouchableOpacity onPress={()=>setActiveTab('All')} style={[styles.tab,activeTab==='All' && styles.backtab]}>
                        <Text style={{color:activeTab==='All'?'white':'black'}}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setActiveTab('Completed')} style={[styles.tab,activeTab==='Completed' && styles.backtab]}>
                        <Text style={{color:activeTab==='Completed'?'white':'black'}}>Completed</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setActiveTab('Progress')} style={[styles.tab,activeTab==='Progress' && styles.backtab]}>
                        <Text style={{color:activeTab==='Progress'?'white':'black'}}>Progress</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setActiveTab('Incomplete')} style={[styles.tab,activeTab==='Incomplete' && styles.backtab]}>
                        <Text style={{color:activeTab==='Incomplete'?'white':'black'}}>Incomplete</Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
        {filteredData.map((item,index)=><View key={index} >
                <View style={{flexDirection:'row',justifyContent:'space-between',borderWidth:1,padding:16,marginVertical:8}}>
                    <View style={{justifyContent:'center'}}><Text>{item.title}</Text></View>
                    <View style={{backgroundColor:item.progress==='Completed'?'orange':item.progress==='Progress'?'green':item.progress==='Incomplete'?'skyblue':'',padding:8,borderRadius:25}}><Text>{item.progress}</Text></View>
                    </View>
        </View>)}
    </View>
  )
}

export default TabLayout;

const styles=StyleSheet.create({
    tab:{
        borderWidth:1,
        paddingHorizontal:18,
        borderRadius:10,
    },
    backtab:{
        backgroundColor:'red',
    }
})