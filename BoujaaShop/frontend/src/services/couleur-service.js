import Axios from "../Axios/Api";
const COULEUR_API="/couleur"
 const fetchCouleurs=async()=> {
 return await Axios.get(COULEUR_API);
 }

 export const CouleurService = {
fetchCouleurs
 } 
