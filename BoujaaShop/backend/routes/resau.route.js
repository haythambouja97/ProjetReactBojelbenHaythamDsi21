import express from 'express';
const router = express.Router();
import { getResaux, getResauByID, createResau,
updateResau, deleteResau } from
'../controllers/resau.controller.js';
/**
* @route GET /api/Resaux
* @desc Get All Resau
* @access Public
*/
router.get('/', getResaux);
/**
* @route POST /api/resaux
* @desc Ajouter une resau
* @access Public
*/
router.post('/', createResau);
/**
* @route GET /api/resaux/:id
* @desc Renvoyer une resau
* @access Public
*/
router.get('/:id', getResauByID);
/**
* @route PUT /api/resaux/:id
* @desc Modifier une resau
* @access Public
*/
router.put('/:id', updateResau);
/**
* @route DELETE /api/resaux/:id
* @desc Supprimer une resau
* @access Public
*/
router.delete('/:id', deleteResau);
export default router;
