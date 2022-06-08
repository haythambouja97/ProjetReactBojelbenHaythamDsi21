import mongoose from "mongoose"
var smartPhoneSchema = mongoose.Schema({
    ref: String,
    nom: { type: String, required: true },
    imei: Number,
    prix: Number,
    qtestock: Number,
    couverture : String,
    description: String,
    tel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tel'
    },
    resau: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Resau'
    },
    couleur: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Couleur'
    }
})
const Smartphone = mongoose.model('smartphone', smartPhoneSchema);
export default Smartphone