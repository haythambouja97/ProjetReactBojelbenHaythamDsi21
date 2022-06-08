import {GET_COULEURS} from "../type"
import {CouleurService} from "../../services/couleur-service";
export const loadCouleurs=()=>{
 return (dispatch)=>{
    CouleurService.fetchCouleurs()
 .then(res=>{
 dispatch({type:GET_COULEURS,
 payload:res.data})

 }).catch((error)=>console.log(error));

 }
} 
