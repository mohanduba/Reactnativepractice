import * as actionType from '../Actions/actionType';
const Getproductsdatareducer = (state = { productsdata: [], }, action) => {
    switch (action.type) {
        case actionType.SET_PRODUCTS_DATA:
            const newStateSetData = {
                ...state,
                productsdata: action.payload,
            };
            return newStateSetData;
        default:
            return state;
    }
};
export default Getproductsdatareducer;