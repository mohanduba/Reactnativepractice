import React from "react";
import Import from "../../Globalimports/Imports";
import Logowithtext from "../../Globalcomponents/Logowithtext";


const Skills = ({ palete, techskilldata, devtooldata }) => {
    console.log("Tech Skills Data:", techskilldata);
    return (
        <Import.View style={{ marginBottom: 20 }}>
            <Import.View style={{ marginBottom: 8 }}><Import.Text style={{ textAlign: "center", fontSize: 18, color: Import.colors?.[palete.mode].iconcolor, fontFamily: Import.Theme.h1.fontFamily }}>
                Skills
            </Import.Text></Import.View>

            <Import.View style={{ marginBottom: 12 }}><Import.Text style={{ textAlign: "center", fontSize: 18, color: Import.colors?.[palete.mode].iconcolor, fontFamily: Import.Theme.h1.fontFamily }}>
                Technologies I Use
            </Import.Text></Import.View>

            <Import.View style={{ flex: 1, flexDirection: "row", marginHorizontal: Import.Theme.distancebetweenmobedges.marginHorizontal, flexWrap: "wrap", justifyContent: "center" }}>
                {techskilldata?.length > 0 ? techskilldata?.map((item, index) => (
                    <Logowithtext key={index} text={item.label} logo={item.logo} palete={palete} />
                )) : <Import.Text style={[Import.Theme.h2, { color: Import.colors?.[palete.mode].h1Textcolor }]}>Technical Issue While Loading Skills...</Import.Text>}
            </Import.View>

            <Import.View style={{ marginVertical: 12, paddingHorizontal: "10%" }}><Import.Text style={{ textAlign: "center", fontSize: 18, color: Import.colors?.[palete.mode].iconcolor, fontFamily: Import.Theme.h1.fontFamily }}>
                Development & Productivity Tools I Use
            </Import.Text></Import.View>

            <Import.View style={{ flex: 1, flexDirection: "row", marginHorizontal: Import.Theme.distancebetweenmobedges.marginHorizontal, flexWrap: "wrap", justifyContent: "center" }}>
                {devtooldata?.length > 0 ? devtooldata?.map((item, index) => (
                    <Logowithtext key={index} text={item.label} logo={item.logo} palete={palete} />
                )) : <Import.Text style={[Import.Theme.h2, { color: Import.colors?.[palete.mode].h1Textcolor }]}>Technical Issue While Loading Skills...</Import.Text>}
            </Import.View>

        </Import.View>
    )
}

export default Skills;