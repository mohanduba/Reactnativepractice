import React, { useRef, useState } from "react";
import Import from "../../Globalimports/Imports";


const education = [
    {
        year: "2019-2023",
        edutech: "Graduation",
        grp1: "Electronics and Communication Engineering",
        category: "Bachelor Of Technology",
        name: "Raghu Engineering College",
        cgpa: "8.03",
        location: "Visakhapatnam, Andhra Pradesh, India",
    },
    {
        year: "2017-2019",
        edutech: "Intermediate",
        grp1: "Maths, Physics And Chemistry (M.P.C)",
        category: "Board of Intermediate Andhra Pradesh",
        name: "Narayana Junior College",
        cgpa: "9.5",
        location: "Visakhapatnam, Andhra Pradesh, India",
    },
    {
        year: "2016-2017",
        edutech: "Schooling",
        grp1: "Tenth standard",
        category: "Board Of Secondary Education Andhra Pradesh",
        name: "Akshara School",
        cgpa: "9.0",
        location: "Visakhapatnam, Andhra Pradesh, India",
    },
];

const Education = ({ palete }) => {
    const [activeindex, setactiveindex] = useState(0)
    const flatlistred = useRef();

    const handleScroll = (event) => {
        const offsetX = event.nativeEvent.contentOffset.x;
        const screenWidth = Import.windowWidth - Import.Theme.distancebetweenmobedges.marginHorizontal * 2;
        const currentIndex = Math.round(offsetX / screenWidth); 
        setactiveindex(currentIndex);
    };
    return (
        <Import.View style={{ marginTop: 10, marginBottom: 10 }}>
            <Import.View style={{ marginBottom: 12 }}><Import.Text style={{ textAlign: "center", fontSize: 18, color: Import.colors?.[palete.mode].iconcolor, fontFamily: Import.Theme.h1.fontFamily }}>
                Education
            </Import.Text></Import.View>

            <Import.FlatList
                data={education}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                ref={flatlistred}
                onScroll={handleScroll}
                decelerationRate="fast"
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <Import.View
                        style={{
                            borderColor: 'rgba(0,0,0,0.2)',
                            borderWidth: 0.5,
                            padding: 8,
                            borderRadius: 10,
                            marginHorizontal: Import.Theme.distancebetweenmobedges.marginHorizontal,
                            width: Import.windowWidth - Import.Theme.distancebetweenmobedges.marginHorizontal * 2, // Fixed width with margins
                            backgroundColor: "#fff",
                            shadowColor: 'rgba(0,0,0,1)', shadowOpacity: 0.3, shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2,
                        }}
                    >
                        <Import.View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <Import.View
                                style={{
                                    flexDirection: "row",
                                    gap: 5,
                                    borderWidth: 1,
                                    borderRadius: 16,
                                    padding: 5,
                                    backgroundColor: "#000000",
                                }}
                            >
                                <Import.Entypo name="calendar" size={20} color={Import.colors?.[palete.mode].iconcolor} />
                                <Import.Text style={[Import.Theme.h2, { color: Import.colors?.[palete.mode].iconcolor }]}>{item.year}</Import.Text>
                            </Import.View>
                            <Import.View
                                style={{
                                    flexDirection: "row",
                                    gap: 5,
                                    borderWidth: 1,
                                    borderRadius: 16,
                                    padding: 5,
                                    backgroundColor: "#000000",
                                }}
                            >
                                <Import.Ionicons name="school" size={20} color={Import.colors?.[palete.mode].iconcolor} />
                                <Import.Text style={[Import.Theme.h2, { color: Import.colors?.[palete.mode].iconcolor }]}>{item.edutech}</Import.Text>
                            </Import.View>
                        </Import.View>
                        <Import.View style={{ marginTop: 10, marginLeft: 3 }}><Import.Text style={{ fontSize: 16, fontWeight: "600", fontFamily: Import.Theme.h2.fontFamily }}>
                            {item.category}
                        </Import.Text></Import.View>
                        <Import.View style={{ marginVertical: 10, marginBottom: 8 }}>
                            {item.grp1 && (
                                <Import.Text
                                    style={{
                                        backgroundColor: "#e3d8e2",
                                        paddingVertical: 8,
                                        paddingHorizontal: 16,
                                        borderRadius: 25,
                                        alignSelf: "flex-start",
                                        fontFamily: Import.Theme.h2.fontFamily,
                                        fontSize: 12
                                    }}
                                >
                                    {item.grp1}
                                </Import.Text>
                            )}

                            <Import.View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center", justifyContent: "center",
                                    borderWidth: 1,
                                    borderRadius: 16,
                                    padding: 5,
                                    marginTop: 10,
                                    backgroundColor: "#000000",
                                    width: "40%"
                                }}
                            >
                                <Import.Foundation name="book-bookmark" size={20} color={Import.colors?.[palete.mode].iconcolor} />
                                <Import.Text style={[Import.Theme.h2, { color: Import.colors?.[palete.mode].iconcolor }]}> CGPA : {item.cgpa}</Import.Text>
                            </Import.View>
                            <Import.View
                                style={{
                                    flex:1,
                                    flexDirection: "row",
                                    gap: 5,
                                    alignItems: "center",
                                    marginVertical: 8,
                                }}
                            >
                                <Import.View style={{
                                    backgroundColor: "#35353d",
                                    width: 30, height: 30,
                                    borderRadius: 100,
                                    alignItems: "center", justifyContent: "center"
                                }}><Import.FontAwesome6
                                        name="building"
                                        size={18}
                                        color={Import.colors?.[palete.mode].iconcolor}

                                    /></Import.View>
                                <Import.Text style={{
                                    fontFamily: Import.Theme.h2.fontFamily,
                                    fontSize: 14,flex:1,
                                }}>{item.name}</Import.Text>
                            </Import.View>
                            <Import.View style={{ flexDirection: "row",flex:1, gap: 5, alignItems: "center" }}>
                                <Import.View style={{
                                    backgroundColor: "#35353d",
                                    width: 30, height: 30,
                                    borderRadius: 100,
                                    alignItems: "center", justifyContent: "center"
                                }}><Import.Entypo
                                        name="location-pin"
                                        size={20}
                                        color={Import.colors?.[palete.mode].iconcolor}
                                    /></Import.View>
                                <Import.Text style={{
                                    fontFamily: Import.Theme.h2.fontFamily,
                                    fontSize: 14,flex:1
                                }}>{item.location}</Import.Text>
                            </Import.View>
                        </Import.View>
                    </Import.View>
                )}
            />

            <Import.View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                {education.map?.((_, index) => (
                    <Import.Entypo key={index} name="dot-single" color={activeindex === index ? Import.colors?.[palete.mode].iconcolor : palete.mode === "dark" ? "#fff" : "#000"} size={28} />
                ))}
            </Import.View>
        </Import.View>
    );
};

export default Education;
