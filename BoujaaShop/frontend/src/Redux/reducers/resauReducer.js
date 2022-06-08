import {GET_RESAUS} from '../type'
const initialState={
 resaus:[]
};
const resausReducers =(state=initialState,action)=>{
 switch(action.type){
 case GET_RESAUS:
 return{
 ...state,
 resaus:action.payload,

 };
 default: return state
 }
}
export default resausReducers 