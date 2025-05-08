import React from "react";
import Import from "../Globalimports/Imports";


const Logowithtext = ({ logo, text, active, handleheadertab }) => {
    return (
        <Import.TouchableOpacity onPress={() => handleheadertab(text)} style={{ flexDirection: "row", backgroundColor: active === text ? "rgba(61, 180, 230,0.8)" : "#fff", borderRadius: 100, alignItems: "center", overflow: "hidden", paddingHorizontal: 8, marginTop: 6, marginRight: 6, paddingVertical: 4, borderColor: 'rgba(61, 180, 230,0.2)', borderWidth: 1, shadowColor: 'rgba(61, 180, 230,0.1)', shadowOpacity: 0.3, shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, }}>
            <Import.View style={{ width: 30, overflow: "hidden", justifyContent: "center" }}>
                <Import.Image source={logo} style={{ width: 30, height: 30, resizeMode: "cover", borderRadius: 100 }} />
            </Import.View>
            <Import.View style={{ marginHorizontal: 8 }}>
                <Import.Text style={[Import.Theme.h1, { fontSize: 14, color: active === text ? "#fff" : "rgba(61, 180, 230,1)" }]}>{text}</Import.Text>
            </Import.View>
        </Import.TouchableOpacity>
    )
}

export default Logowithtext;