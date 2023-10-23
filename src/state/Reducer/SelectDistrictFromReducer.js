import { SELECT_DISTRICT_FROM } from "../Action/ActionTypes";

const INIT_STATE = '';

export const SelectDistrictFromReducer =(state=INIT_STATE,action)=>{
    switch(action.type){
        case SELECT_DISTRICT_FROM:
            return action.payload;
        
            default:
                return state;
    }
}