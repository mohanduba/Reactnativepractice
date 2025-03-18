import React, { useState } from "react";
import Import from "../../Globalimports/Imports";
import { useFormik } from "formik";
import { generateValidationSchema } from "../../Globalcomponents/Validations";
import emailjs, { EmailJSResponseStatus } from '@emailjs/react-native'
import Successmodal from "./Successmodal";

const Contactme = ({ palete }) => {
    const [modalVisible, setmodalVisible] = useState(false);
    const [indicator, setindicator] = useState(false)
    const formFields = ["email", "fullname", 'phonenumber', 'subject', 'message'];
    const validationSchema = generateValidationSchema(formFields);
    const formik = useFormik({
        initialValues: { email: "", fullname: "", phonenumber: "", subject: "", message: "" },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => handleSubmit(values, { resetForm })
    });
    const handleSubmit = async (value) => {
        try {
            if (value) {
                setindicator(true)

                const response = await emailjs.send(
                    "service_s0prtew",
                    "template_k67ye1u",
                    {
                        user_email: value.email,
                        user_name: value.fullname,
                        user_phone: value.phonenumber,
                        subject: value.subject,
                        message: value.message,
                    },
                    {
                        publicKey: 'DJCIkcZG9nrg-4zUM',
                        accessToken: 'lWxQIYKyd5fgOzeaUXmnH',
                    },

                );

                if (response.status === 200) {
                    console.log("Email successfully sent!");
                    formik.resetForm();
                    setmodalVisible(true);
                    setindicator(false)
                } else {
                    console.error("Failed to send email:", response.text);
                    alert("Failed to send email. Please try again.");
                }
            }
        } catch (error) {
            console.error("Error sending email:", error);
            alert("Error sending email. Please try again.");
        }
    }
    const handleclosemodal = () => {
        setmodalVisible(!modalVisible)
    }
    return (

        <>
            <Import.View
                style={{
                    marginBottom: 10,
                    borderColor: 'rgba(0,0,0,0.2)',
                    overflow: "hidden",
                    borderWidth: 1,
                    marginTop: 2,
                    marginBottom: 8,
                    backgroundColor: "#fff",
                    shadowColor: 'rgba(0,0,0,1)',
                    shadowOpacity: 0.3,
                    shadowOffset: { width: 0, height: 2 },
                    shadowRadius: 2,
                    elevation: 2,
                    borderRadius: 12,
                    marginHorizontal: Import.Theme.distancebetweenmobedges.marginHorizontal,
                    // paddingVertical: 12,
                    flex: 1,
                    justifyContent: "center",
                }}
            >
                <Import.ImageBackground
                    source={require("../../Images/contactbg.jpg")} 
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    resizeMode="cover"
                >
                    <Import.View
                        style={[
                            styles.container,
                            {
                                width: "110%",
                                backgroundColor: "rgba(255, 255, 255, 0.4)",
                                padding: 20,
                                borderRadius: 10,
                            },
                        ]}
                    >
                        <Import.View>
                            <Import.Text
                                style={{
                                    textAlign: "center",
                                    fontSize: 18,
                                    color: "#000",
                                    fontFamily: Import.Theme.h1.fontFamily,
                                }}
                            >
                                Contact Me
                            </Import.Text>
                            <Import.View style={{ marginHorizontal: 8 }}>
                                {/* fullname */}
                                <Import.View style={{ marginTop: 6 }}>
                                    <Import.View style={{ marginHorizontal: 2, marginVertical: 4 }}><Import.Text style={Import.Theme.h2}>FULL NAME</Import.Text></Import.View>
                                    <Import.TextInput
                                        style={Import.Theme.input_styles}
                                        placeholder="Enter Your Name"
                                        name="fullname"
                                        onChangeText={formik.handleChange('fullname')}
                                        onBlur={formik.handleBlur('fullname')}
                                        value={formik.values.fullname}
                                    />
                                    {formik.errors.fullname && <Import.Text style={[Import.Theme.error_message, { marginTop: 4, marginLeft: 8 }]}>{formik.errors.fullname}</Import.Text>}
                                </Import.View>

                                {/* email */}
                                <Import.View style={{ marginTop: 6 }}>
                                    <Import.View style={{ marginHorizontal: 2, marginVertical: 4 }}><Import.Text style={Import.Theme.h2}>EMAIL</Import.Text></Import.View>
                                    <Import.TextInput
                                        style={Import.Theme.input_styles}
                                        placeholder="Enter Your Email"
                                        name="email"
                                        onChangeText={formik.handleChange('email')}
                                        onBlur={formik.handleBlur('email')}
                                        value={formik.values.email}
                                    />
                                    {formik.errors.email && <Import.Text style={[Import.Theme.error_message, { marginTop: 4, marginLeft: 8 }]}>{formik.errors.email}</Import.Text>}
                                </Import.View>


                                {/* phonenumber */}
                                <Import.View style={{ marginTop: 6 }}>
                                    <Import.View style={{ marginHorizontal: 2, marginVertical: 4 }}><Import.Text style={Import.Theme.h2}>PHONE NUMBER</Import.Text></Import.View>
                                    <Import.TextInput
                                        style={Import.Theme.input_styles}
                                        placeholder="Enter Your Phone Number"
                                        name="phonenumber"
                                        onChangeText={formik.handleChange('phonenumber')}
                                        onBlur={formik.handleBlur('phonenumber')}
                                        value={formik.values.phonenumber}
                                    />
                                    {formik.errors.phonenumber && <Import.Text style={[Import.Theme.error_message, { marginTop: 4, marginLeft: 8 }]}>{formik.errors.phonenumber}</Import.Text>}
                                </Import.View>

                                {/* subject */}
                                <Import.View style={{ marginTop: 6 }}>
                                    <Import.View style={{ marginHorizontal: 2, marginVertical: 4 }}><Import.Text style={Import.Theme.h2}>SUBJECT</Import.Text></Import.View>
                                    <Import.TextInput
                                        style={Import.Theme.input_styles}
                                        placeholder="Enter The Subject"
                                        name="subject"
                                        onChangeText={formik.handleChange('subject')}
                                        onBlur={formik.handleBlur('subject')}
                                        value={formik.values.subject}
                                    />
                                    {formik.errors.subject && <Import.Text style={[Import.Theme.error_message, { marginTop: 4, marginLeft: 8 }]}>{formik.errors.subject}</Import.Text>}
                                </Import.View>
                                {/* message */}
                                <Import.View style={{ marginTop: 6 }}>
                                    <Import.View style={{ marginHorizontal: 2, marginVertical: 4 }}><Import.Text style={Import.Theme.h2}>MESSAGE</Import.Text></Import.View>
                                    <Import.TextInput
                                        style={[Import.Theme.input_styles,
                                        {
                                            height: 'auto',
                                            minHeight: 150,
                                            maxHeight: 350,
                                            color: "#000",
                                            paddingTop: 10,
                                        },
                                        ]}
                                        placeholder="Enter Your Message"
                                        name="message"
                                        multiline={true}
                                        numberOfLines={10}
                                        onChangeText={formik.handleChange('message')}
                                        onBlur={formik.handleBlur('message')}
                                        value={formik.values.message}
                                    />
                                    {formik.errors.message && <Import.Text style={[Import.Theme.error_message, { marginTop: 4, marginLeft: 8 }]}>{formik.errors.message}</Import.Text>}
                                </Import.View>


                                <Import.View style={{ marginBottom: 14, marginTop: 12 }}>
                                    <Import.Button
                                        onPress={formik.handleSubmit}
                                        fontFamily={Import.Theme.buttons_fontstyle.fontFamily}
                                        fontWeight={Import.Theme.buttons_fontstyle.fontWeight}
                                        title={"SEND 📩"}
                                        color={Import.colors.light.buttontextcolor}
                                        backgroundcolor={Import.colors.light.iconcolor}
                                        borderRadius={8}
                                        paddingVertical={indicator ? 8 : 6}
                                        loading={indicator}
                                        indicatorcolor={'#fff'}
                                        size={Import.Theme.buttons_fontstyle.fontSize}
                                        textAlign={"center"}
                                    />
                                </Import.View>


                            </Import.View>
                        </Import.View>



                    </Import.View>

                </Import.ImageBackground>
                <Successmodal modalVisible={modalVisible} handleCloseModal={handleclosemodal} palete={palete} />
            </Import.View>


        </>

    );
};

export default Contactme;

const styles = Import.StyleSheet.create({
    container: { flex: 1, }
})
