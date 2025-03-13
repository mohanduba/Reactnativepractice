import { combineReducers } from "redux";
import Experiencereducer from "./Experiencereducer";
import Projectsreducer from "./Projectsreducer";
import Devtoolsreducer from "./Devtoolsreducer";
import Techskillsreducer from "./Techskillsreducer";
import Getresumereducer from "./Getresumereducer";
const rootReducer = combineReducers({
    Experiencereducer,
    Projectsreducer,
    Devtoolsreducer,
    Techskillsreducer,
    Getresumereducer
});
export default rootReducer;