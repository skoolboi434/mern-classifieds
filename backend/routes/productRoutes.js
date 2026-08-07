import { getPublications, getPublicationById, getProductsByPublication } from '../controllers/publicationController.js';
import Publication from '../models/publicationModel.js';

import express from 'express';
const router = express.Router();

router.route('/').get(getPublications);
router.route('/:id').get(getPublicationById);
router.route('/:id/products').get(getProductsByPublication);

export default router;
