import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Radio = () => {
  const [activeIndex,setActiveIndex]=useState(false);
  const toggleCheckbox=(index)=>{
    setActiveIndex(index)
  }

  const sports = [
    { name: 'Cricket' },
    { name: 'Football' }
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
                name={activeIndex===index?'radio-btn-active':'radio-btn-passive'}
                size={18}
              />
            </TouchableOpacity>
            <Text style={{ fontSize: 18 }}>{item.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Radio;
