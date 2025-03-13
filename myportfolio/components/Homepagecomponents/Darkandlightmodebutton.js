import React from "react"

import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    interpolateColor,
} from "react-native-reanimated";
import Import from "../../Globalimports/Imports";


const Darkandlightmodebutton = ({handledarkmode,darkmode,setisdarkmode,animatedIndicatorStyle}) => {
    return (
        <Import.View style={{ flexDirection: "row-reverse" }}>
            <Import.View style={{ flexDirection: "row",  backgroundColor: "lightgrey", width: 78, height: 40, borderRadius: 20, alignItems: "center", justifyContent: "space-between", paddingHorizontal: 4, }} >
                {/* Animated Sliding Background */}
                <Animated.View
                    style={[{
                        position: "absolute", height: 32, width: 32,
                        borderRadius: 16,
                        top: 4,
                    },
                        animatedIndicatorStyle,
                    ]}
                />

                {/* Sun Icon */}
                <Import.TouchableOpacity onPress={handledarkmode}>
                    <Import.View
                        style={{
                            backgroundColor: "transparent",
                            borderRadius: 100,
                            height: 32,
                            width: 32,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Import.Feather
                            name="sun"
                            size={20}
                            color={darkmode ? "black" : "white"}
                        />
                    </Import.View>
                </Import.TouchableOpacity>

                {/* Moon Icon */}
                <Import.TouchableOpacity onPress={handledarkmode}>
                    <Import.View
                        style={{
                            backgroundColor: "transparent",
                            borderRadius: 100,
                            height: 32,
                            width: 32,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Import.Feather
                            name="moon"
                            size={22}
                            color={darkmode ? "white" : "black"}
                        />
                    </Import.View>
                </Import.TouchableOpacity>
            </Import.View>
        </Import.View>
    )
}

export default Darkandlightmodebutton;