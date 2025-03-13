import React from "react";
import Import from "../Globalimports/Imports";


const Logowithtext = ({ logo, text, palete }) => {
    return (
        <Import.View style={{ flexDirection: "row", backgroundColor: "#fff", borderRadius: 100, alignItems: "center", overflow: "hidden", paddingHorizontal: 8, marginTop: 6, marginRight: 6,paddingVertical:4,borderColor: 'rgba(0,0,0,0.2)', borderWidth: 1,backgroundColor: "white", shadowColor: 'rgba(0,0,0,1)', shadowOpacity: 0.3, shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2,  }}>
            <Import.View style={{width:30,overflow:"hidden",justifyContent:"center"}}>
                <Import.Image source={{ uri: logo }} style={{ width: 24, height: 30, resizeMode: "contain", borderRadius: 8 }} />
            </Import.View>
            <Import.View>
                <Import.Text style={[Import.Theme.h2, { fontSize: 14 }]}>{text}</Import.Text>
            </Import.View>
        </Import.View>
    )
}

export default Logowithtext;