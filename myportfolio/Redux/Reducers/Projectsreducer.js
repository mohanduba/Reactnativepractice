import * as actionType from '../Actions/actionType';
const Projectsreducer = (state = { prodata: [], }, action) => {
    switch (action.type) {
        case actionType.SET_PROJECTS_DATA:
            const newStateSetData = {
                ...state,
                prodata: action.payload,
            };
            return newStateSetData;
        default:
            return state;
    }
};
export default Projectsreducer;