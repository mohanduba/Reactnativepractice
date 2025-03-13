import * as actionType from '../Actions/actionType';
const Experiencereducer = (state = { expdata: [], }, action) => {
    switch (action.type) {
        case actionType.SET_EXPERIENCE_DATA:
            const newStateSetData = {
                ...state,
                expdata: action.payload,
            };
            return newStateSetData;
        default:
            return state;
    }
};
export default Experiencereducer;