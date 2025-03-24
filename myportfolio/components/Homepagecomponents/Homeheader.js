import React from 'react';
import Smallintro from './Smallintro';
import Import from '../../Globalimports/Imports';
import Darkandlightmodebutton from './Darkandlightmodebutton';

const Homeheader = ({ palete, updatetheme, handledarkmode, animatedIndicatorStyle, darkmode, setisdarkmode, handledownload, handleScrollToEnd }) => {
    return (

        <Import.View>
            <Import.ImageBackground source={require('../../Images/bgdark.jpg')}>
                <Import.View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, padding: 5, borderRadius: 25, marginHorizontal: Import.Theme.distancebetweenmobedges.marginHorizontal, backgroundColor: '#d6b9fa', marginTop: 8 }}>
                    <Import.View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                        <Import.Image source={require('../../Images/mlogo.jpg')} resizeMode='cover' style={{ width: 30, height: 30, borderRadius: 50, borderWidth: 1 }} />
                        <Import.Text style={[Import.Theme.h1, { fontSize: 16, fontStyle: "italic", fontWeight: "bold" }]}>Mohana Rao Duba</Import.Text>
                    </Import.View>
                    <Import.View style={{ borderWidth: 1, borderRadius: 50, backgroundColor: '#000000' }}>
                        <Darkandlightmodebutton handledarkmode={handledarkmode} animatedIndicatorStyle={animatedIndicatorStyle} darkmode={darkmode} setisdarkmode={setisdarkmode} />
                    </Import.View>
                </Import.View>
                <Smallintro handledownload={handledownload} handleScrollToEnd={handleScrollToEnd} palete={palete} />
            </Import.ImageBackground>
        </Import.View>
    );
}

export default Homeheader;

