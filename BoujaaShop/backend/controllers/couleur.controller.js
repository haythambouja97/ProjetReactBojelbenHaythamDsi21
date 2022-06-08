import mongoose from 'mongoose';
import couleur from '../models/couleur.models.js';
export const getcouleurs = async (req, res) => {
try {
const cat = await couleur.find();
res.status(200).json(cat);
} catch (error) {
res.status(404).json({ message: error.message });
}
}
export const getcouleurByID = async (req, res) => {
try {
const spec = await couleur.findById(req.params.id);
res.status(200).json(spec);
} catch (error) {
res.status(404).json({ message: error.message });
}
}
export const createcouleur = async (req, res) => {
const { nomcouleur } = req.body;
const newcouleur = new couleur({ nomcouleur:nomcouleur })
try {
await newcouleur.save();
res.status(201).json(newcouleur );
} catch (error) {
res.status(409).json({ message: error.message });
}
}
export const updatecouleur= async (req, res) => {
const { id } = req.params;
const { nomcouleur } = req.body;
if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas
de couleur avec un id: ${id}`);
const spec1 = { nomcouleur:nomcouleur, _id: id };
await couleur.findByIdAndUpdate(id, spec1);
res.json(spec1);
}
export const deletecouleur = async (req, res) => {
const { id } = req.params;
if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas
de couleur avec l'ID: ${id}`);
await couleur.findByIdAndDelete(id);
res.json({ message: "couleur supprimée avec succès." });
}