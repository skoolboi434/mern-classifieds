import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Customer'
    },
    publications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Publication' }],
    name: {
      type: String,
      required: true
    },
    inStock: {
      type: Boolean,
      default: true
    },
    price: {
      type: Number,
      required: true,
      min: 0
    }
  },
  {
    timestamps: true
  }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
