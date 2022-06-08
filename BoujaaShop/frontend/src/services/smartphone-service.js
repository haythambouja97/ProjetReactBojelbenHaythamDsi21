import Axios from "../Axios/Api";
const SMARTPHONES_API="/smartphone"
 const fetchSmartphones=async()=> {
 return await Axios.get(SMARTPHONES_API);
 }
 const fetchSmartphoneById=async(smartphoneId)=> {
 return await Axios.get(SMARTPHONES_API + '/' + smartphoneId);
 }
 const deleteSmartphone=async(smartphoneId) =>{
 return await Axios.delete(SMARTPHONES_API + '/' + smartphoneId);
 }
 const addSmartphone=async(smartphone)=> {
 return await Axios.post(SMARTPHONES_API, smartphone);

 }
 const editSmartphone=(smartphone) =>{
 return Axios.put(SMARTPHONES_API + '/' + smartphone._id, smartphone);

 }

 export const SmartphoneService = {
 fetchSmartphones,
 fetchSmartphoneById,
 deleteSmartphone,
 addSmartphone,
 editSmartphone
 } 
