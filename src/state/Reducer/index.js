import { combineReducers } from "redux";
import { DistrictListReducer } from "./DistrictListReducer";
import { SelectDistrictFromReducer } from "./SelectDistrictFromReducer";
import { SelectDistrictToReducer } from "./SelectDistrictToReducer";

const rootReducer = combineReducers({
    districtList:DistrictListReducer,
    selectDistrictFrom: SelectDistrictFromReducer,
    selectDistrictTo: SelectDistrictToReducer,
});

export default rootReducer;