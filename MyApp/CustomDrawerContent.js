import React, { useState } from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const CustomDrawerContent = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome 👋</Text>
      </View>

      {/* Regular Drawer Item */}
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => props.navigation.navigate('Welcome', {
            screen: 'Home',
          })}
      >
        <Feather name="home" size={20} style={styles.icon} />
        <Text style={styles.label}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.drawerItem}
      onPress={()=>props.navigation.navigate('Welcome', {
        screen: 'Profile',
      })}>
        <Feather name='user'size={20} style={styles.icon} />
        <Text style={styles.label}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.drawerItem}
      onPress={()=>props.navigation.navigate('Main')}>
        <Feather name='users'size={20} style={styles.icon} />
        <Text style={styles.label}>Main</Text>
      </TouchableOpacity>

      {/* Accordion Header */}
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => setIsExpanded(!isExpanded)}
      >
        <Feather name="settings" size={20} style={styles.icon} />
        <Text style={styles.label}>Settings</Text>
        <Feather
          name={isExpanded ? 'chevron-up' : 'chevron-down'}
          size={16}
          style={{ marginLeft: 'auto' }}
        />
      </TouchableOpacity>

      {/* Accordion Content */}
      {isExpanded && (
        <View style={styles.subMenu}>
          <TouchableOpacity
            style={styles.subItem}
            onPress={() => props.navigation.navigate('Main')}
          >
            <Text style={styles.subLabel}>Profile Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.subItem}
            onPress={() => alert('Notifications')}
          >
            <Text style={styles.subLabel}>Notifications</Text>
          </TouchableOpacity>
        </View>
      )}
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  icon: {
    marginRight: 15,
  },
  label: {
    fontSize: 16,
  },
  subMenu: {
    paddingLeft: 55,
    backgroundColor: '#f7f7f7',
  },
  subItem: {
    paddingVertical: 10,
  },
  subLabel: {
    fontSize: 14,
    color: '#444',
  },
});

export default CustomDrawerContent;
