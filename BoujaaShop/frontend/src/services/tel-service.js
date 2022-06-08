import Axios from "../Axios/Api";
const TEL_API="/tel"
 const fetchTels=async()=> {
 return await Axios.get(TEL_API);
 }

 export const TelService = {
 fetchTels
 } 