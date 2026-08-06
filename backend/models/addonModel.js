import mongoose from 'mongoose';

const addonSchema = new mongoose.Schema({
  name: {
    type: String
  },
  price: {
    type: mongoose.Schema.Types.Decimal128,
    required: true,
    min: 0
  }
});

const Addon = mongoose.model('Addon', addonSchema);

export default Addon;
