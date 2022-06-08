import {GET_COULEURS} from '../type'
const initialState={
 couleurs:[]
};
const couleursReducers =(state=initialState,action)=>{
 switch(action.type){
 case GET_COULEURS:
 return{
 ...state,
 couleurs:action.payload,

 };
 default: return state
 }
}
export default couleursReducers 
