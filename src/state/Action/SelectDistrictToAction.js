import { SELECT_DISTRICT_TO } from "./ActionTypes";

export const SelectDistrictToAction = (to)=>{
    return ({
        type : SELECT_DISTRICT_TO,
        payload: to,
    })
}