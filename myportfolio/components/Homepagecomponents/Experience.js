import React, { useRef, useState } from "react";
import Import from "../../Globalimports/Imports";


const Experience = ({ palete, expdata }) => {


    return (
        <Import.View style={{ marginTop: 0, }}>
            <Import.View style={{ marginBottom: 12 }}><Import.Text style={{ textAlign: "center", fontSize: 18, color: Import.colors?.[palete.mode].iconcolor, fontFamily: Import.Theme.h1.fontFamily }}>Experience</Import.Text></Import.View>

            {expdata?.length > 0 ? expdata?.map((item, index) => (
                <Import.View style={styles.container} key={index}>
                    {/* header */}
                    <Import.View style={{ flex: 1, flexDirection: "row", gap: 8, backgroundColor: "#000", padding: 4, borderRadius: 50, alignItems: "center" }}>

                        {/* company logo  */}
                        {item.logo !== "" && <Import.View style={styles.imgcontainer}>
                            <Import.Image source={{ uri: item.logo }} style={styles.Imgsty} />
                        </Import.View>}
                        {/* company name and location */}
                        <Import.View style={{ flex: 1, flexDirection: "column", marginLeft: item.logo !== "" ? 0 : "8%" }}>
                            <Import.View><Import.Text style={[Import.Theme.h1, { color: Import.colors?.[palete.mode].iconcolor, fontSize: 14 }]}>{item?.name}</Import.Text></Import.View>
                            <Import.View style={{ flexDirection: "row", gap: 5, alignItems: "center" }} >
                                <Import.View style={{ backgroundColor: "#35353d", width: 20, height: 20, borderRadius: 100, alignItems: "center", justifyContent: "center" }}><Import.Entypo name="location-pin" size={14} color={Import.colors?.[palete.mode].iconcolor} /></Import.View>
                                <Import.Text style={{ fontFamily: Import.Theme.h2.fontFamily, fontSize: 12, color: "#fff" }}>{item.location}</Import.Text>
                            </Import.View>
                        </Import.View>

                    </Import.View>

                    {/* time period */}
                    <Import.View
                        style={{
                            flexDirection: "row",
                            gap: 5,
                            marginTop: 8, marginLeft: 4,
                            alignItems: "center",
                            borderRadius: 16,
                            paddingHorizontal: 8,
                            paddingVertical: 5,
                            backgroundColor: "#e3d8e2",
                            alignSelf: "flex-start",
                        }}
                    >
                        <Import.View><Import.Entypo name="calendar" size={20} color={'#000'} /></Import.View>
                        <Import.View><Import.Text style={[Import.Theme.h1, { color: "#000", fontSize: 14 }]}>{`${item?.startyear} - ${item?.endyear}`}</Import.Text></Import.View>
                    </Import.View>


                    {/* role */}
                    <Import.View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                        <Import.View style={styles.imgcontainer}><Import.Image source={{ uri: "https://avatars.githubusercontent.com/u/159102980?v=4" }} style={[styles.Imgsty, { borderRadius: 100 }]} /></Import.View>
                        <Import.View><Import.Text style={Import.Theme.h2}>{item?.role}</Import.Text></Import.View>
                    </Import.View>

                    {/* role des */}

                    {item?.des?.map((mark, index) => (
                        <Import.View key={index} style={{ flex: 1, flexDirection: "row", gap: 4, paddingHorizontal: 8 }}>
                            <Import.View style={{ marginTop: 2 }}><Import.FontAwesome name="hand-o-right" color={Import.colors?.[palete.mode].iconcolor} size={14} /></Import.View>
                            <Import.View style={{flex:1}}><Import.Text style={[Import.Theme.h2, { fontSize: 14 }]}>{mark}</Import.Text></Import.View>
                        </Import.View>
                    ))}


                </Import.View>
            )) : null}
        </Import.View>



    );
};

export default Experience;

const styles = Import.StyleSheet.create({
    container: { flex: 1, padding: 8, borderColor: 'rgba(0,0,0,0.2)', borderWidth: 1, marginBottom: 20, backgroundColor: "white", shadowColor: 'rgba(0,0,0,1)', shadowOpacity: 0.3, shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, borderRadius: 8, marginHorizontal: Import.Theme.distancebetweenmobedges.marginHorizontal },
    Imgsty: { width: 40, height: 40, resizeMode: "contain" },
    imgcontainer: { width: 50, height: 50, borderRadius: 100, backgroundColor: "#fff", alignItems: "center", justifyContent: "center", overflow: "hidden" }
})
