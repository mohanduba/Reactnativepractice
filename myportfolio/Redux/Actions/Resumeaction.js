import * as actionType from '../Actions/actionType';
export const setresumedata = (resumedata) => {
    return {
        type: actionType.SET_RESUME_DATA,
        payload: resumedata,
    };
};