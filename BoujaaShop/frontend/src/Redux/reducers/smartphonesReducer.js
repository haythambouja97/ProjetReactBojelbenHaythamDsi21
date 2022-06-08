import {GET_SMARTPHONES,DELETE_SMARTPHONE,ADD_SMARTPHONE,GET_SINGLE_SMARTPHONE,UPDATE_SMARTPHONE} from
'../type'
const initialState={
 smartphones:[],
 smartphone:{}

};
const smartphoneReducers =(state=initialState,action)=>{
 switch(action.type){
 case GET_SMARTPHONES:
 return{
 ...state,
 smartphones:action.payload,

 };
 case ADD_SMARTPHONE:
 return{
 ...state,
 smartphones : [...state.smartphones, action.payload],
 smartphone:action.payload
 };
 case DELETE_SMARTPHONE:
 return{
 ...state,
 smartphones: state.smartphones.filter(smartphone=> smartphone._id !==
action.payload)
 };
 case UPDATE_SMARTPHONE:
 return {
 ...state,
 smartphones:state.smartphones.map(smartphone => smartphone._id ===
action.payload._id ? (smartphone = action.payload) : smartphone)
 };
 case GET_SINGLE_SMARTPHONE:
 return { ...state,
smartphone:action.payload };
 default: return state
 }
}
export default smartphoneReducers 
