import * as Yup from 'yup';

const generateSchema=(fields)=>{
    const validationrules={};
    fields.forEach((field)=>{
            switch(field){
                case 'email':
                    validationrules.email=Yup.string()
                    .email('Invalid Email')
                    .matches(/^[a-z0-9]+@[a-z]+\.[a-z]+$/, 'Invalid Email')
                    .required('Email Is required');
                    break;
                case 'password':
                    validationrules.password=Yup.string()
                    .matches(/^[a-zA-Z0-9_]+[@#$0-9]+$/, 'Invalid Password')
                    .min(8, 'Password must be at least 8 characters')
                    .required('Password is Required');
                    break;
                case 'cofmpassword':
                    validationrules.cofmpassword=Yup.string()
                    .oneOf([Yup.ref('password')],'Passwords Must Match')
                    .required("confirm Password is Required");
                    break;
                case "login_roleid":
                    validationrules.login_roleid = Yup.string()
                        .required("Please select the type of account")
                    break;
            }
    });
    return Yup.object(validationrules);
}

export {generateSchema};