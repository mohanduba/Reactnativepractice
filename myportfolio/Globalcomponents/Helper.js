export const experience = () => {
    const startDate = new Date(2024, 8); 
    const currentDate = new Date();

    const totalMonths =
        (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
        (currentDate.getMonth() - startDate.getMonth());
    console.log(totalMonths)
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    return `${years}.${months}`;
};



// exp dbschema
// const experience = [
//     {
//         startyear: "October 2024",
//         endyear: "Present",
//         role: "Jr. Software Developer",
//         logo: "https://www.readyshinesolutions.com/images/logo/Ready%20Shine%20Solutions%20LogoFinal.png1%20(1).png",
//         name: "Ready Shine Solutions",
//         location: "Vishakapatanam, Andhra Pradesh",
//         des: [
//             "Working as a frontend developer for React and React Native domains",
//             "Developed software applications with React.js, React Native",
//             "Maintained version control systems such as Git",
//             "Developing External project Assignix Mobile Application",
//             "Developing Internal project Carrier Control Mobile Application",
//             "Developing Internal project Pelicanrx Website"
//         ]
//     },
//     {
//         startyear: "June 2023",
//         endyear: "October 2024",
//         role: "Jr. Software Developer",
//         logo: "https://actimize.in/assets/images/actimizelogo.png",
//         name: "Actimize Software Solutions",
//         location: "Mandapeta, Andhra Pradesh",
//         des: [
//             "Working as a frontend developer for React and React Native domains",
//             "Developed software applications with React.js, React Native",
//             "Maintained version control systems such as Git",
//             "Utilized version control systems such as Git to manage source code changes",
//             "Developed Internal project E-commerce application, Service's application",
//             "Razorpay payment gateway Integration through React and React Native",
//             "Analyzed code and corrected errors to optimize output"
//         ]
//     },

// ];

// projects dbschema
// const pros = [
//     {
//         pname: "Carrier Control",
//         ptype: "Service Aggregator Platform",
//         startdate: "12/2024",
//         enddate: "present",
//         techstack: [
//             { logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png", label: "JavaScript" },
//             { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s", label: "React Native" },
//             { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRS42xTcnXMlC85s502uVAhzdGqq_23-bXA&s", label: "Expo" },
//             { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsRlH5x8oBQAqXxQBNwTIGAnoBBrjEWHP2pw&s", label: "Redux" },
//             { logo: "https://cdn-icons-png.flaticon.com/512/25/25231.png", label: "Github" },
//             { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-TB9d5YXwtKhv4NWbpeTBVveYvcxu9gMJng&s", label: "Postman" },
//             { logo: "https://www.shutterstock.com/image-vector/cloud-api-application-programming-interface-600nw-2193690721.jpg", label: "RestfulAPI" },
//             { logo: "https://banner2.cleanpng.com/lnd/20240523/zwu/ax8969b8j.webp", label: "Google Maps Integration" },
//             { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS42uI2JPTWjq_uNG9UFt98jnpHODVQrQHysg&s", label: "Stripe" },
//         ],
//         pdes: "is an advanced professional networking and recruitment platform designed for logistics and transportation. It connects professionals, businesses, and service providers, enabling seamless collaboration, job opportunities, and industry growth."
//     },

//     {
//         pname: "Assignix",
//         ptype: "Service Aggregator Platform",
//         startdate: "10/2024",
//         enddate: "present",
//         techstack: [
//             { logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png", label: "JavaScript" },
//             { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s", label: "React Native" },
//             { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRS42xTcnXMlC85s502uVAhzdGqq_23-bXA&s", label: "Expo" },
//             { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsRlH5x8oBQAqXxQBNwTIGAnoBBrjEWHP2pw&s", label: "Redux-Toolkit" },
//             { logo: "https://cdn-icons-png.flaticon.com/512/25/25231.png", label: "Github" },
//             { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-TB9d5YXwtKhv4NWbpeTBVveYvcxu9gMJng&s", label: "Postman" },
//             { logo: "https://www.shutterstock.com/image-vector/cloud-api-application-programming-interface-600nw-2193690721.jpg", label: "RestfulAPI" },
//         ],
//         pdes: "is an advanced project and task management platform designed to streamline workflows, enhance team collaboration, and improve productivity. It offers a user-friendly interface, robust features, and a customizable framework to adapt to various industries and team structures."
//     },
//     {
//         pname: "AKRT",
//         ptype: "E-Commerce Application",
//         startdate: "03/2024",
//         enddate: "07/2024",
//         techstack: [
//             { logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png", label: "JavaScript" },
//             { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s", label: "React Native" },
//             { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRS42xTcnXMlC85s502uVAhzdGqq_23-bXA&s", label: "Expo" },
//             { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsRlH5x8oBQAqXxQBNwTIGAnoBBrjEWHP2pw&s", label: "Redux" },
//             { logo: "https://cdn-icons-png.flaticon.com/512/25/25231.png", label: "Github" },
//             { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-TB9d5YXwtKhv4NWbpeTBVveYvcxu9gMJng&s", label: "Postman" },
//             { logo: "https://www.shutterstock.com/image-vector/cloud-api-application-programming-interface-600nw-2193690721.jpg", label: "RestfulAPI" },
//             { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFEZ5joKt-G0pnRSJUmLVEKO4As2Kg3U5Gkw&s", label: "Push Notification (FCM)" },
//             { logo: "https://play-lh.googleusercontent.com/2BQu8Y7Ah9Gh9CZvmaMSYIcZvdO4KfdJ26EZ1WGyaOG_xxeDxNn-AZYxOtQJvyQQPFY=w240-h480-rw", label: "Razorpay" },
//         ],
//         pdes: "is a cutting-edge e-commerce platform that revolutionizes online shopping by offering a seamless, personalized, and user-friendly experience. It caters to a wide range of products, from groceries and electronics to fashion and home essentials, making it a one-stop shop for all customer needs."
//     },
//     {
//         pname: "YoyoWash",
//         ptype: "Service Aggregator Platform",
//         startdate: "07/2024",
//         enddate: "10/2024",
//         techstack: [
//             { logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png", label: "JavaScript" },
//             { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s", label: "React Native" },
//             { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRS42xTcnXMlC85s502uVAhzdGqq_23-bXA&s", label: "Expo" },
//             { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsRlH5x8oBQAqXxQBNwTIGAnoBBrjEWHP2pw&s", label: "Redux" },
//             { logo: "https://cdn-icons-png.flaticon.com/512/25/25231.png", label: "Github" },
//             { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-TB9d5YXwtKhv4NWbpeTBVveYvcxu9gMJng&s", label: "Postman" },
//             { logo: "https://www.shutterstock.com/image-vector/cloud-api-application-programming-interface-600nw-2193690721.jpg", label: "RestfulAPI" },
//             { logo: "https://banner2.cleanpng.com/lnd/20240523/zwu/ax8969b8j.webp", label: "Google Maps Integration" },
//             { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFEZ5joKt-G0pnRSJUmLVEKO4As2Kg3U5Gkw&s", label: "Push Notification (FCM)" },
//             { logo: "https://play-lh.googleusercontent.com/2BQu8Y7Ah9Gh9CZvmaMSYIcZvdO4KfdJ26EZ1WGyaOG_xxeDxNn-AZYxOtQJvyQQPFY=w240-h480-rw", label: "Razorpay" },
//         ],
//         pdes: "is an advanced and efficient platform designed to streamline laundry operations for businesses and individuals. It offers a variety of specialized washing services to cater to different customer needs while providing businesses with powerful tools to manage orders, inventory, and staff seamlessly."
//     },
// ]

// techskill dbschema
// const skill = [
//     { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFBDpP5C5t_t8FjbMu-rjqndyjCmaoKMNTjA&s", label: "HTML5" },
//     { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQG2bHNdIs2XhZe2NaFKZKKrhKo3rSoiK87A&s", label: "CSS" },
//     { logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png", label: "JavaScript" },
//     { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJUrhF-MsuZFTj61vxMG67zA5W59t2tn6tg&s", label: "JQuery" },
//     { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s", label: "React Native" },
//     { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s", label: "React JS" },
//     { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsRlH5x8oBQAqXxQBNwTIGAnoBBrjEWHP2pw&s", label: "Redux" },
//     { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFEZ5joKt-G0pnRSJUmLVEKO4As2Kg3U5Gkw&s", label: "Firebase" },
//     { logo: "https://v5.getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png", label: "Bootstrap" },
//     { logo: "https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9iYjEzYWViNTFjNTQ0MjFhN2E1NTQwYTcxMzI4OTVkYz9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.FnWJxluT5VvnfpnQsm2K2I1GK-k0_NAmWtu3G-u3fE0", label: "Material UI" },
//     { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB3kuuAZW68e1h7q73JLtLOyAZ0lVomJYNSA&s", label: "Node Js" },
//     { logo: "https://www.shutterstock.com/image-vector/cloud-api-application-programming-interface-600nw-2193690721.jpg", label: "RestfulAPI" },
// ]
