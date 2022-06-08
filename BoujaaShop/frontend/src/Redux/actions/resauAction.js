import {GET_RESAUS} from "../type"
import {ResauService} from "../../services/resau-service";
export const loadResaus=()=>{
 return (dispatch)=>{
    ResauService.fetchResaus()
 .then(res=>{
 dispatch({type:GET_RESAUS,
 payload:res.data})

 }).catch((error)=>console.log(error));

 }
} 