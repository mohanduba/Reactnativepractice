import React, { useContext } from 'react';
import { AntDesign, Entypo, Ionicons, MaterialIcons, FontAwesome5, FontAwesome6, Feather, MaterialCommunityIcons, Octicons, Fontisto, FontAwesome, FontAwesome5Brands, EvilIcons, Foundation, SimpleLineIcons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, TouchableOpacity, View, Animated, Platform, ScrollView, SafeAreaView, Linking, FlatList, ImageBackground, TextInput, Modal, Alert, Pressable, KeyboardAvoidingView, ActivityIndicator, } from "react-native";
import { Theme } from '../Globalstyles/Theme';
import Button from '../Globalcomponents/Button';
import { windowHeight, windowWidth } from '../utils/Dimensions.js';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../Globalcolors/colors.js';



const Import = {
    AntDesign, Entypo, Ionicons, MaterialIcons, FontAwesome5, Feather, MaterialCommunityIcons, Octicons, FontAwesome6, Fontisto, FontAwesome, FontAwesome5Brands, Foundation, SimpleLineIcons,
    Image, StyleSheet, Text, TouchableOpacity, View, Animated, Platform, ScrollView, SafeAreaView, Linking, FlatList, ImageBackground, TextInput, Modal, Alert, EvilIcons, Button, Pressable, KeyboardAvoidingView, ActivityIndicator,
    Theme, colors,
    windowHeight, windowWidth,
    LinearGradient,
}
export default Import;