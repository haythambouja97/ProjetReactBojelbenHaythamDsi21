import {GET_SMARTPHONES,DELETE_SMARTPHONE,ADD_SMARTPHONE,GET_SINGLE_SMARTPHONE,UPDATE_SMARTPHONE} from
"../type"
import {SmartphoneService} from "../../services/smartphone-service";
export const loadSmartphones=()=>{
 return (dispatch)=>{
   SmartphoneService.fetchSmartphones()
 .then(res=>{
 dispatch({type:GET_SMARTPHONES,
 payload:res.data})

 }).catch((error)=>console.log(error));

 }
}
export const loadSinglesmartphone=(_id)=>{
 return (dispatch)=>{
   SmartphoneService.fetchSmartphoneById(_id)
 .then((res)=>{
 dispatch({type:GET_SINGLE_SMARTPHONE,
 payload:res.data});
 }).catch((error)=>console.log(error));

 }
}
export const addSmartphone=(Smartphone)=>{
 return (dispatch)=>{
   SmartphoneService.addSmartphone(Smartphone)
 .then((res)=>{
 dispatch({type:ADD_SMARTPHONE,
 payload:res.data})

 }).catch((error)=>console.log(error));

 }
}
export const deletesmartphone=(_id)=>{
 return dispatch=>{
   SmartphoneService.deleteSmartphone(_id)
 .then((res)=>{
 dispatch({type:DELETE_SMARTPHONE,
 payload:_id})
 }).catch((error)=>console.log(error));

 }
}
export const updatesmartphone=(Smartphone)=>{
 return dispatch=>{
   SmartphoneService.editSmartphone(Smartphone)
 .then((res)=>{
 dispatch({type:UPDATE_SMARTPHONE,
 payload:res.data})
 }).catch((error)=>console.log(error));

 }
} 
