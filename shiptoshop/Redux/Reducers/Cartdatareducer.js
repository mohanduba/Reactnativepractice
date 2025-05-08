import * as actionType from '../Actions/actionType';
const initialState = {
  items: [],
};

const Cartdatareducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
        return {
          ...state,
          items: [...state.items, { ...action.payload }],
        };
    case actionType.REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case actionType.CLEAR_CART:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};

export default Cartdatareducer;
