import express from 'express';
const router = express.Router();
import { getTels, getTelByID, createTel, updateTel, deleteTel }
from '../controllers/tel.controller.js';
/**
* @route GET /api/tels
* @desc Get All Tels
* @access Public
*/
router.get('/', getTels);
/**
* @route POST /api/tels
* @desc Ajouter un Tel
* @access Public
*/
router.post('/', createTel);
/**
* @route GET /api/tels/:id
* @desc Renvoyer un Tel
* @access Public
*/
router.get('/:id', getTelByID);
/**
* @route PUT /api/tels/:id
* @desc Modifier un Tel
* @access Public
*/
router.put('/:id', updateTel);
/**
* @route DELETE /api/tels/:id
* @desc Supprimer un Tel
* @access Public
*/
router.delete('/:id', deleteTel);
export default router