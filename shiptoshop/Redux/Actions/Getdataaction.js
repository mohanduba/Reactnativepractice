import * as actionType from '../Actions/actionType';
export const setProductsdata = (prodata) => {
    return {
        type: actionType.SET_PRODUCTS_DATA,
        payload: prodata,
    };
};