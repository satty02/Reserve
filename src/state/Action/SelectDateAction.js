import { SELECT_DATE } from "./ActionTypes";

export const SelectDateAction = (date)=>{
    return (
        {
            type : SELECT_DATE,
            payload: date,
        }
    )
}