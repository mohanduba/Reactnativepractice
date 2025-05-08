import React, { useEffect, useState } from "react";
import Import from "../../Globalimports/Imports";
import Logowithtext from "../../Globalcomponents/Logowithtext";
import Homeheader from "./Homeheader";
import Productscard from "./Productscard";
import { useIsFocused } from "@react-navigation/native";
import { Getproductsdataapi } from "../../Redux/Api/Getproductsdataapi";
import { setProductsdata } from "../../Redux/Actions/Getdataaction";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../../Redux/Actions/Cartdataactions";

const HomeLayout = ({ productsdata, setProductsdata, addToCart, cartItems, removeFromCart }) => {

    const [activetab, setactivetab] = useState('Beauty');
    const focused = useIsFocused();
    const [filteredproducts, setfilteredproducts] = useState([])

    useEffect(() => {
        if (focused) {
            getproductsData();
        }
    }, [focused]);
    useEffect(() => {
        if (productsdata?.length > 0) {
            setfilteredproducts(
                productsdata.filter((item) => item?.category === activetab.toLocaleLowerCase())
            );
        }
    }, [productsdata, activetab]);

    const getproductsData = async () => {
        try {
            const productdata = await Getproductsdataapi();
            console.log('i am ,pr', productdata)
            setfilteredproducts(productsdata?.filter((item) => item?.category === activetab.toLocaleLowerCase()))
            setProductsdata(productdata);
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    const handleheadertab = (active) => {
        setactivetab(active)
        setfilteredproducts(productsdata?.filter((item) => item?.category === active.toLocaleLowerCase()))
    }
    console.log('i am products data', productsdata)

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    const handleRemove = (id) => {
        removeFromCart(id);
    };
    return (
        <Import.View >
            <Homeheader activetab={activetab} handleheadertab={handleheadertab} />
            {filteredproducts?.length > 0 ? <Productscard handleAddToCart={handleAddToCart} filteredproducts={filteredproducts} cartItems={cartItems} handleRemove={handleRemove}/> : null}
        </Import.View>
    );
};

const mapStateToProps = (state) => ({ productsdata: state.Getproductsdatareducer.productsdata, cartItems: state.Cartdatareducer.items, });
const mapDispatchToProps = { setProductsdata, addToCart, removeFromCart, };
export default connect(mapStateToProps, mapDispatchToProps)(HomeLayout);
