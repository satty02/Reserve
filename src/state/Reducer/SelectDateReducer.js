import { SELECT_DATE } from "../Action/ActionTypes";

const INIT_STATE = '2023-10-21';

export const SelectDateReducer = (state=INIT_STATE,action)=>{
    switch(action.type){
        case SELECT_DATE:
            return action.payload;

        default:
            return state;
    }
}