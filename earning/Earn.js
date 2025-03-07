import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function Earn() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Text
            style={{
              fontSize: 18,
              backgroundColor: "rgb(25 135 84)",
              padding: 8,
              color: "white",
              borderRadius: 5,
            }}
          >
            C3
          </Text>
          <View>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Ariel Hikmat
            </Text>
            <Text style={{ fontSize: 11 }}>Bid #925 / Project Name</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#c5ffe2",
            borderRadius: 32,
            paddingHorizontal: 16,
            paddingVertical: 10,
            flexDirection: "row",
            gap: 2,
          }}
        >
          <Icon name="check" size={15} />
          <Text style={{ fontSize: 12 }}>Completed</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 10,
        }}
      >
        <Text style={{ fontSize: 11 }}>Wed, July 12, 2023</Text>
        <Text style={{ fontSize: 11 }}>06:12PM</Text>
      </View>
      <View
        style={{
          borderTopWidth: 1,
          borderColor: "grey",
          borderBottomWidth: 1,
          borderColor: "#dee2e6",
          paddingVertical: 8,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{flex:1}}>
            <Text style={{ fontSize: 12,fontWeight:700,color:'#212529bf' }}>Milestone</Text>
          </View>
          <View style={{flex:0.61}}>
            <Text style={{ fontSize: 12,fontWeight:700,color:'#212529bf'  }}>Status</Text>
          </View>
          <View>
            <Text style={{ fontSize: 12,fontWeight:700,color:'#212529bf' }}>Progress</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ width:"50%", marginVertical: 8 }}>
            <Text style={{ fontSize: 12,maxWidth:'90%' }}>Initial Site Survey</Text>
          </View>
          <View style={{ width:"40%", marginVertical: 8 }}>
            <Text style={{ fontSize: 12,textAlign:"justify",maxWidth:'80%' }}>Completed</Text>
          </View>
          <View style={{width:"10%", marginVertical: 8 }}>
            <Text style={{ fontSize: 12 }}>100%</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ width:"50%", marginVertical: 8 }}>
            <Text style={{ fontSize: 12,maxWidth:'90%' }}>Network Cable Installation</Text>
          </View>
          <View style={{  width:"40%", marginVertical: 8  }}>
            <Text style={{ fontSize: 12,textAlign:"justify",maxWidth:'80%' }}>In Progress</Text>
          </View>
          <View style={{ width:"10%", marginVertical: 8 }}>
            <Text style={{ fontSize: 12 }}>75%</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{  width:"50%", marginVertical: 8 }}>
            <Text style={{ fontSize: 12,maxWidth:'90%' }}>Server Room Setup</Text>
          </View>
          <View style={{  width:"40%", marginVertical: 8 }}>
            <Text style={{ fontSize: 12,textAlign:"justify",maxWidth:'80%' }}>Not Started</Text>
          </View>
          <View style={{ width:"10%", marginVertical: 8 }}>
            <Text style={{ fontSize: 12 }}>0%</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{  width:"50%", marginVertical: 8 }}>
            <Text style={{ fontSize: 12,maxWidth:'90%' }}>Workstation Configuration</Text>
          </View>
          <View style={{  width:"40%", marginVertical: 8 }}>
            <Text style={{ fontSize: 12 ,textAlign:"justify",maxWidth:'80%'}}>Not Started</Text>
          </View>
          <View style={{ width:"10%", marginVertical: 8 }}>
            <Text style={{ fontSize: 12 }}>0%</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{  width:"50%", marginVertical: 8 }}>
            <Text style={{ fontSize: 12,maxWidth:'95%' }}>Security Systems Installation</Text>
          </View>
          <View style={{  width:"40%", marginVertical: 8 }}>
            <Text style={{ fontSize: 12,textAlign:"justify",maxWidth:'80%'}}>Scheduled</Text>
          </View>
          <View style={{ width:"10%", marginVertical: 8}}>
            <Text style={{ fontSize: 12, }}>0%</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 10,
        }}
      >
        <Text style={{ fontSize: 16 }}>Bid Value</Text>
        <Text style={{ fontSize: 16 }}>$849</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 16,
        }}
      >
        <Text
          style={{
            backgroundColor: "#f0f4f4",
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderRadius: 32,
          }}
        >
          View Details
        </Text>
        <Text
          style={{
            backgroundColor: "#2960dd",
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderRadius: 32,
            color: "white",
          }}
        >
          View Bids
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginTop: 100,
    borderWidth: 1,
    height: "auto",
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 2,
    borderColor: "#dee2e6",
    borderRadius:8
  },
  
});
