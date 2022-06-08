import mongoose from "mongoose"
var resauSchema = mongoose.Schema({
nomresau: String
})
const Resau = mongoose.model('Resau', resauSchema);
export default Resau