import React from 'react'
import { FlatList, ScrollView, StatusBar, Text, View } from 'react-native'

const Table = () => {
    const work=[
        {
            id:'1',title:'App design',name:'NFT illustration',assign:'Assign To',cody:'Cody Fisher',day:'Days Left',number:'02',button:'High'
        },
        {
            id:'2',title:'App design',name:'NFT illustration',assign:'Assign To',cody:'Cody Fisher',day:'Days Left',number:'02',button:'High'
        },
        {
            id:'3',title:'App design',name:'NFT illustration',assign:'Assign To',cody:'Cody Fisher',day:'Days Left',number:'02',button:'High'
        },
        {
            id:'4',title:'App design',name:'NFT illustration',assign:'Assign To',cody:'Cody Fisher',day:'Days Left',number:'02',button:'High'
        },
        {
            id:'5',title:'App design',name:'NFT illustration',assign:'Assign To',cody:'Cody Fisher',day:'Days Left',number:'02',button:'High'
        },
    ]

    const renderItem=({item})=>{
        return(
            <View style={{paddingBottom:16,flexDirection:'row',marginHorizontal:20,borderBottomWidth:1,borderStyle:'dashed',borderColor:'#e6e9eb',marginVertical:20}}>
                <View style={{width:200}}>
                    <Text style={{fontSize:12,color:'#86909c',marginBottom:4}}>{item.title}</Text>
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
                <View style={{width:100,marginTop:5}}>
                    <Text style={{backgroundColor:'#0066661a',textAlign:'center',fontSize:12,paddingHorizontal:20,paddingVertical:8,borderRadius:30}}>{item.button}</Text>   
                </View>
            </View>
        )
    }

  return (
    <View style={{marginHorizontal:20,borderWidth:1,marginTop:30}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',padding:16}}>
            <Text style={{fontSize:20}}>Today Work</Text>
            <Text style={{fontSize:15,color:'#1675e0'}}>View All</Text>
        </View>
        <ScrollView horizontal>
            <FlatList
                data={work}
                renderItem={renderItem}
                keyExtractor={(item)=>item.id}
            />
        </ScrollView>
    </View>
  )
}

export default Table

// import React from 'react';
// import { FlatList, ScrollView, Text, View } from 'react-native';

// const Table = () => {
//   const work = [
//     { id: '1', title: 'App design', name: 'NFT illustration', assign: 'Assign To', cody: 'Cody Fisher', day: 'Days Left', number: '02', button: 'High' },
//     { id: '2', title: 'App design', name: 'NFT illustration', assign: 'Assign To', cody: 'Cody Fisher', day: 'Days Left', number: '02', button: 'High' },
//     { id: '3', title: 'App design', name: 'NFT illustration', assign: 'Assign To', cody: 'Cody Fisher', day: 'Days Left', number: '02', button: 'High' },
//     { id: '4', title: 'App design', name: 'NFT illustration', assign: 'Assign To', cody: 'Cody Fisher', day: 'Days Left', number: '02', button: 'High' },
//     { id: '5', title: 'App design', name: 'NFT illustration', assign: 'Assign To', cody: 'Cody Fisher', day: 'Days Left', number: '02', button: 'High' },
//   ];

//   return (
//     <View style={{ marginTop: 50, borderWidth: 1, borderColor: '#ccc', borderRadius: 10,marginHorizontal:10 }}>
//       {/* Header */}
//       <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16 }}>
//         <Text style={{ fontSize: 20 }}>Today Work</Text>
//         <Text style={{ fontSize: 15, color: '#1675e0' }}>View All</Text>
//       </View>

//       {/* Table */}
//       <View style={{ flexDirection: 'row' }}>
//         {/* Fixed Column */}
//         <View>
//           {work.map((item, index) => (
//             <View key={index} style={{ width: 150, padding: 10, borderBottomWidth: 1, borderColor: '#eee' }}>
//               <Text style={{ fontSize: 12, color: '#86909c', marginBottom: 4 }}>{item.title}</Text>
//               <Text style={{ fontSize: 15 }}>{item.name}</Text>
//             </View>
//           ))}
//         </View>

//         {/* Scrollable Columns */}
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           <View>
//             {work.map((item, index) => (
//               <View key={index} style={{ flexDirection: 'row', borderBottomWidth: 1, borderColor: '#eee' }}>
//                 <View style={{ width: 130, padding: 10 }}>
//                   <Text style={{ fontSize: 12, color: '#86909c', marginBottom: 4 }}>{item.assign}</Text>
//                   <Text style={{ fontSize: 15 }}>{item.cody}</Text>
//                 </View>
//                 <View style={{ width: 90, padding: 10 }}>
//                   <Text style={{ fontSize: 12, color: '#86909c', marginBottom: 4 }}>{item.day}</Text>
//                   <Text style={{ fontSize: 15 }}>{item.number}</Text>
//                 </View>
//                 <View style={{ width: 100, padding: 10, justifyContent: 'center' }}>
//                   <Text style={{ backgroundColor: '#0066661a', textAlign: 'center', fontSize: 12, paddingVertical: 8, borderRadius: 30 }}>
//                     {item.button}
//                   </Text>
//                 </View>
//               </View>
//             ))}
//           </View>
//         </ScrollView>
//       </View>
//     </View>
//   );
// };

// export default Table;

