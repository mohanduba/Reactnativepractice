
import * as Yup from "yup";
const generateValidationSchema = (fields) => {
    const validationRules = {};
    fields.forEach((field) => {
        switch (field) {
            case "email":
                validationRules.email = Yup.string()
                    .email("Invalid email format")
                    .matches(
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\.(com|in)$/,
                        "Only .com and .in domains are allowed"
                    )
                    .required("Email is required");
                break;
            case "fullname":
                validationRules.fullname = Yup.string()
                    .matches(/^[a-zA-Z]+$/, "Name should contain only letters")
                    .min(2, "First Name is Short!")
                    .max(50, "First Name is Long!")
                    .required("First Name is required");
                break;
            case "phonenumber":
                validationRules.phonenumber = Yup.string()
                    .matches(/^[6-9]\d{9}$/, "Enter valid number")
                    .required("Phone number is required");
                break;
            case "subject":
                validationRules.subject = Yup.string()
                    .matches(/^[a-zA-Z]+$/, "Subject should contain only letters")
                    .min(2, "Subject is Short!")
                    .max(50, "Subject is Long!")
                    .required("Subject is required");
                break;
            case "message":
                validationRules.message = Yup.string()
                    .required("Message is required");
                break;
            default:
                break;
        }
    });
    return Yup.object(validationRules);
};
const initialValues = {
    email: "",
    fullname: "",
    phonenumber: "",
    subject: "",
    message: ""
};
export { initialValues, generateValidationSchema };