import mongoose from "mongoose"
var couleurSchema = mongoose.Schema({
nomcouleur: String
})
const Couleur = mongoose.model('Couleur', couleurSchema);
export default Couleur