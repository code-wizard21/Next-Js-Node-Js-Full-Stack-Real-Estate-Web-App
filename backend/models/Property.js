import mongoose from "mongoose";
import slugify from "slugify";

const propertyImagesSchema = mongoose.Schema({
  url: {
    type: String,
    required: [true, "Image file is required."],
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
});

const propertyAmenitiesSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Amenity name is required."],
  },
});

const propertySchema = mongoose.Schema(
  {
    realtor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    property_type: {
      type: String,
      enum: ["apartment", "house", "room", "commercial"],
      required: [true, "Property type is required."],
    },
    property_status: {
      type: String,
      enum: ["For Sale", "For Rent"],
      required: [true, "Property status is required."],
    },
    property_address: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zipcode: { type: String, required: true },
      country: { type: String, required: true },
    },
    property_images: [propertyImagesSchema],
    property_amenities: [propertyAmenitiesSchema],
    title: {
      type: String,
      required: [true, "Title is required."],
      unique: true,
      trim: true,
    },
    slug: String,
    description: {
      type: String,
      required: [true, "Description is required."],
    },
    price: {
      type: Number,
      required: [true, "Price is required."],
    },
    rooms: {
      type: Number,
      required: [true, "Total room is required."],
    },
    bathrooms: {
      type: Number,
      required: [true, "Bathroom is required."],
    },
    size: {
      type: Number,
      required: [true, "Size is required."],
    },
    garage: {
      type: Number,
      default: 0,
    },
    garage_size: {
      type: Number,
      default: 0,
    },
    year_build: {
      type: Number,
      required: [true, "Build year of property is required."],
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    // count of how many times clicked on the property
    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

propertySchema.pre("save", function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

const Property = mongoose.model("Property", propertySchema);

export default Property;
