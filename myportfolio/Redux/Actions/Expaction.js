import * as actionType from '../Actions/actionType';
export const setExperiencedata = (expdata) => {
    return {
        type: actionType.SET_EXPERIENCE_DATA,
        payload: expdata,
    };
};