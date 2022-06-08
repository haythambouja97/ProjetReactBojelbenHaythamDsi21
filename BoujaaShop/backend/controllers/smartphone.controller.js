import mongoose from 'mongoose';
import Smartphone from '../models/Smartphone.models.js';
export const getSmartphones = async (req, res) => {
 try {
 const cat = await Smartphone.find().populate('tel')
 .populate('resau').populate('couleur');
;

 res.status(200).json(cat);
 } catch (error) {
 res.status(404).json({ message: error.message });
 }
}
export const getSmartphoneByID = async (req, res) => {
 try {
 const liv = await Smartphone.findById(req.params.id).populate('tel')
 .populate('resau').populate('couleur');
 res.status(200).json(liv);
 } catch (error) {
 res.status(404).json({ message: error.message });
 }
}
export const createSmartphone = async (req, res) => {
 const {
ref,nom,imei,prix,qtestock,couverture,description,tel,resau,couleur} =req.body;

 const newSmartphone = new Smartphone({
    ref:ref,nom:nom,imei:imei,prix:prix,qtestock:qtestock,couverture:couverture,description:description,tel:tel,resau:resau,couleur:couleur })
 try {
 await newSmartphone.save();
 res.status(201).json(newSmartphone );
 } catch (error) {
 res.status(409).json({ message: error.message });
 }
}
export const updateSmartphone= async (req, res) => {
 const { id } = req.params;
 const {
ref,nom,imei,prix,qtestock,couverture,description,tel,resau,couleur } =req.body;
 if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas
de Smartphone avec un id: ${id}`);
 const liv1 = {
ref:ref,nom:nom,imei:imei,prix:prix,qtestock:qtestock,couverture:couverture,description:description,tel:tel,resau:resau,couleur:couleur, _id: id
};
 await Smartphone.findByIdAndUpdate(id, liv1);
 res.json(liv1);
}
export const deleteSmartphone = async (req, res) => {
 const { id } = req.params;
 if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas
de Smartphone avec l'ID: ${id}`);
 await Smartphone.findByIdAndDelete(id);
 res.json({ message: "Smartphone supprimé avec succès." });
}