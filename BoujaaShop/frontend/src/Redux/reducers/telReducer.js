import {GET_TELS} from '../type'
const initialState={
 tels:[]
};
const telsReducers =(state=initialState,action)=>{
 switch(action.type){
 case GET_TELS:
 return{
 ...state,
 tels:action.payload,

 };
 default: return state
 }
}
export default telsReducers 