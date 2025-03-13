import * as actionType from '../Actions/actionType';
export const setProjectsdata = (prodata) => {
    return {
        type: actionType.SET_PROJECTS_DATA,
        payload: prodata,
    };
};