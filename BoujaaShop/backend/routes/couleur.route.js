import express from 'express';
const router = express.Router();
import { getcouleurs, getcouleurByID, createcouleur,
updatecouleur, deletecouleur } from
'../controllers/couleur.controller.js';
/**
* @route GET /api/couleurs
* @desc Get All couleur
* @access Public
*/
router.get('/', getcouleurs);
/**
* @route POST /api/couleurs
* @desc Ajouter une couleur
* @access Public
*/
router.post('/', createcouleur);
/**
* @route GET /api/couleurs/:id
* @desc Renvoyer une couleur
* @access Public
*/
router.get('/:id', getcouleurByID);
/**
* @route PUT /api/couleurs/:id
* @desc Modifier une couleur
* @access Public
*/
router.put('/:id', updatecouleur);
/**
* @route DELETE /api/couleurs/:id
* @desc Supprimer une couleur
* @access Public
*/
router.delete('/:id', deletecouleur);
export default router;
