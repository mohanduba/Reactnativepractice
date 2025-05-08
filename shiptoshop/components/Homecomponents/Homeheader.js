import React from "react";
import Import from "../../Globalimports/Imports";
import Logowithtext from "../../Globalcomponents/Logowithtext";

const Homeheader = ({ handleheadertab, activetab }) => {
    const readers = [
        { label: "Beauty", imgrl: require('../../Images/beautycat.jpg') },
        { label: "Fragrances", imgrl: require('../../Images/fragrance.webp') },
        { label: "Furniture", imgrl: require('../../Images/furniturecat.jpg') },
        { label: "Groceries", imgrl: require('../../Images/groceries.jpg') },
    ];

    return (
        <Import.View style={{ paddingVertical: 16, borderBottomColor: "rgba(61, 180, 230,0.8)", borderBottomWidth: 0, marginHorizontal: Import.Theme.distancebetweenmobedges.marginHorizontal }}>
            <Import.FlatList
                data={readers}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Logowithtext logo={item.imgrl} active={activetab} handleheadertab={handleheadertab} text={item.label} />
                )}
            />
        </Import.View>
    );
};

export default Homeheader;
