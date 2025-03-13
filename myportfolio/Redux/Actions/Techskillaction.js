import * as actionType from '../Actions/actionType';
export const setTechskilldata = (techskilldata) => {
    return {
        type: actionType.SET_TECHSKILLS_DATA,
        payload: techskilldata,
    };
};