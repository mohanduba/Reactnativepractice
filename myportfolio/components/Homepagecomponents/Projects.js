import React from "react";
import Import from "../../Globalimports/Imports";
import Logowithtext from "../../Globalcomponents/Logowithtext";




const Projects = ({ palete, prodata }) => {

    return (
        <Import.View style={{ marginBottom: 10 }}>
            <Import.View style={{ marginBottom: 18 }}><Import.Text style={{ textAlign: "center", fontSize: 18, color: Import.colors?.[palete.mode].iconcolor, fontFamily: Import.Theme.h1.fontFamily }}>Projects</Import.Text></Import.View>

            {prodata?.length > 0 ? prodata?.map((item, index) => (
                <Import.View key={index} style={styles.container}>
                    <Import.ImageBackground source={require('../../Images/bg.png')} style={{ padding: 8 }}>
                        <Import.View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", backgroundColor: "#000", borderRadius: 100, paddingHorizontal: 12, paddingVertical: 12 }}>
                            <Import.View style={{ flex: 1, flexDirection: "column" }}>
                                <Import.View>
                                    <Import.Text style={[Import.Theme.h1, { color: "#fff", }]}>{item?.pname}</Import.Text>
                                </Import.View>
                                <Import.View>
                                    <Import.Text style={[Import.Theme.h2, { color: "#fff", fontSize: 12, fontStyle: "italic" }]}>{item?.ptype}</Import.Text>
                                </Import.View>
                            </Import.View>

                            <Import.View>
                                <Import.Text style={[Import.Theme.h2, { color: "#fff", fontSize: 12, fontStyle: "italic", fontWeight: "800" }]}>{item?.startdate} – {item?.enddate}</Import.Text>
                            </Import.View>


                        </Import.View>

                        <Import.View style={{ marginBottom: 8, marginTop: 6 }}><Import.Text style={{ fontSize: 18, color: "#000", fontFamily: Import.Theme.h1.fontFamily }}>Technologies</Import.Text></Import.View>
                        <Import.View style={{ flex: 1, flexDirection: "row", marginHorizontal: Import.Theme.distancebetweenmobedges.marginHorizontal, flexWrap: "wrap", justifyContent: "center" }}>
                            {item.techstack?.map((item, index) => (
                                <Logowithtext key={index} text={item.label} logo={item.logo} palete={palete} />
                            ))}
                        </Import.View>

                        <Import.View style={{ marginBottom: 4, marginTop: 6 }}><Import.Text style={{ fontSize: 18, color: "#000", fontFamily: Import.Theme.h1.fontFamily }}>Description</Import.Text></Import.View>

                        <Import.View>
                            <Import.Text style={[Import.Theme.h2, { color: "#000", lineHeight: 22.5 }]}><Import.Text style={{ fontStyle: "italic", color: "#000", fontSize: 14, fontFamily: Import.Theme.h1.fontFamily, fontWeight: "bold" }}>{item?.pname}</Import.Text> {item?.pdes}</Import.Text>
                        </Import.View>
                    </Import.ImageBackground>
                </Import.View>
            )) : null}


        </Import.View>
    )
}

export default Projects;

const styles = Import.StyleSheet.create({
    container: { flex: 1, borderColor: 'rgba(0,0,0,0.2)', overflow: "hidden", borderWidth: 1, marginTop: 2, marginBottom: 8, backgroundColor: "white", shadowColor: 'rgba(0,0,0,1)', shadowOpacity: 0.3, shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, borderRadius: 12, marginHorizontal: Import.Theme.distancebetweenmobedges.marginHorizontal }
})