import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Customer'
    },

    orderItems: [
      {
        name: {
          type: String,
          required: true
        },
        qty: {
          type: Number,
          required: true
        },
        price: {
          type: Number,
          required: true
        },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Product'
        }
      }
    ],
    category: {
      type: String,
      required: true
    },
    startDate: {
      type: Date,
      default: Date.now,
      required: true
    },
    endDate: {
      type: Date,
      required: true
    },

    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    saleAddress: {
      type: String
    },
    saleCity: {
      type: String
    },
    saleState: {
      type: String
    },
    saleZipCode: {
      type: Number
    },
    paymentMethod: {
      type: String,
      required: true
    },
    paymentResult: {
      id: {
        type: String
      },
      status: {
        type: String
      },
      update_time: {
        type: String
      },
      email_address: {
        type: String
      }
    },
    itemsPrice: {
      type: Number,
      required: true,
      default: 0.0
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false
    },
    paidAt: {
      type: Date
    }
  },
  {
    timestamps: true
  }
);

const Order = mongoose.model('Order', orderSchema);

export default Order;
