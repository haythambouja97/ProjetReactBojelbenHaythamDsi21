import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {loadSmartphones} from "../../Redux/actions/smartphonesAction"
import AfficheCards from "./AfficheCards"
const ListCards=()=>{

 const dispatch = useDispatch();

 useEffect(() => {
 dispatch(loadSmartphones());
 });


 return(

 <div><AfficheCards/></div>
 )
}
export default ListCards 