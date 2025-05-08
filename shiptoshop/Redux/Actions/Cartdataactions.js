import * as actionType from '../Actions/actionType';
export const addToCart = (product) => ({
    type: actionType.ADD_TO_CART,
    payload: product,
});

export const removeFromCart = (id) => ({
    type: actionType.REMOVE_FROM_CART,
    payload: id,
});

export const clearCart = () => ({
    type: actionType.CLEAR_CART,
});