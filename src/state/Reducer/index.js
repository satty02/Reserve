import { combineReducers } from "redux";
import { DistrictListReducer } from "./DistrictListReducer";
import { SelectDistrictFromReducer } from "./SelectDistrictFromReducer";
import { SelectDistrictToReducer } from "./SelectDistrictToReducer";
import { SelectDateReducer } from "./SelectDateReducer";
import { ViewSeatsReducer } from "./ViewSeatsReducer";

const rootReducer = combineReducers({
    districtList:DistrictListReducer,
    selectDistrictFrom: SelectDistrictFromReducer,
    selectDistrictTo: SelectDistrictToReducer,
    selectDate: SelectDateReducer,
    viewSeats: ViewSeatsReducer
});

export default rootReducer;