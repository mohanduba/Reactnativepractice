import React from "react";
import Import from "../../Globalimports/Imports";



const Footer = ({ palete }) => {
    return (
        <Import.View style={styles.container}>
            <Import.View>
                <Import.Text style={[Import.Theme.h2,{color:"#000",textAlign:"center"}]}>Thank You For Visiting My Portfolio</Import.Text>
            </Import.View>
        </Import.View>
    )
}

export default Footer;

const styles = Import.StyleSheet.create({
    container: { flex: 1, padding: 8, borderColor: 'rgba(0,0,0,0.2)', borderWidth: 1, marginBottom: 30,marginTop:8, backgroundColor: Import.colors.light.iconcolor, shadowColor: 'rgba(0,0,0,1)', shadowOpacity: 0.3, shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, borderRadius: 100, marginHorizontal: Import.Theme.distancebetweenmobedges.marginHorizontal },
})