import mongoose from 'mongoose';
import Tel from '../models/Tel.models.js';
export const getTels = async (req, res) => {
try {
const cat = await Tel.find();
res.status(200).json(cat);
} catch (error) {
res.status(404).json({ message: error.message });
}
}
export const getTelByID = async (req, res) => {
try {
const cat = await Tel.findById(req.params.id);
res.status(200).json(cat);
} catch (error) {
res.status(404).json({ message: error.message });
}
}
export const createTel = async (req, res) => {
const { nomtel, email, numtel} = req.body;
const newTel = new Tel({ nomtel:nomtel, email:email,
numtel:numtel })
try {
await newTel.save();
res.status(201).json(newTel );
} catch (error) {
res.status(409).json({ message: error.message });
}
}
export const updateTel= async (req, res) => {
const { id } = req.params;
const { nomtel, email, numtel} = req.body;
if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas
de tel avec un id: ${id}`);
const aut1 = { nomtel:nomtel, email:email, numtel:numtel, _id: id };
await Tel.findByIdAndUpdate(id, aut1);
res.json(aut1);
}
export const deleteTel = async (req, res) => {
const { id } = req.params;
if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas
de tel avec l'ID: ${id}`);
await Tel.findByIdAndDelete(id);
res.json({ message: "tel supprimé avec succès." });
}