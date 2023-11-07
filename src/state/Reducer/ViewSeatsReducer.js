import { VIEW_SEATS } from "../Action/ActionTypes";;

const INIT_STATE = false;

export const ViewSeatsReducer = (state=INIT_STATE, action)=>{
    switch(action.type){
        case VIEW_SEATS:
            return action.payload;
        
            default:
                return state;
    }
};
