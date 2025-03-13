import React, { useContext } from "react";
import Homepagelayout from "../components/Homepagecomponents/Homepagelayout";
import { Darkthemehandler } from "../Globalcolors/Darkthemehandler";


const Homepage = () => {
    const { palete, updatetheme } = useContext(Darkthemehandler);
    return (
        <Homepagelayout palete={palete} updatetheme={updatetheme}/>

    )
}

export default Homepage;