import {
  getPublications,
  getPublicationById,
  getProductsByPublication,
  getProductById,
  getCategoryChildrenById,
  getTopLevelCategoriesByProduct
} from '../controllers/publicationController.js';
import Publication from '../models/publicationModel.js';

import express from 'express';
const router = express.Router();

router.route('/').get(getPublications);
router.route('/:id').get(getPublicationById);
router.route('/:id/products').get(getProductsByPublication);
router.route('/products/:id').get(getProductById);
router.route('/categories/:id/children').get(getCategoryChildrenById);
router.route('/products/:productId/categories').get(getTopLevelCategoriesByProduct);

export default router;
