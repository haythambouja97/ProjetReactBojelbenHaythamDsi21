import Axios from "../Axios/Api";
const RESAU_API="/resau"
 const fetchResaus=async()=> {
 return await Axios.get(RESAU_API);
 }

 export const ResauService = {
    fetchResaus
 } 
