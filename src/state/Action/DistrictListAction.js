import { DISTRICT_LIST } from "./ActionTypes";

export const DistrictListAction = (list) =>{
    return {
        type: DISTRICT_LIST,
        payload : list
    }
};

