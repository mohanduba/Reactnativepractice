import React, { useEffect, useRef, useState } from "react";
import { View, Text, StatusBar } from "react-native";
import Import from "../../Globalimports/Imports";
import Homeheader from "./Homeheader";
import { connect } from "react-redux";
import BlobUtil from 'react-native-blob-util';
import { useIsFocused } from "@react-navigation/native";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    interpolateColor,
} from "react-native-reanimated";
import Aboutme from "./Aboutme";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Connectwithme from "./Connectwithme";
import Contactme from "./Contactme";
import Footer from "./Footer";
import { Getexperiencedata } from "../../Redux/Api/Getexperiencedata";
import { setExperiencedata } from "../../Redux/Actions/Expaction";
import { Getprojectsdata } from "../../Redux/Api/Getprojectsdata";
import { setProjectsdata } from "../../Redux/Actions/Proaction";
import { Gettechskilldata } from "../../Redux/Api/Gettechskilldata";
import { setTechskilldata } from "../../Redux/Actions/Techskillaction";
import { setDevtooldata } from "../../Redux/Actions/Devtoolaction";
import { Getdevtoolsdata } from "../../Redux/Api/Getdevtoolsdata";
import { Getresumelink } from "../../Redux/Api/Getresumelink";
import { setresumedata } from "../../Redux/Actions/Resumeaction";

const Homepagelayout = ({ palete, updatetheme, expdata, setExperiencedata, setProjectsdata, prodata, setTechskilldata, techskilldata, setDevtooldata, devtooldata, setresumedata, resumedata }) => {
    const [darkmode, setisdarkmode] = useState(palete.mode === "dark");
    const focused = useIsFocused();
    const scrollViewRef = useRef(null);
    const getexpData = async () => {
        try {
            const experiencedata = await Getexperiencedata();
            setExperiencedata(experiencedata);
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    const getproData = async () => {
        try {
            const projectsdata = await Getprojectsdata();
            setProjectsdata(projectsdata);
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    const gettechskillsData = async () => {
        try {
            const techskillsdata = await Gettechskilldata();
            setTechskilldata(techskillsdata);
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    const getdevtoolData = async () => {
        try {
            const devtoolsdata = await Getdevtoolsdata();
            setDevtooldata(devtoolsdata);
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    const getresumeData = async () => {
        try {
            const resumedata = await Getresumelink();
            setresumedata(resumedata);
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    useEffect(() => {
        if (focused) {
            getexpData();
            getproData();
            gettechskillsData();
            getdevtoolData();
            getresumeData();
        }
    }, [focused])
    console.log('i am expdat', expdata);
    console.log('i am prodata', prodata)
    console.log('i am techskilldata', techskilldata)
    console.log('i am devtooldata', devtooldata)
    console.log('i am resumedata', resumedata)

    const translateX = useSharedValue(darkmode ? 40.4 : 5);
    const handledarkmode = () => {
        const newMode = !darkmode;
        setisdarkmode(newMode);
        updatetheme();
        translateX.value = withTiming(newMode ? 40.4 : 5, {
            duration: 300,
        });
    };

    const animatedIndicatorStyle = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(
            translateX.value,
            [5, 40.4], 
            ["#b882fa", "#b882fa"] 
        );

        return {
            transform: [{ translateX: translateX.value }],
            backgroundColor,
        };
    });
    // download pdf
    const handledownload = async () => {
        const pdfUrl = resumedata[0]?.link;

        try {
            if (pdfUrl !== '') {
                const supported = await Import.Linking.canOpenURL(pdfUrl);
                if (supported) {
                    await Import.Linking.openURL(pdfUrl);
                } else {
                    Alert.alert(
                        "Error",
                        "Unable to open the link. Please check the URL or your internet connection."
                    );
                }
            }
        } catch (error) {
            console.error('Error opening the link:', error);
            Alert.alert("Error", "An unexpected error occurred: " + error.message);
        }
    };

    const handleScrollToEnd = () => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
    };
    return (
        <Import.ScrollView ref={scrollViewRef} style={{ marginTop: StatusBar.currentHeight, backgroundColor: Import.colors?.[palete.mode].pagebackgroundcolor }} showsVerticalScrollIndicator={false}>
            <Homeheader
                palete={palete}
                updatetheme={updatetheme}
                handledarkmode={handledarkmode}
                animatedIndicatorStyle={animatedIndicatorStyle}
                darkmode={darkmode}
                setisdarkmode={setisdarkmode}
                handledownload={handledownload}
                handleScrollToEnd={handleScrollToEnd}
            />
            <Aboutme palete={palete} prodata={prodata?.length > 0 ? prodata?.length : 0} />
            <Education palete={palete} />
            {expdata && expdata?.length > 0 && <Experience expdata={expdata} palete={palete} />}
            <Skills palete={palete} techskilldata={techskilldata} devtooldata={devtooldata} />
            {prodata && prodata?.length > 0 && <Projects prodata={prodata} palete={palete} />}
            <Connectwithme palete={palete} />
            <Contactme palete={palete} />
            <Footer palete={palete} />
        </Import.ScrollView>
    );
};

const mapStateToProps = (state) => ({ expdata: state.Experiencereducer.expdata, prodata: state.Projectsreducer.prodata, techskilldata: state.Techskillsreducer.techskilldata, devtooldata: state.Devtoolsreducer.devtooldata, resumedata: state.Getresumereducer.resumedata });
const mapDispatchToProps = { setExperiencedata, setProjectsdata, setTechskilldata, setDevtooldata, setresumedata };
export default connect(mapStateToProps, mapDispatchToProps)(Homepagelayout);