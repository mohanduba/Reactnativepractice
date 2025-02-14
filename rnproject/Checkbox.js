import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Checkbox = () => {
  const [activeIndex,setActiveIndex] = useState([]);
  const [selectedData,setSelectedData]=useState([]);
  console.log(activeIndex);
  console.log(selectedData);
  const toggleCheckbox=(index)=>{
      setActiveIndex((prev)=>(
        prev.includes(index)? prev.filter((i)=>i!==index):[...prev,index]
      ))
  }
const handleSelectedData=()=>{
  setSelectedData(()=>activeIndex.map((index)=>sports[index].name))
}

  const sports = [
    { name: 'Cricket' },
    { name: 'Football' },
    { name: 'Basketball' },
    { name: 'Volleyball' },
  ];

  return (
    <View style={{ marginTop: 50, marginHorizontal: 30 }}>
      <Text style={{ textAlign: 'center', fontSize: 32 }}>Select Item</Text>
      <View style={{ marginTop: 30 }}>
        {sports.map((item, index) => (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              gap: 3,
              alignItems: 'center',
              marginVertical: 10,
            }}
          >
            <TouchableOpacity onPress={() => toggleCheckbox(index)}>
              <Fontisto
                name={activeIndex.includes(index) ? 'checkbox-active' : 'checkbox-passive'}
                size={18}
              />
            </TouchableOpacity>
            <Text style={{ fontSize: 18 }}>{item.name}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity style={{backgroundColor:'#6ba7cf',alignItems:'center',marginHorizontal:20,marginTop:10,padding:8}}onPress={handleSelectedData}><Text> Add {activeIndex.length > 0 ? `(${activeIndex.length})` : ''}</Text></TouchableOpacity>
    </View>
  );
};

export default Checkbox;
