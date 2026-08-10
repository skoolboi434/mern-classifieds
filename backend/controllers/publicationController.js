import asyncHandler from '../middleware/asyncHandler.js';
import Publication from '../models/publicationModel.js';
import Product from '../models/productModel.js';
import Category from '../models/categoryModel.js';

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

// @desc Fetch Product by ID
// @route GET /api/publications/products/:id
// @access Private

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    return res.json(product);
  }
  res.status(404).json({ message: 'Product not found' });
});

// Category Controllers

// @desc Fetch Category Children by ID
// @route GET /api/publications/:id
// @access Private

const getCategoryChildrenById = asyncHandler(async (req, res) => {
  const categories = await Category.find({ parentCategory: req.params.id });

  if (categories) {
    return res.json(categories);
  }
  res.status(404).json({ message: 'Categories not found' });
});

// @desc Fetch top-level categories for a product
// @route GET /api/publications/products/:productId/categories
// @access Private

const getTopLevelCategoriesByProduct = asyncHandler(async (req, res) => {
  const categories = await Category.find({ product: req.params.productId, parentCategory: null });

  if (categories) {
    return res.json(categories);
  }
  res.status(404).json({ message: 'Categories not found' });
});

export { getPublications, getPublicationById, getProductsByPublication, getProductById, getCategoryChildrenById, getTopLevelCategoriesByProduct };
