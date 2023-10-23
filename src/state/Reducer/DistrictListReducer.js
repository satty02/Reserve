import { DISTRICT_LIST } from "../Action/ActionTypes";

const INIT_STATE = [];

export const DistrictListReducer = (state=INIT_STATE , action)=>{
    switch(action.type){
        case DISTRICT_LIST:
            return action.payload;
        
        default :
            return state;
    }
}