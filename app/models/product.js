// models index
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Product model
const productSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      index: true,
      required: true,
    },
    description: {
      type: String,
    },
    images: [String],
    vendorName: {
      type: String,
    },
    price: {
      type: Number,
      default: 0,
    },
    vat: {
      type: Number,
      default: 0,
    },
    freeDelivery: {
      type: Boolean,
      default: false,
    },
    buyingPrice: {
      type: Number,
      default: 0,
    },
    currentStock: {
      type: Number,
      default: 0,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    newArrival: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
    topSelling: {
      type: Boolean,
      default: false,
    },
    expireDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const product = mongoose.model('product', productSchema);

export default product;
