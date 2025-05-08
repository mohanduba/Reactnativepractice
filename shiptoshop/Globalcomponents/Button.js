import React from "react";
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const Button = ({ title, activeopacity, onPress, color, backgroundcolor, borderRadius, paddingHorizontal, paddingVertical, size, textAlign, fontWeight, disabled, fontFamily, loading, indicatorcolor }) => {
  return (
    <View style={{ backgroundColor: backgroundcolor, borderRadius: borderRadius }}>
      <TouchableOpacity disabled={disabled} accessibilityRole="button" accessible={true} onPress={onPress} activeOpacity={activeopacity} >
        <View style={styles.Buttontextcontainer}>
          {loading ? (<View style={{ flex: 1, zIndex: -1, justifyContent: 'center', alignItems: 'center', paddingVertical: paddingVertical }}>
            <ActivityIndicator size="small" color={indicatorcolor} />
          </View>) :
            (<Text style={{ color: color, textAlign: textAlign, paddingVertical: paddingVertical, paddingHorizontal: paddingHorizontal, fontSize: size, fontWeight: fontWeight, fontFamily: fontFamily, }} >{title}</Text>)}
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Button;
const styles = StyleSheet.create({
  Buttontextcontainer: { marginHorizontal: 10, marginVertical: 5, alignItems: "center", justifyContent: "center", },
});