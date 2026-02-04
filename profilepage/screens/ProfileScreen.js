import { StatusBar } from 'expo-status-bar';
import { Button, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons, MaterialIcons, EvilIcons, FontAwesome5, Feather, AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen({ navigation }) {
  return (
    // <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri: 'https://img.freepik.com/free-photo/portrait-man-cartoon-style_23-2151134033.jpg?semt=ais_hybrid&w=740&q=80',
          }}
          resizeMode='cover'
          style={{ flex: 1, width: '100%', height: '100%' }}
        >
          {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 30 }}>
            <Ionicons name='menu' size={24} onPress={() => navigation.openDrawer()} />
            <Ionicons name='filter-sharp' size={20} />
          </View> */}

          <View style={{ flex: 1, backgroundColor: 'white', marginTop: '100%', borderTopRightRadius: 20, borderTopLeftRadius: 20, padding: 16 }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
              <View>
                <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold' }}>John Snow</Text>
                <Text>San Francisco</Text>
              </View>
              <TouchableOpacity style={{ backgroundColor: '#7cd42aff', paddingHorizontal: 12, borderRadius: 12, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Follow</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.card}>
              <View style={styles.row}>
                <View style={styles.iconBlock}>
                  <Ionicons name='chatbubble-ellipses-outline' color='#257ec7ff' size={20} />
                  <Text>Chat</Text>
                </View>
                <View style={styles.iconBlock}>
                  <MaterialIcons name='work-outline' color='#1cd5e2ff' size={20} />
                  <Text>Work</Text>
                </View>
                <View style={styles.iconBlock}>
                  <EvilIcons name='location' color='#9cc725ff' size={24} />
                  <Text>Location</Text>
                </View>
              </View>

              <View style={styles.row}>
                <View style={styles.iconBlock}>
                  <FontAwesome5 name='user-friends' color='#257ec7ff' size={18} />
                  <Text>Friends</Text>
                </View>
                <View style={styles.iconBlock}>
                  <Feather name='settings' color='#c75825ff' size={20} />
                  <Text>Settings</Text>
                </View>
                <View style={styles.iconBlock}>
                  <AntDesign name='bell' color='#25c783ff' size={20} />
                  <Text>Notifications</Text>
                </View>
              </View>
            </View>
            
          </View>
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#1f1e1eff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    borderColor: 'rgba(0,0,0,0.2)',
    backgroundColor: "white",
    shadowColor: 'rgba(0,0,0,1)',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 4,
    borderRadius: 8,
    paddingHorizontal: 30,
    marginTop: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: '#bdbbbbff',
  },
  iconBlock: {
    alignItems: 'center',
  },
});
