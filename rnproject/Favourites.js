import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Favourites = () => {
    const favourites=[
        {img:require('../rnproject/assets/avatar1.jpg'),name:'Julian Astamin',designation:'Master Technician, Chicago, IL' },
        {img:require('../rnproject/assets/avatar2.jpg'),name:'Austin',designation:'Master Technician' },
        {img:require('../rnproject/assets/avatar3.jpg'),name:'Juliana',designation:'Master Technician'},
        {img:require('../rnproject/assets/avatar4.jpg'),name:'John',designation:'Master Technician' },
        {img:require('../rnproject/assets/avatar1.jpg'),name:'Julian Astamin',designation:'Master Technician, Chicago, IL' },
        {img:require('../rnproject/assets/avatar2.jpg'),name:'Austin',designation:'Master Technician' }
    ]

    const tech=[
        {img:require('../rnproject/assets/avatar1.jpg'),name:'Julian Astamin',designation:'Master Technician, Chicago, IL' },
        {img:require('../rnproject/assets/avatar2.jpg'),name:'Austin',designation:'Master Technician' },
        {img:require('../rnproject/assets/avatar3.jpg'),name:'Juliana',designation:'Master Technician'},
        {img:require('../rnproject/assets/avatar4.jpg'),name:'John',designation:'Master Technician' },
    ]

    const techtwo=[
        {img:require('../rnproject/assets/avatar1.jpg'),name:'Julian Astamin',designation:'Master Technician, Chicago, IL' },
        {img:require('../rnproject/assets/avatar2.jpg'),name:'Austin',designation:'Master Technician' },
        {img:require('../rnproject/assets/avatar3.jpg'),name:'Juliana',designation:'Master Technician'},
        {img:require('../rnproject/assets/avatar4.jpg'),name:'John',designation:'Master Technician' },
        {img:require('../rnproject/assets/avatar1.jpg'),name:'Julian Astamin',designation:'Master Technician, Chicago, IL' }, 
    ]
    return (
        <ScrollView style={{ marginTop: 30 }}>
            <View style={{ borderWidth: 1, marginHorizontal: 20, padding: 16,borderColor: 'rgba(0,0,0,0.1)', borderWidth: 1, backgroundColor: "white", shadowColor: 'rgba(0,0,0,1)', shadowOpacity: 0.3, shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, borderRadius: 8,marginBottom:20 }}>
                <View style={{ backgroundColor: '#d5dbf9', borderRadius: 5, marginBottom: 16 }}>
                    <View style={{ flexDirection: 'row', gap: 5, backgroundColor: '#7487eb', width: '80%', padding: 16, borderRadius: 4 }}>
                        <Octicons name='star' size={16} style={{ color: 'white', marginTop: 3 }} />
                        <Text style={{ fontSize: 16, color: 'white', fontWeight: 600 }}>Favourites</Text>
                    </View>
                </View>
                {favourites.map((item,index)=>(
                    <View key={index} style={{ flex: 1, borderColor: 'rgba(0,0,0,0.2)', borderWidth: 0, backgroundColor: "white", shadowColor: 'rgba(0,0,0,1)', shadowOpacity: 0.3, shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, borderRadius: 8,marginBottom:16 }}>
                        <View key={item} style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16, }}>
                            <Image source={item.img} style={{ width: 50, height: 50, borderWidth: 0, borderRadius: 50 }} />
                            <FontAwesome name='bookmark' size={15} style={{ backgroundColor: 'orange', padding: 8, color: 'white', height: 30, borderRadius: 5 }} />
                        </View>
                        <Text style={{ fontSize: 20, fontWeight: 700, paddingHorizontal: 16, paddingVertical: 8 }}>{item.name}</Text>
                        <Text style={{ fontSize: 14, fontWeight: 700, color: '#a6a8ba', paddingHorizontal: 16, paddingVertical: 5,marginBottom:16 }}>{item.designation}</Text>
                        <View style={{ paddingHorizontal: 16, flexDirection: 'row', gap: 8, flexWrap: 'wrap'}}>
                            <Text style={{ paddingVertical: 2, paddingHorizontal: 8, borderWidth: 1, borderColor: '#efefef',borderRadius:32 }}>Java</Text>
                            <Text style={{ paddingVertical: 2, paddingHorizontal: 8, borderWidth: 1, borderColor: '#efefef',borderRadius:32 }}>Developer</Text>
                            <Text style={{ paddingVertical: 2, paddingHorizontal: 8, borderWidth: 1, borderColor: '#efefef',borderRadius:32 }}>.Net</Text>
                            <Text style={{ paddingVertical: 2, paddingHorizontal: 8, borderWidth: 1, borderColor: '#efefef',borderRadius:32 }}>CSS</Text>
                        </View>
                        <View style={{padding:16}}>
                        <Text style={{textAlign:'center',backgroundColor:'#2960dd',paddingVertical:8,paddingHorizontal:16,color:'white',fontSize:16,borderRadius:5}}>View Profile</Text>
                        </View>
                    </View>
                ))}
                
                <View style={{ backgroundColor: '#ffd8bc', borderRadius: 5, marginBottom: 16 }}>
                    <View style={{ flexDirection: 'row', gap: 5, backgroundColor: '#fe7e21', width: '80%', padding: 16, borderRadius: 4 }}>
                        <Octicons name='star' size={16} style={{ color: 'white', marginTop: 3 }} />
                        <Text style={{ fontSize: 16, color: 'white', fontWeight: 600 }}>All Technicians</Text>
                    </View>
                </View>
                {tech.map((item,index)=>(
                    <View key={index} style={{ flex: 1, borderColor: 'rgba(0,0,0,0.2)', borderWidth: 0, backgroundColor: "white", shadowColor: 'rgba(0,0,0,1)', shadowOpacity: 0.3, shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, borderRadius: 8,marginBottom:16 }}>
                        <View key={item} style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16, }}>
                            <Image source={item.img} style={{ width: 50, height: 50, borderWidth: 0, borderRadius: 50 }} />
                            <FontAwesome name='bookmark' size={15} style={{ backgroundColor: 'orange', padding: 8, color: 'white', height: 30, borderRadius: 5 }} />
                        </View>
                        <Text style={{ fontSize: 20, fontWeight: 700, paddingHorizontal: 16, paddingVertical: 8 }}>{item.name}</Text>
                        <Text style={{ fontSize: 14, fontWeight: 700, color: '#a6a8ba', paddingHorizontal: 16, paddingVertical: 5,marginBottom:16 }}>{item.designation}</Text>
                        <View style={{ paddingHorizontal: 16, flexDirection: 'row', gap: 8, flexWrap: 'wrap'}}>
                            <Text style={{ paddingVertical: 2, paddingHorizontal: 8, borderWidth: 1, borderColor: '#efefef',borderRadius:32 }}>Java</Text>
                            <Text style={{ paddingVertical: 2, paddingHorizontal: 8, borderWidth: 1, borderColor: '#efefef',borderRadius:32 }}>Developer</Text>
                            <Text style={{ paddingVertical: 2, paddingHorizontal: 8, borderWidth: 1, borderColor: '#efefef',borderRadius:32 }}>.Net</Text>
                            <Text style={{ paddingVertical: 2, paddingHorizontal: 8, borderWidth: 1, borderColor: '#efefef',borderRadius:32 }}>CSS</Text>
                        </View>
                        <View style={{padding:16}}>
                        <Text style={{textAlign:'center',backgroundColor:'#2960dd',paddingVertical:8,paddingHorizontal:16,color:'white',fontSize:16,borderRadius:5}}>View Profile</Text>
                        </View>
                    </View>
                ))}
              
                <View style={{ backgroundColor: '#c8f1f1', borderRadius: 5, marginBottom: 16 }}>
                    <View style={{ flexDirection: 'row', gap: 5, backgroundColor: '#48d0d0', width: '80%', padding: 16, borderRadius: 4 }}>
                        <Octicons name='star' size={16} style={{ color: 'white', marginTop: 3 }} />
                        <Text style={{ fontSize: 16, color: 'white', fontWeight: 600 }}>All Technicians</Text>
                    </View>
                </View>
                {techtwo.map((item,index)=>(
                    <View key={index} style={{ flex: 1, borderColor: 'rgba(0,0,0,0.2)', borderWidth: 0, backgroundColor: "white", shadowColor: 'rgba(0,0,0,1)', shadowOpacity: 0.3, shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, borderRadius: 8,marginBottom:16 }}>
                        <View key={item} style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16, }}>
                            <Image source={item.img} style={{ width: 50, height: 50, borderWidth: 0, borderRadius: 50 }} />
                            <FontAwesome name='bookmark' size={15} style={{ backgroundColor: 'orange', padding: 8, color: 'white', height: 30, borderRadius: 5 }} />
                        </View>
                        <Text style={{ fontSize: 20, fontWeight: 700, paddingHorizontal: 16, paddingVertical: 8 }}>{item.name}</Text>
                        <Text style={{ fontSize: 14, fontWeight: 700, color: '#a6a8ba', paddingHorizontal: 16, paddingVertical: 5,marginBottom:16 }}>{item.designation}</Text>
                        <View style={{ paddingHorizontal: 16, flexDirection: 'row', gap: 8, flexWrap: 'wrap'}}>
                            <Text style={{ paddingVertical: 2, paddingHorizontal: 8, borderWidth: 1, borderColor: '#efefef',borderRadius:32 }}>Java</Text>
                            <Text style={{ paddingVertical: 2, paddingHorizontal: 8, borderWidth: 1, borderColor: '#efefef',borderRadius:32 }}>Developer</Text>
                            <Text style={{ paddingVertical: 2, paddingHorizontal: 8, borderWidth: 1, borderColor: '#efefef',borderRadius:32 }}>.Net</Text>
                            <Text style={{ paddingVertical: 2, paddingHorizontal: 8, borderWidth: 1, borderColor: '#efefef',borderRadius:32 }}>CSS</Text>
                        </View>
                        <View style={{padding:16}}>
                        <Text style={{textAlign:'center',backgroundColor:'#2960dd',paddingVertical:8,paddingHorizontal:16,color:'white',fontSize:16,borderRadius:5}}>View Profile</Text>
                        </View>
                    </View>
                ))}
                </View>
        </ScrollView>
    )
}

export default Favourites
