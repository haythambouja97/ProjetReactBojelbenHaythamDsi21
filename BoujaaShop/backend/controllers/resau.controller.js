import mongoose from 'mongoose';
import Resau from '../models/Resau.models.js';
export const getResaux = async (req, res) => {
try {
const cat = await Resau.find();
res.status(200).json(cat);
} catch (error) {
res.status(404).json({ message: error.message });
}
}
export const getResauByID = async (req, res) => {
try {
const spec = await Resau.findById(req.params.id);
res.status(200).json(spec);
} catch (error) {
res.status(404).json({ message: error.message });
}
}
export const createResau = async (req, res) => {
const { nomresau } = req.body;
const newResau = new Resau({ nomresau:nomresau })
try {
await newResau.save();
res.status(201).json(newResau );
} catch (error) {
res.status(409).json({ message: error.message });
}
}
export const updateResau= async (req, res) => {
const { id } = req.params;
const { nomresau } = req.body;
if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas
de Resau avec un id: ${id}`);
const spec1 = { nomresau:nomresau, _id: id };
await Resau.findByIdAndUpdate(id, spec1);
res.json(spec1);
}
export const deleteResau = async (req, res) => {
const { id } = req.params;
if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas
de Resau avec l'ID: ${id}`);
await Resau.findByIdAndDelete(id);
res.json({ message: "Resau supprimée avec succès." });
}