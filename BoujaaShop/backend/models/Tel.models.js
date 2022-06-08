import mongoose from "mongoose"
var telSchema = mongoose.Schema({
nomtel: String,
email: String,
numtel: String
});
const Tel = mongoose.model('Tel', telSchema);
export default Tel
