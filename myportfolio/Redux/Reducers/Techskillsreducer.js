import * as actionType from '../Actions/actionType';
const Techskillsreducer = (state = { techskilldata: [], }, action) => {
    switch (action.type) {
        case actionType.SET_TECHSKILLS_DATA:
            const newStateSetData = {
                ...state,
                techskilldata: action.payload,
            };
            return newStateSetData;
        default:
            return state;
    }
};
export default Techskillsreducer;