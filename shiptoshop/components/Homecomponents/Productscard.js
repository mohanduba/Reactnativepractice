import React from "react";
import Import from "../../Globalimports/Imports";


const Productscard = ({ filteredproducts, handleAddToCart, cartItems, handleRemove }) => {
    console.log('i am filteredaa', filteredproducts)
    const renderItem = ({ item }) => (
        <Import.View style={{ width: "49%", marginBottom: 12, borderRadius: 8, flexDirection: "column", overflow: "hidden", borderColor: 'rgba(61, 180, 230,0.2)', borderWidth: 1, backgroundColor: "#fff", shadowColor: 'rgba(61, 180, 230,0.2)', shadowOpacity: 0.3, shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, }} >
            {/* p_image */}
            <Import.View>
                <Import.Image source={{ uri: item?.thumbnail }} style={{ height: 160, width: "100%", resizeMode: "contain", borderRadius: 8 }} />
            </Import.View>
            {/* discpercentae */}
            <Import.View style={{ flex: 1, position: "absolute", borderColor: 'rgba(61, 180, 230,0.2)', borderWidth: 1, backgroundColor: "rgba(61, 180, 230,1)", shadowColor: 'rgba(61, 180, 230,1)', shadowOpacity: 0.3, shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, borderRadius: 8, right: 0 }}>
                <Import.Text style={[Import.Theme.h1, { color: "#fff", fontSize: 16, paddingHorizontal: 4, paddingVertical: 2 }]}>2.9%</Import.Text>
            </Import.View>
            {/* p_details */}
            <Import.View style={{ flexDirection: "column", marginHorizontal: 6 }}>
                <Import.View><Import.Text style={Import.Theme.h1} ellipsizeMode="tail" numberOfLines={2}>{item?.title}</Import.Text></Import.View>
                {/* rating */}
                <Import.View style={{ flexDirection: "row", marginVertical: 2 }}>
                    {Array.from({ length: 5 }, (_, index) => (<Import.AntDesign key={index} name={"star"} size={16} color={index < Math.round(item?.rating) ? "gold" : "grey"} />
                    ))}
                </Import.View>
                <Import.View style={{ marginVertical: 4 }}><Import.Text style={Import.Theme.h3} numberOfLines={2} ellipsizeMode="tail">{item?.description}</Import.Text></Import.View>
            </Import.View>
            {/* price */}
            <Import.View style={{ flexDirection: "row", backgroundColor: "rgba(61, 180, 230,0.1)", justifyContent: "center", alignItems: "center", height: 32, width: "80%", borderColor: "rgba(61, 180, 230,1)", borderWidth: 1, borderRadius: 50, marginBottom: "40%", marginHorizontal: 6, marginTop: 4 }}>
                <Import.Text style={[Import.Theme.h1, { fontSize: 16 }]}>Price</Import.Text>
                <Import.View style={{ marginLeft: 8 }}><Import.Text style={[Import.Theme.h1, { fontSize: 16 }]}>₹{item?.price}</Import.Text></Import.View>
            </Import.View>
            {/* Addcartbutton */}
            <Import.View style={{ position: "absolute", bottom: 0, left: 0, right: 0, }}>
                <Import.Button
                    onPress={() =>
                        cartItems?.some((reader) => reader.id === item?.id)
                            ? handleRemove(item?.id)
                            : handleAddToCart(item)
                    }
                    title={
                        cartItems?.some((reader) => reader.id === item?.id)
                            ? "Remove"
                            : "Add Cart"
                    }
                    textAlign={"center"}
                    paddingVertical={10}
                    paddingHorizontal={0}
                    color={"#fff"}
                    backgroundcolor={"#3aa0d4"}
                    size={16}
                    fontWeight={Import.Theme.buttons_fontstyle.fontWeight}
                    fontFamily={Import.Theme.h1.fontFamily}
                />
            </Import.View>
        </Import.View>
    )
    return (
        <Import.View style={{ marginHorizontal: 8 }}>
            <Import.FlatList
                data={filteredproducts}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: "space-between", }}
                renderItem={renderItem}
                horizontal={false}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: "74%" }}
            />
        </Import.View>
    )
}

export default Productscard;