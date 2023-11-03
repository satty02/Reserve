import { VIEW_SEATS } from "./ActionTypes";

const ViewSeatsAction = (val)=>{
    return {
        type : VIEW_SEATS,
        payload: val,
    }
}

export default ViewSeatsAction;