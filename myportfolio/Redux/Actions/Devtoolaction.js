import * as actionType from '../Actions/actionType';
export const setDevtooldata = (devtooldata) => {
    return {
        type: actionType.SET_DEVTOOLS_DATA,
        payload: devtooldata,
    };
};