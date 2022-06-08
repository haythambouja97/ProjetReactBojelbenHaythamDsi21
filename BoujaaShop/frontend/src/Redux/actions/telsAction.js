import {GET_TELS} from "../type"
import {TelService} from "../../services/tel-service";
export const loadTels=()=>{
 return (dispatch)=>{
 TelService.fetchTels()
 .then(res=>{
 dispatch({type:GET_TELS,
 payload:res.data})

 }).catch((error)=>console.log(error));

 }
}