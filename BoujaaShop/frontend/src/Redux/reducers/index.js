import { combineReducers } from "redux";
import smartphoneReducers from "./smartphonesReducer";
import telsReducers from "./telReducer";
import resausReducers from "./resauReducer";
import couleursReducers from "./couleurReducer"; 
const rootReducer= combineReducers({
 allsmartphones:smartphoneReducers,
 alltels:telsReducers,
 allresaus:resausReducers,
 allcouleurs:couleursReducers, 

});
export default rootReducer 