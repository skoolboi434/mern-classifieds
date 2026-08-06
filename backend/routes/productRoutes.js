import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';
import Publication from '../models/publicationModel.js';

import express from 'express';
const router = express.Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const publications = await Publication.find({});
    res.json(publications);
  })
);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const publication = await Publication.findById(req.params.id);

    if (publication) {
      return res.json(publication);
    }
    res.status(404).json({ message: 'Product not found' });
  })
);

export default router;
