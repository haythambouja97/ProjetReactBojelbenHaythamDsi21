import express from 'express';
const router = express.Router();
import { getSmartphones, getSmartphoneByID, createSmartphone, updateSmartphone, deleteSmartphone } from
'../controllers/smartphone.controller.js';
import {auth} from "../middleware/auth.js"
/**
 * @route GET /api/Smartphones
 * @desc Get All smartphones
 * @access Public
 */
router.get('/',auth,getSmartphones);
/**
 * @route POST /api/Smartphones
 * @desc Ajouter un smartphone
 * @access Public
 */
router.post('/', createSmartphone);
/**
 * @route GET /api/Smartphones/:id
 * @desc Renvoyer un smartphone
 * @access Public
 */
router.get('/:id', getSmartphoneByID);
/**
 * @route PUT /api/Smartphones/:id
 * @desc Modifier un smartphone
 * @access Public
 */
router.put('/:id', updateSmartphone);
/**
 * @route DELETE /api/Smartphones/:id
 * @desc Supprimer un smartphone
 * @access Public
 */
router.delete('/:id', deleteSmartphone);
export default router; 