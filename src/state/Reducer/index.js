import { combineReducers } from "redux";
import { DistrictListReducer } from "./DistrictListReducer";
import { SelectDistrictFromReducer } from "./SelectDistrictFromReducer";
import { SelectDistrictToReducer } from "./SelectDistrictToReducer";
import { SelectDateReducer } from "./SelectDateReducer";

const rootReducer = combineReducers({
    districtList:DistrictListReducer,
    selectDistrictFrom: SelectDistrictFromReducer,
    selectDistrictTo: SelectDistrictToReducer,
    selectDate: SelectDateReducer
});

export default rootReducer;