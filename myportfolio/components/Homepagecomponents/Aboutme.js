import React from "react";
import Import from "../../Globalimports/Imports";
import { experience } from "../../Globalcomponents/Helper";


const Aboutme = ({ palete, prodata }) => {
    const readers = [
        {
            numb: experience(), label: "Years", sublabel: "Experience"
        },
        {
            numb: prodata, label: "Projects", sublabel: "Completed"
        },
    ]
    return (
        <Import.View style={{ marginHorizontal: Import.Theme.distancebetweenmobedges.marginHorizontal, }}>
            <Import.View style={{ marginVertical: 18 }}>
                <Import.Text style={{ color: Import.colors?.[palete.mode].iconcolor, textAlign: 'center', fontSize: 18, fontFamily: Import.Theme.h1.fontFamily }}>About Me</Import.Text>
            </Import.View>
            <Import.View style={{ borderWidth: 1, padding: 8, borderRadius: 8, backgroundColor: '#35353d' }}>
                <Import.Text style={{ color: 'white', fontFamily: Import.Theme.h2.fontFamily, lineHeight: 22.5 }}>A highly motivated employee with a desire to take on new challenges, Strong work ethic, adaptability, and exceptional interpersonal skills. Adapt to working effectively unsupervised and quickly mastering new skills. Talented Software Developer equipped with great coding, debugging, and project management abilities. Accomplishes project goals consistently with elegant, scalable code. Works great with team members under Agile and Scrum frameworks.</Import.Text>
            </Import.View>
            <Import.View style={{ flexDirection: 'row', marginVertical: 8, alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                {readers?.map((item, index) => (
                    <Import.View key={index} style={{
                        borderWidth: 1, paddingVertical: 18, paddingHorizontal: 16, borderRadius: "30%", backgroundColor: '#35353d', shadowColor: "#000",
                        shadowOpacity: 0.3,
                        shadowOffset: { width: 0, height: 5 },
                        shadowRadius: 10,
                        elevation: 10,
                    }}>
                        <Import.Text style={{ textAlign: 'center', fontSize: 28, color: Import.colors?.[palete.mode].iconcolor, fontFamily: Import.Theme.h1.fontFamily, }}>{item.numb}</Import.Text>
                        <Import.Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 500, color: '#fff', fontFamily: Import.Theme.h1.fontFamily, }}>{item.label}</Import.Text>
                        <Import.Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 500, color: '#fff', fontFamily: Import.Theme.h1.fontFamily, }}>{item.sublabel}</Import.Text>
                    </Import.View>
                ))}

            </Import.View>
        </Import.View>
    )
}

export default Aboutme;