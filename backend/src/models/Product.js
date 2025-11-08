import mongoose from 'mongoose';
import slugify from 'slugify';

// =====================
// EMI Plan Schema
// =====================
const EMIPlanSchema = new mongoose.Schema({
  tenureMonths: { type: Number, required: true },
  interestRatePercent: { type: Number, required: true, default: 0 },
  cashbackType: {
    type: String,
    enum: ['absolute', 'percent'],
    default: 'absolute'
  },
  cashbackValue: { type: Number, default: 0 },
  note: String
});

// =====================
// Variant Schema
// =====================
const VariantSchema = new mongoose.Schema({
  title: { type: String, required: true }, // e.g., "256GB - Orange"
  sku: { type: String, required: true },
  price: { type: Number, required: true },
  mrp: { type: Number, required: true },
  image: { type: String, required: true }, // main image
  images: [{ type: String }], // gallery images
  stock: { type: Number, default: 0 }
});

// =====================
// Finish Schema (Color options)
// =====================
const FinishSchema = new mongoose.Schema({
  name: { type: String, required: true }, // e.g., "Orange"
  colorHex: { type: String, required: true } // e.g., "#f28a00"
});

// =====================
// Product Schema
// =====================
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, unique: true },
  description: String,
  brand: String,
  badges: [{ type: String }], // e.g., ["NEW", "HOT DEAL"]
  mrp: { type: Number },
  price: { type: Number },
  image: { type: String }, // NEW: main display image
  finishes: [FinishSchema],
  variants: [VariantSchema],
  emiPlans: [EMIPlanSchema],
  createdAt: { type: Date, default: Date.now }
});

// =====================
// Auto-generate slug
// =====================
ProductSchema.pre('validate', function (next) {
  if (!this.slug) {
    this.slug = slugify(this.name, { lower: true, strict: true });
  }
  next();
});

export default mongoose.model('Product', ProductSchema);
