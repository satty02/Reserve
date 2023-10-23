import { SELECT_DISTRICT_FROM } from "./ActionTypes";

export const SelectDistrictFromAction = (from)=>{
    return ({
        type : SELECT_DISTRICT_FROM,
        payload: from,
    })
}