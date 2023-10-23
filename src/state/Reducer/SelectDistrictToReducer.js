import { SELECT_DISTRICT_TO } from "../Action/ActionTypes";

const INIT_STATE = '';

export const SelectDistrictToReducer =(state=INIT_STATE,action)=>{
    switch(action.type){
        case SELECT_DISTRICT_TO:
            return action.payload;
        
            default:
                return state;
    }
}