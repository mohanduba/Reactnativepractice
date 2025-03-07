import React from 'react'
import { View,Text, StatusBar, FlatList, ScrollView } from 'react-native'

const Today = () => {
const work=[
    {
        title:'App design',name:'NFT illustration...',assign:'Assigned To',cody:'Cody Fisher',day:'Days Left',number:'02',button:'High'
    },
    {
        title:'App design',name:'NFT illustration...',assign:'Assigned To',cody:'Cody Fisher',day:'Days Left',number:'02',button:'High'
    },
    {
        title:'App design',name:'NFT illustration...',assign:'Assigned To',cody:'Cody Fisher',day:'Days Left',number:'02',button:'High'
    },
    {
        title:'App design',name:'NFT illustration...',assign:'Assigned To',cody:'Cody Fisher',day:'Days Left',number:'02',button:'High'
    },
    {
        title:'App design',name:'NFT illustration...',assign:'Assigned To',cody:'Cody Fisher',day:'Days Left',number:'02',button:'High'
    }
]

  const renderItem=({item})=>{
    return(
        <View style={{flex:1,paddingVertical:16,borderBottomWidth:1,borderStyle:'dashed',borderColor:'#E6E9EB',flexDirection:'row'}}>
            <View style={{width:200}}>
            <Text 
            style={{fontSize:12,color:'#86909c',marginBottom:4}}>{item.title}</Text>
            <Text style={{fontSize:15}}>{item.name}</Text>
            </View>
       
        <View style={{width:130}}>
            <Text style={{fontSize:12,color:'#86909c',marginBottom:4}}>{item.assign}</Text>
            <Text style={{fontSize:15}}>{item.cody}</Text>
        </View>
        <View style={{width:90}}>
            <Text style={{fontSize:12,color:'#86909c',marginBottom:4}}>{item.day}</Text>
            <Text style={{fontSize:15}}>{item.number}</Text>
        </View>
        <View style={{width:105,marginTop:5}}>
            <Text style={{paddingVertical:8,paddingHorizontal:20,backgroundColor:'#0066661a',width:105,textAlign:'center',borderRadius:20,color:'white'}}>{item.button}</Text>
        </View>
        
        </View>
    )
  }
  return (
    
    <View style={{marginHorizontal:10,padding:16,borderWidth:1,borderColor:'grey',borderRadius:8,marginTop:StatusBar.currentHeight}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:16}}>
        <Text style={{fontSize:24}}>Today Work</Text>
        <Text style={{fontSize:16,color:'#1675e0'}}>View all</Text>
        </View>
        <ScrollView horizontal>
        <FlatList 
        data={work}
        renderItem={renderItem}
        keyExtractor={(item,index)=>index.toString()}/>
        </ScrollView>
        {/* <View>
        <View style={{paddingVertical:16,borderBottomWidth:1,borderStyle:'dashed',borderColor:'#E6E9EB'}}>
            <View>
            <Text style={{fontSize:12,color:'#86909c',marginBottom:4}}>App design</Text>
            <Text style={{fontSize:15}}>NFT illustration...</Text>
            </View>
       
        <View>
            <Text style={{fontSize:12,color:'#86909c',marginBottom:4}}>Assigned To</Text>
            <Text style={{fontSize:15}}>Cody Fisher</Text>
        </View>
        <View>
            <Text style={{fontSize:12,color:'#86909c',marginBottom:4}}>Days Left</Text>
            <Text style={{fontSize:15}}>02</Text>
        </View>
        <View>
            <Text style={{paddingVertical:8,paddingHorizontal:20,backgroundColor:'#0066661a',width:105,textAlign:'center',borderRadius:20,color:'white'}}>High</Text>
        </View>
        
        </View>
        </View> */}


        {/* <View style={{paddingVertical:16,borderBottomWidth:1,borderStyle:'dashed',borderColor:'#E6E9EB'}}>
            <Text style={{fontSize:12,color:'#86909c',marginBottom:4}}>App design</Text>
            <Text style={{fontSize:15}}>NFT illustration...</Text>
        </View>
        <View style={{paddingVertical:16,borderBottomWidth:1,borderStyle:'dashed',borderColor:'#E6E9EB'}}>
            <Text style={{fontSize:12,color:'#86909c',marginBottom:4}}>App design</Text>
            <Text style={{fontSize:15}}>NFT illustration...</Text>
        </View>
        <View style={{paddingVertical:16,borderBottomWidth:1,borderStyle:'dashed',borderColor:'#E6E9EB'}}>
            <Text style={{fontSize:12,color:'#86909c',marginBottom:4}}>App design</Text>
            <Text style={{fontSize:15}}>NFT illustration...</Text>
        </View>
        <View style={{paddingVertical:16,borderBottomWidth:1,borderStyle:'dashed',borderColor:'#E6E9EB'}}>
            <Text style={{fontSize:12,color:'#86909c',marginBottom:4}}>App design</Text>
            <Text style={{fontSize:15}}>NFT illustration...</Text>
        </View> */}
    </View>
  )
}

export default Today