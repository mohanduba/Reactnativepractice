import React from "react";
import Import from "../../Globalimports/Imports";

const Cartfooter = ({ totalprice, handlepayment }) => {
    return (
        <Import.TouchableOpacity onPress={handlepayment} style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: "#3aa0d4", marginBottom: "25%", paddingVertical: 14, marginHorizontal: Import.Theme.distancebetweenmobedges.marginHorizontal, borderRadius: 8, paddingHorizontal: 6 }}>
            <Import.View>
                <Import.Text style={[Import.Theme.h1, { color: "#fff" }]}>Checkout</Import.Text>
            </Import.View>
            <Import.View>
                <Import.Text style={[Import.Theme.h1, { color: "#fff" }]}>Total ₹{totalprice()}</Import.Text>
            </Import.View>
        </Import.TouchableOpacity>
    )
}

export default Cartfooter;