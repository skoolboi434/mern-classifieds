import asyncHandler from '../middleware/asyncHandler.js';
import Publication from '../models/publicationModel.js';
import Product from '../models/productModel.js';

// @desc Fetch All Publications
// @route GET /api/publications
// @access Private

const getPublications = asyncHandler(async (req, res) => {
  const publications = await Publication.find({});
  res.json(publications);
});

// @desc Fetch Publication by ID
// @route GET /api/publications/:id
// @access Private

const getPublicationById = asyncHandler(async (req, res) => {
  const publication = await Publication.findById(req.params.id);

  if (publication) {
    return res.json(publication);
  }
  res.status(404).json({ message: 'Publication not found' });
});

// Product Controllers

// @desc Fetch Product by ID
// @route GET /api/publications/:id
// @access Private

const getProductsByPublication = asyncHandler(async (req, res) => {
  const products = await Product.find({ publications: req.params.id });

  if (products) {
    return res.json(products);
  }
  res.status(404).json({ message: 'Products not found' });
});

export { getPublications, getPublicationById, getProductsByPublication };
