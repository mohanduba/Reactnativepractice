import { combineReducers } from "redux";
import Getproductsdatareducer from "./Getproductsdatareducer";
import Cartdatareducer from "./Cartdatareducer";
const rootReducer = combineReducers({
    Getproductsdatareducer,
    Cartdatareducer
});
export default rootReducer;