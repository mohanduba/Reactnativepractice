import * as actionType from '../Actions/actionType';
const Getresumereducer = (state = { resumedata: [], }, action) => {
    switch (action.type) {
        case actionType.SET_RESUME_DATA:
            const newStateSetData = {
                ...state,
                resumedata: action.payload,
            };
            return newStateSetData;
        default:
            return state;
    }
};
export default Getresumereducer;