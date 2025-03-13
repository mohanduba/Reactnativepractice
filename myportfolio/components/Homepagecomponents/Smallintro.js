import React from 'react'
import { Image, TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Import from '../../Globalimports/Imports';
import { experience } from '../../Globalcomponents/Helper';

const Smallintro = ({ palete, handledownload, handleScrollToEnd }) => {
    return (
        <View style={{ marginTop: 30 }}>
            <Text style={[Import.Theme.h1, { textAlign: 'center', fontSize: 16, fontWeight: "600", color: '#ffffff', fontFamily: Import.Theme.h2.fontFamily }]}>🤘 Hello! I'm<Text style={{ color: Import.colors?.[palete.mode].iconcolor, fontFamily: Import.Theme.h1.fontFamily, fontStyle: "italic", fontWeight: "bold", fontSize: 16, }}> Mohana Rao Duba</Text></Text>
            <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: 500, marginTop: 10, color: '#ffffff', fontFamily: Import.Theme.h2.fontFamily }}>Frontend Developer</Text>
            <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: 500, marginTop: 10, color: '#ffffff', fontFamily: Import.Theme.h2.fontFamily }}>With <Text style={{ color: Import.colors?.[palete.mode].iconcolor, fontFamily: Import.Theme.h1.fontFamily, fontStyle: "italic", fontWeight: "bold", fontSize: 16, }}>{experience()} Years</Text> of experience</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, marginVertical: 10 }}>


                <Import.TouchableOpacity onPress={handledownload} style={{ flexDirection: 'row', gap: 1, alignItems: 'center', borderWidth: 1, paddingHorizontal: 8, backgroundColor: 'rgba(255, 165, 0, 0.4)', borderRadius: 25, borderColor: 'orange' }}>
                    <AntDesign name='download' color={Import.colors?.[palete.mode].iconcolor} />
                    <Import.Button
                        onPress={handledownload}
                        fontFamily={Import.Theme.buttons_fontstyle.fontFamily}
                        fontWeight={Import.Theme.buttons_fontstyle.fontWeight}
                        title={"Resume"}
                        color={Import.colors?.[palete.mode].iconcolor}
                        borderRadius={24}
                        paddingVertical={4}
                        size={Import.Theme.buttons_fontstyle.fontSize}
                        textAlign={"center"}
                    />
                </Import.TouchableOpacity>


                <Import.View style={{ borderWidth: 1, backgroundColor: 'orange', borderRadius: 25, borderColor: 'orange' }}>
                    <Import.Button
                        onPress={handleScrollToEnd}
                        fontFamily={Import.Theme.buttons_fontstyle.fontFamily}
                        fontWeight={Import.Theme.buttons_fontstyle.fontWeight}
                        title={"Hire Me"}
                        color={'#fff'}
                        borderRadius={24}
                        paddingVertical={4}
                        paddingHorizontal={"4.5%"}
                        size={Import.Theme.buttons_fontstyle.fontSize}
                        textAlign={"center"}
                    />
                </Import.View>
            </View>
            <View style={{ marginVertical: 16, alignItems: 'center' }}>
                <Image source={require('../../assets/images/user-11.jpg')} style={{ width: 200, height: 200, borderRadius: 100 }} />
            </View>
        </View>
    )
}

export default Smallintro;