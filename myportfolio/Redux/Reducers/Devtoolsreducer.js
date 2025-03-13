import * as actionType from '../Actions/actionType';
const Devtoolsreducer = (state = { devtooldata: [], }, action) => {
    switch (action.type) {
        case actionType.SET_DEVTOOLS_DATA:
            const newStateSetData = {
                ...state,
                devtooldata: action.payload,
            };
            return newStateSetData;
        default:
            return state;
    }
};
export default Devtoolsreducer;