import mongoose from 'mongoose';
import { type } from 'node:os';

const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

const Customer = mongoose.model('Customer', customerSchema);

export default Customer;
