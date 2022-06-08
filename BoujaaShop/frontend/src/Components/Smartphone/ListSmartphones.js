import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {loadSmartphones} from "../../Redux/actions/smartphonesAction"
import AfficheSmartphones from "./AfficheSmartphones"
const ListSmartphones=()=>{

 const dispatch = useDispatch();

 useEffect(() => {
 dispatch(loadSmartphones());
 });


 return(

 <div><AfficheSmartphones/></div>
 )
}
export default ListSmartphones 
