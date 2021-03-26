import Property from "../models/Property.js";
import ErrorResponse from "../helpers/errorResponse.js";
import asyncHandler from "../middlewares/async.js";

/**
 * @desc    Get All Properties
 * @route   GET /api/properties
 * @access  Public
 */
export const getProperties = asyncHandler(async (req, res, next) => {
  const properties = await Property.find({});

  res.status(200).json({
    success: true,
    data: properties,
  });
});

/**
 * @desc    Get Single Property by ID
 * @route   GET /api/properties/:id
 * @access  Public
 */
export const getPropertyById = asyncHandler(async (req, res, next) => {
  const property = await Property.findById(req.params.id);

  res.status(200).json({
    success: true,
    data: property,
  });
});

/**
 * @desc    Create Property
 * @route   POST /api/properties
 * @access  Private(Only Admin or Realtor)
 */
export const createProperty = asyncHandler(async (req, res, next) => {
  const property = await Property.create(req.body);

  res.status(201).json({
    success: true,
    data: property,
  });
});

/**
 * @desc    Update Property
 * @route   PUT /api/properties/:id
 * @access  Private(Only Admin or Owner Realtor of Property)
 */
export const updateProperty = asyncHandler(async (req, res, next) => {
  let property = await Property.findById(req.params.id);

  if (property.realtor != req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse("You can only update your own property.", 401)
    );
  }

  property = await Property.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    data: property,
  });
});

/**
 * @desc    Delete Property
 * @route   PUT /api/properties/:id
 * @access  Private(Only Admin or Owner Realtor of Property)
 */
export const deleteProperty = asyncHandler(async (req, res, next) => {
  let property = await Property.findById(req.params.id);

  if (property.realtor != req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse("You can only update your own property.", 401)
    );
  }

  property.deleteOne({});

  res.status(200).json({
    success: true,
    data: {},
  });
});
