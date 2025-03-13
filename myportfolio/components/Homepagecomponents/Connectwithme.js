import React from "react";
import Import from "../../Globalimports/Imports";
import Logowithtext from "../../Globalcomponents/Logowithtext";


const Connectwithme = ({ palete }) => {
    // const handlePhonePress = async (extractedmob) => {
    //     const phoneNumber = extractedmob;
    //     const url = `tel:+91${phoneNumber}`;
    //     const supported = await Import.Linking.canOpenURL(url);
    //     if (supported) {
    //         await Import.Linking.openURL(url);
    //     } else {
    //         Import.Alert.alert("'Unsupported URL:'", url)
    //     }
    // };

    const handleEmailPress = async (extactemail) => {
        const email = extactemail;
        const url = `mailto:${email}`;
        try {
            await Import.Linking.openURL(url);
        } catch (error) {
            console.error("Error opening email URL:", error);
            Import.Alert.alert("Unsupported URL", `Cannot open this URL: ${url}`);
        }
    };


    const handlelinkedPress = async (extactelinked) => {
        const url = extactelinked;
        try {
            await Import.Linking.openURL(url);
        } catch (error) {
            console.error("Error opening email URL:", error);
            Import.Alert.alert("Unsupported URL", `Cannot open this URL: ${url}`);
        }
    };

    return (
        <Import.View style={{ marginBottom: 10 }}>
            <Import.View style={{ marginBottom: 12 }}>
                <Import.Text
                    style={{
                        textAlign: "center",
                        fontSize: 18,
                        color: Import.colors?.[palete.mode].iconcolor,
                        fontFamily: Import.Theme.h1.fontFamily,
                    }}
                >
                    Connect With Me
                </Import.Text>
            </Import.View>

            <Import.View
                style={{
                    flex: 1,
                    flexDirection: "row",
                    marginHorizontal: Import.Theme.distancebetweenmobedges.marginHorizontal,
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >
                <Import.TouchableOpacity onPress={() => handlelinkedPress("https://www.linkedin.com/in/mohanrao-duba-8492b8287/")}>
                    <Logowithtext
                        text="LinkedIn"
                        logo="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                        palete={palete}
                    />
                </Import.TouchableOpacity>

                <Import.TouchableOpacity onPress={() => handleEmailPress("mohanraoduba45@gmail.com")}>
                    <Logowithtext
                        text="Email"
                        logo="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png"
                        palete={palete}
                    />
                </Import.TouchableOpacity>

                {/* <Import.TouchableOpacity onPress={() => handlePhonePress("6304465771")}>
                    <Logowithtext
                        text="Phone"
                        logo="https://cdn4.iconfinder.com/data/icons/social-media-2097/94/phone-512.png"
                        palete={palete}
                    />
                </Import.TouchableOpacity> */}
            </Import.View>

            <Import.View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 16,
                }}
            >
                <Import.Image
                    source={require("../../Images/avtar.png")}
                    style={{ width: 280, height: 280, resizeMode: "contain" }}
                />
            </Import.View>
        </Import.View>
    );
};

export default Connectwithme;
