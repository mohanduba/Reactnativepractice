import React from "react";
import Import from "../../Globalimports/Imports";

const Ordercards = ({ orders }) => {
    const renderOrderItem = ({ item, index }) => (
        <Import.View style={{ borderColor: "rgba(61, 180, 230,0.2)", borderWidth: 1, marginTop: 8, marginBottom: index === orders?.length - 1 ? "38%" : 0, backgroundColor: "white", shadowColor: "rgba(61, 180, 230,1)", shadowOpacity: 0.3, shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, borderRadius: 8, justifyContent: "center", }} >
            {/* Order Header */}
            <Import.View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomColor: "lightgrey", borderBottomWidth: 1, paddingHorizontal: 8, paddingVertical: 12, }} >
                <Import.View><Import.Text style={Import.Theme.h1}>Order_ID</Import.Text></Import.View>
                <Import.View><Import.Text style={[Import.Theme.h1, { color: "#3aa0d4" }]}>{item?.order_id}</Import.Text></Import.View>
            </Import.View>

            {/* Products List */}
            {item?.products?.map((reader, index) => (
                <Import.View key={index} style={{ flexDirection: "row", alignItems: "center", marginTop: 6, marginHorizontal: 8 }}>
                    <Import.View style={{ borderColor: "rgba(61, 180, 230,1)", borderWidth: 1, borderRadius: 8 }}>
                        <Import.Image source={{ uri: reader?.thumbnail }} style={{ height: 40, width: 40, resizeMode: "contain", borderRadius: 8 }} />
                    </Import.View>
                    <Import.View style={{ flex: 1, marginLeft: 6 }}>
                        <Import.Text style={[Import.Theme.h3, { maxWidth: "80%" }]} numberOfLines={1} ellipsizeMode="tail">{reader?.title}</Import.Text>
                    </Import.View>
                    <Import.View style={{ alignItems: "flex-end" }}>
                        <Import.Text style={Import.Theme.h3}>₹{reader?.price}</Import.Text>
                    </Import.View>
                </Import.View>
            ))}

            {/* Order Footer */}
            <Import.View style={{ flexDirection: "row", justifyContent: "space-between", borderTopColor: "lightgrey", borderTopWidth: 1, paddingHorizontal: 8, paddingVertical: 12, marginTop: 8, }} >
                <Import.View><Import.Text style={Import.Theme.h1}>Total</Import.Text></Import.View>
                <Import.View><Import.Text style={[Import.Theme.h1, { color: "#3aa0d4" }]}>₹{item?.total_amount}</Import.Text></Import.View>
            </Import.View>

            {/* Order Date and Time */}
            <Import.View style={{ alignItems: "flex-end", marginBottom: 8, marginRight: 8 }} >
                <Import.Text style={[Import.Theme.h3, { color: "grey" }]}>{item?.date.replace(/\//g, "-")} {item?.time}</Import.Text>
            </Import.View>
        </Import.View>
    );

    return (
        <Import.FlatList
            data={orders}
            keyExtractor={(item, index) => index}
            renderItem={renderOrderItem}
            showsVerticalScrollIndicator={false}
        />
    );
};

export default Ordercards;
